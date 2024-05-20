---
title: C++ <-> JavaScript Binding Generation Overview
description:
  A detailed explanation as to the how and why of SplashKit Online's new binding generator.
---

## Introduction

The only data type that can currently be passed to and from WebAssembly functions are integers. The
SplashKit API requires us not only to be able to pass numbers, but also vectors, structs, vectors of
structs, function pointers, and so on. Because of this, there is a necessity to generate _bindings_,
which are able to translate and transfer the data we need across the C++/JavaScript boundary.

We originally used the WebIDL Binder tool to accomplish this, but it had several major flaws:

- It did not support arrays of strings, nor structs
- It did not support arrays of arrays (e.g `matrix_2d` could not be represented)
- It would allocate memory for structs on the C++ side using malloc and only provide a pointer on
  the JavaScript side. As JavaScript has no concept of a destructor, this completely ruined value
  semantics and required manual freeing of even basic SplashKit types, such as color.
- It would return struct types via a pointer to a singleton for that function. Therefore the
  following code:
  ```javascript
  let colorA = rgba_color(1, 0, 0, 0); // Red; colorA points to the 'rgba_color return-singleton'
  let colorB = rgba_color(0, 1, 0, 0); // Green; overwrites the 'rgba_color return-singleton'
  // Right now colorA and colorB both point to the same 'color' - bad!
  fill_rectangle(colorA * /Should be red*/, 300, 300, 200, 200); // this actually ends up green!
  ```
  would draw a green rectangle, rather than a red one.
- It had no support for function overloads, making the JavaScript API more cumbersome to use and
  different from usual C++ samples.

Embind was also looked at, but also suffered from fundamental issues (see
[here](https://github.com/emscripten-core/emscripten/issues/6492) for one major issue). Thus it was
decided that a new solution was required.

## New Solution

The new solution was written from scratch in Python. The fundamental way it works is as follows:

- Structs are represented as proper JavaScript objects.
- When a function is called that needs to pass a struct to the C++ side, space is allocated on the
  WebAssembly stack, and the data for that object is copied from the JavaScript object. Then, a
  pointer to that location on the stack is passed into the C++ function, which operates as normal.
- Similarly, if the C++ returns a struct, space is preallocated on the stack, and the C++ function
  writes its return result into that space.
- Vectors are instead allocated on the heap and data copied into that space. The function is then
  passed/passes back two parameters - a pointer to that location on the heap, and a count. On the
  C++ side, a vector is constructed and copies the items from/to that block of memory.

Despite the extra copying compared to the previous solution, because of several other optimizations,
it has been demonstrated to be 2x more performant than WebIDL Binder, while maintaining proper value
semantics and vastly enhanced support of SplashKit's API - in fact, there is not a single function
that cannot be called now.

We can see an example of how this works with a simple function. Let's look at how
`string matrix_to_string(const matrix_2d &matrix)` is handled: The following is the C++ wrapper,
with some additional comments added:

```c++
    // CPP_matrix_to_string is the wrapper function. As can be seen, it directly takes a reference to a matrix, and returns a char* pointer rather than a std::string
    char* EMSCRIPTEN_KEEPALIVE CPP_matrix_to_string(const matrix_2d& matrix){
        // Here we call the SplashKit function, and store the result.
        string __conv_0_out = matrix_to_string(matrix);
        // Next we initialize the output variable
        char* _out = (char*)0;
        // And then allocate the string on the heap, cpoy the data out, and save the pointer.
        heapAllocateString(_out, __conv_0_out);
        // We then return the pointer.
        return _out;
    }
```

The JavaScript side has much more work to do - again with added comments as explanation:

```javascript
// This is the JavaScript function
function matrix_to_string(matrix) {
  // First we verify the type of the object passed in, and throw a useful error message if its incorrect.
  if (typeof matrix !== "object" || matrix.constructor != matrix_2d)
    throw new SplashKitArgumentError(
      "Incorrect call to matrix_to_string: matrix needs to be a matrix_2d, not a " + typeof matrix,
    );
  // We also check the argument count
  if (arguments.length != 1)
    throw new SplashKitArgumentError(
      "Incorrect call to matrix_to_string: expects 1 parameters, not " + String(arguments.length),
    );

  // Now we allocate space on the stack. First we save the current stack address
  let st = wasmExports.stackSave();
  // We then allocate space for the output char* pointer. Wasm is 32-bit by default, so 4 bytes
  let _out_ptr0 = wasmExports.stackAlloc(4);
  // We then allocate space for the matrix, 72 bytes
  let matrix_ptr0 = wasmExports.stackAlloc(72);
  let __conv_0_out;
  // We write out the values of the matrix into that address in the stack
  matrix.write(matrix_ptr0);
  try {
    // Now we call the C++ function CPP_matrix_to_string
    // We pass in the pointer to that stack allocated matrix and save the returned char*
    __conv_0_out = wasmExports.CPP_matrix_to_string(matrix_ptr0);
    let _out;
    // Now we convert the heap allocated string to a JavaScript string
    _out = HeapStringToJSString(__conv_0_out);
    // And return it! This will also trigger the 'finally' below
    return _out;
  } finally {
    // We make sure to deallocate the string from the heap
    DeallocHeapString(__conv_0_out);
    // And also restore the stack to where it was before we allocated extra things onto it
    wasmExports.stackRestore(st);
  }

  // Some more error handling - this doesn't apply for this function as there is only a single
  // overload, but for other functions this is a useful fallback.
  if (true)
    throw new SplashKitArgumentError(
      "The parameters passed to this function don't match any of its overloads.\n" +
        "You called matrix_to_string(" +
        user_params_to_string(arguments) +
        ")\n" +
        "Please use one of the following overloads:\n" +
        "    string matrix_to_string(matrix_2d matrix)\n",
    );
}
```

Finally, we can have a look at the JavaScript class for matrix_2d, to get an idea of what 'write'
does:

```javascript
class matrix_2d {
  constructor(elements) {
    this.elements =
      elements ??
      (function () {
        let a0 = new Array(3);
        for (let i0 = 0; i0 < 3; i0++) {
          let a1 = (a0[i0] = new Array(3));
          for (let i1 = 0; i1 < 3; i1++) {
            a1[i1] = 0;
          }
        }
        return a0;
      })();
  }

  static checkCPPMapping() {
    assert(
      0 == wasmExports.matrix_2d_elements_offset(),
      "Wrong offset! matrix_2d.elements| 0 != " + String(wasmExports.matrix_2d_elements_offset()),
    );
    assert(
      72 == wasmExports.matrix_2d_size(),
      "Wrong class size! matrix_2d| 72 != " + String(wasmExports.matrix_2d_size()),
    );
  }

  // This is where we write the elements of the matrix onto the stack
  write(ptr) {
    // We are writing doubles, so we adjust our pointer for accessing doubles by dividing by 8 (bytes)
    let elements_ptr = (ptr + 0) >> 3;
    for (let i0 = 0; i0 < 3; i0++) {
      for (let i1 = 0; i1 < 3; i1++) {
        // This is the exact line where we write into WASM memory
        Module.HEAPF64[elements_ptr] = this.elements[i0][i1];
        elements_ptr += 1;
      }
    }
  }
  read(ptr) {
    let elements_ptr = (ptr + 0) >> 3;
    for (let i0 = 0; i0 < 3; i0++) {
      for (let i1 = 0; i1 < 3; i1++) {
        this.elements[i0][i1] = Module.HEAPF64[elements_ptr];
        elements_ptr += 1;
      }
    }
  }
}
```

The job of the new binding generator is to generate functions and classes like this for every
function and every structure in the SplashKit API. It also has to handle generating functions for
`#defines` such as `COLOR_WHITE`, and creating function pointers on the JavaScript side and passing
them to the C++ side.

## The Binding Generation Code - Brief Overview

Let's now have a brief look at how the binding generation code works. There is quite a lot to it,
but here's an overview.

### Setup

We start with `__main__` inside `generate_javascript_bindings_and_glue.py`, which takes as arguments
the input SplashKit API json file, the output names for the C++/JS files respectively, and finally a
true/false parameter that specifies whether to emulate function overloading in the output
JavaScript.

First it reads in the API:

```python
# Read the api
api = read_json_api(api)
```

Next it creates a 'TypeEnvironment', which includes information on all basic C++ types (such as int,
float, etc), and also SplashKit structures, including size and offsets of members. The class can
also be used to resolve typedef'd types, determine if a type is a primitive, and so on. The code for
this class can be found inside `type_environment.py`, and here's how its used.

```python
# Compute memory information about all the types
types_env = compute_type_memory_information(api)
```

From here, if function overloading emulation is enabled, we modify the set of functions we will be
generating code for. We detect all the functions that need to be considered overloads of each other,
and then make the parameter names identical between them, based on the longest function. This makes
the emulation later on possible, where we then detect the number of arguments and their types to
dispatch the correct C++ function. Here's an example of what it does.

```
The following overloads:
Draw Circle (clr: color, c: circle, )
Draw Circle (clr: color, c: circle, opts: drawing_options, )
Draw Circle (clr: color, x: double, y: double, radius: double, )
Draw Circle (clr: color, x: double, y: double, radius: double, opts: drawing_options, )

would become the following:
Draw Circle (clr: color, c: x, )
Draw Circle (clr: color, c: x, opts: y, )
Draw Circle (clr: color, x: double, y: double, radius: double, )
Draw Circle (clr: color, x: double, y: double, radius: double, opts: drawing_options, )
```

None of the types have been changed - purely the names of the parameters. This is the code that
handles it:

```python
if enable_overloading:
    functions = copy.deepcopy(functions)
    make_function_overloads_consistent(functions)
```

and the function `make_function_overloads_consistent` is inside `glue_generation.js`

### Marshal Strategy Generation

The next line is pretty important

```python
# Generate all the code needed to marshal the data needed for each function
marshalled_functions = compute_marshalled_functions(types_env, functions)
```

This `compute_marshalled_functions` is going to take the set of functions, and for each function,
decide on and store the specific strategies it will use to pass each of its parameters and return
value. Not much code is generated in this step, but it is by far the most important. Let's quickly
look at the classes that store the data it computes:

```python
class MarshaledFunction:
    ''' A class storing information about a function that contains
    all the information needed for the final code-gen'''

    def __init__(self, name, unique_name, inouts):
        self.name = name
        self.unique_name = unique_name
        self.inouts = inouts
```

The `MarshalledFunction` has a `name` (its generic name), a `unique_name` (a name used when function
overloading is unavailable), and then `inouts` - which contain both parameters and return values.

The `inouts` are all of type `MarshaledParam`, which looks as follows:

```python
class MarshaledParam:
    '''Class that stores all the information needed to generate code to pass a
    parameter in/out from JS/C++'''

    def __init__(self, name, cpp_type, is_class_member=False, index=""):
        self.name = name
        self.is_class_member = is_class_member
        self.index = index

        # The final computed types
        self.cpp_type = copy.deepcopy(cpp_type)
        self.boundary = [copy.deepcopy(cpp_type)]
        self.js_type = copy.deepcopy(cpp_type)

        # Information about the parameter
        self.is_return = False
        self.return_output_via_return = False
        self.write_in = True
        self.write_out = True

        # The generated code used on the C++ side
        self.cpp_convert_in = ""
        self.cpp_out_params = []
        self.cpp_convert_out = ""
        self.cpp_return = ""

        # The generated code used on the JavaScript side
        self.js_alloc_sizes = []
        self.js_convert_in = ""
        self.js_write_ref = ""
        self.js_declare_ref = ""
        self.js_read_ref = ""
        self.js_out_params = []
        self.js_convert_out = ""
        self.js_dealloc = ""
        self.js_new = ""
        self.js_constructor = ""
        self.js_type_check = ""
        self.js_return = ""
```

I won't explain every field - but hopefully it can be seen that it's storing information and small
snippets of code that will be used when converting and transferring data across the C++<->JavaScript
boundary. These types are all found inside `marshalling.py`, while the overall strategies/functions
are found in `marshalling_strategies.py`

Back to `compute_marshalled_functions`, all it does internally is call
`calculate_marshalled_function` for each function, which then calls `marshal_parameter` for its
parameters and return value.

`marshal_parameter` then looks at the parameter passed in, and decides based on the parameter's
type, whether it's a reference type, const, etc, how its going to be passed. These specific
decisions are detailed in comments in the code.

Finally, at the bottom of the function it then dispatches which specific method it will marshal the
data with - we can see what that looks like here:

```python
    # Arrays require special handling
    if len(array_dims) > 0:
        pass_c_array(types_env, marshaled_param, address_and_divisor)
    # Handle passing JS functions (for callbacks and such)
    elif boundary_type.function_type != None:
        pass_js_function(types_env, marshaled_param, address_and_divisor)
    # If the type is a vector, then we need to pass it in via a heap allocation
    elif boundary_type.typename == "vector" and value_like(boundary_type):
        heap_allocate_vector_to_array(types_env, marshaled_param, address_and_divisor)
    # If it's a string, similarly we pass it in by heap allocating it and passing the pointer
    elif boundary_type.typename == "string" and value_like(boundary_type):
        heap_allocate_string(types_env, marshaled_param, address_and_divisor)
    # If type is a non primitive type, then ensure it is a passed by pointer at least
    elif not types_env.is_primitive(boundary_type.typename) and value_like(boundary_type):
        pass_value_struct_as_pointer(types_env, marshaled_param, address_and_divisor)
    # If type is just a typedef for a pointer, wrap it as it comes in/out
    elif marshaled_param.cpp_type.typename in types_env.api.typedefs:
        pass_typedefed_pointer(types_env, marshaled_param, address_and_divisor)
    # If type is a primitive type, pass it as it is
    elif types_env.is_primitive(boundary_type.typename) or boundary_type.is_pointer():
        pass_primitive(types_env, marshaled_param, address_and_divisor)
    else:
        assert False, "Couldn't marshal type!\n"+str(param)

```

The code for each of those functions is quite long and detailed, but almost every line has been
commented to explain the decisions it is making, so feel free to have a look inside
`marshalling_strategies.py`

After computing our `MarshalledFunction`s, we finally get to code generation output. C++ code
generation utilities are found inside `cpp_code_gen.py`, while JavaScript code generation is found
inside `js_code_gen.py`. They contain functions for generating struct definitions, function bodies,
declarations, and so on, all based around `MarshalledFunction`.

`glue_generation.py` then uses these functions to assemble the final code, which is called via the
following two lines in `__main__`

```python
# Generate all the final glue code
generate_cpp_glue(api, marshalled_functions, output_cpp)
generate_js_glue(types_env, api, marshalled_functions, output_js, enable_overloading)
```

There are a few other files I haven't mentioned, so here's a complete listing of every file and its
contents:

- `generate_javascript_bindings_and_glue.py` - holds the terminal script that takes as input the
  SplashKit API along with the output file paths, and performs the binding.
- `json_api_reader.py` - provides functions/classes to read in the SplashKit API and make it more
  convenient to process later on
- `js_binding_gen/streaming_code_indenter.py` - a small class that is used to automatically indent
  the generated code.
- `js_binding_gen/type_environment.py` - contains the `TypeEnvironment` class, used to query
  sizes/layouts of built-in and SplashKit specific types.
- `js_binding_gen/marshalling.py` - contains the `MarshalledFunction` and `MarshalledParam` types,
  which contain all the information needed for final code generation.
- `js_binding_gen/marshalling_strategies.py` - holds all the functions and logic needed to create
  the `MarshalledFunction`s.
- `js_binding_gen/js_code_gen.py` - contains code generation functions for JavaScript; e.g function
  calls, class definitions, etc.
- `js_binding_gen/cpp_code_gen.py` - contains code generation functions for C++; e.g function calls,
  declarations, etc
- `js_binding_gen/glue_generation.py` - contains methods that use the code generation utilities to
  actually generate the final output code. Also handles function overload emulation.
- `js_binding_gen/javascript_bindings_preamble.py` - contains lengthy code included in the generated
  JS/C++ that defines various utility functions used.

## Known Limitations

There is only one known limitation currently. Functions that take a reference to a fundamental type,
and return data to that reference, cannot be expressed in JavaScript. The only function this is
known to affect is
`point_2d closest_point_on_lines(const point_2d from_pt, const vector<line> &lines, int &line_idx)`,
as the number passed into `line_idx` will not change. There is no way to fix this in JavaScript at
the present time - the best we could do is make the user wrap their 'int' into a temporary object,
and then retrieve the updated value from that object after calling the function.

## Wrap-up

The new bindings generator has exposed vastly more SplashKit API functionality for use in
JavaScript. It fixes strange behaviors that the old bindings exhibited, that would have resulted in
confusion, especially for beginner programmers. Finally, It simplifies the usage of SplashKit Online
by making the JavaScript code look and behave almost identical to the equivalent C++ code, making it
easier to follow existing guides and API documentation. While it introduces more technical
complexity, it is a far more complete solution than the previous one, and should continue to prove
useful as SplashKit Online develops.
