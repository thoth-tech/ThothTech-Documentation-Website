---
title: How SplashKit Online runs the user's code!
description:
  A detailed explanation as to all the steps SplashKit Online takes to execute the user's code.
---

## Introduction

This document is a deep dive into how SplashKit Online runs the user's code. This is a multi-step
process that will take us through much of SplashKit Online's code, so get ready!

## Overview

Here's a _very_ brief overview of how it works. Don't worry if you don't understand what this means
yet! Each part will be explained in due time - but feel free to use this as a reference of the
overall process.

1. Before the user does anything...
   1. The IDE starts up, and creates an ExecutionEnvironment.
   2. The ExecutionEnvironment creates an iFrame, and loads SplashKit inside it.
2. User writes code into the code editor (currently there are two 'code blocks', General and Main).
3. User presses the Run button. First we have to run the code blocks, to create all the user's
   functions/classes and initialize global variables.
4. Pressing run calls `ExecutionEnvironment.runCodeBlocks`, passing in the General Code and Main
   Code code blocks. For each code block: 1. The code block's text is sent as an argument to
   `ExecutionEnvironment.runCodeBlock(block, source)` 2. The source code gets syntax checked. 3. If
   it is syntactically correct, it is then sent as a `message` into the ExecutionEnvironment's
   iFrame.
5. The following steps all happen inside the iFrame (for security purposes)
   1. The iFrame receives the message.
   2. The code is transformed to make it runnable within the environment
   3. A real function is created from the transformed code.
   4. **The code is run!**
6. Now it needs to run the user's main: `ExecutionEnvironment.runProgram()` is called.
7. This sends a message into the iFrame.
8. The following steps all happen inside the iFrame (for security purposes)
   1. The iFrame check if the user has created a `main()`
   2. **If so, `main()` is run!**

:::note

If you're wondering why the user's 'code blocks' get run, and only _then_ the user's main program
gets run, here's why. JavaScript is a completely dynamic language, so unlike compiled languages like
C++, functions and classes and so on aren't known ahead of time. Instead, the creation of a
function/class itself is runtime code. The code

```javascript
function myFunction() {
  return 4;
}
myFunction();
```

is _run_, to create a function called `myFunction`, that can now be called later on.

In a similar way, functions themselves are just objects, and can be assigned as follows:

```javascript
let myFunction = function () {
  return 4;
};
myFunction();
```

When we first run the user's code blocks, we are creating all their functions and classes and global
variables.

Only after this is done, can we then call `main()`, and start the program itself. But as you know
now, in a way it was running the whole time.

:::

## Before the user does anything

Looking inside `editorMain.js`

```javascript
// ------ Setup Project and Execution Environment ------
let executionEnviroment = new ExecutionEnvironment(document.getElementById("ExecutionEnvironment"));
```

_from
[editorMain.js](https://github.com/thoth-tech/SplashkitOnline/blob/main/Browser_IDE/editorMain.js)_

First, an `ExecutionEnvironment` is created.

From the
[Source Code Documentation](/products/splashkit/splashkit-online/code-documentation/classes/execution-environment)

> ExecutionEnvironment is a class designed to abstract out running the user's code, and also handle
> the environment itself (such as resetting variables, preloading files, etc). It contains functions
> to 'compile' user code, run the main program, reset itself, and create directories/files inside
> the environment.

When created, an important thing it does is create an iFrame (sort of a page inside the page), which
is where all code execution will take place. This is done for security, see
[here](/products/splashkit/splashkit-online/code-documentation/classes/execution-environment/#why-create-an-iframe)
for a more detailed explanation.

Inside the iFrame, the page `executionEnvironment.html` is loaded, which loads in things like the
SplashKit library itself, and also the executionEnvironment internal scripts, like
`executionEnvironment_Internal.js` and `executionEnvironment_CodeProcessor.js`

Once the environment finishes loading, it sends out an `initialized` event - this is when all the
green buttons in the interface become usable, and code can be executed!

## User writes their code, then presses run

Pressing the run button does three things:

```javascript
clearErrorLines();

runAllCodeBlocks();
/* This is what it looks like inside "runAllCodeBlocks":
executionEnviroment.runCodeBlocks([
    {name: "GeneralCode", code: editorInit.getValue()},
    {name: "MainCode", code: editorMainLoop.getValue()}
]);
*/

executionEnviroment.runProgram();
```

_from
[editorMain.js - runProgram()](https://github.com/thoth-tech/SplashkitOnline/blob/ddb06cec6296d6de905ee0a90084a4c1a71c7a58/Browser_IDE/editorMain.js#L194C6-L194C6)_

1. First it clears the error lines from the code editors.
2. Next, it calls `executionEnviroment.runCodeBlocks`, and gives it the two code blocks and the
   source code inside the code editors; this runs the user's code, which really means runs all the
   function/variable/class initialization.
3. Finally it runs the program - this runs the user's `main` function. Let's look at step 2 more
   closely.

## Pressing run calls `ExecutionEnvironment.runCodeBlocks`, passing in the General Code and Main Code code blocks

We can see by looking at the source code, that `runCodeBlocks` just calls `runCodeBlock` for each
block passed in.

```javascript
runCodeBlocks(blocks){
    for (let block of blocks){
        this.runCodeBlock(block.name, block.code);
    }
}
```

_from
[executionEnvironment.js](https://github.com/thoth-tech/SplashkitOnline/blob/main/Browser_IDE/executionEnvironment.js)_

So let's have a look at `runCodeBlock`

```javascript
runCodeBlock(block, source){
    // Syntax check code - will throw if fails.
    this._syntaxCheckCode(block, source);

    this.iFrame.contentWindow.postMessage({
        type: "RunCodeBlock",
        name: block,
        code: source,
    }, "*");
}
```

_from
[executionEnvironment.js](https://github.com/thoth-tech/SplashkitOnline/blob/main/Browser_IDE/executionEnvironment.js)_

First thing it does is call the internal function `_syntaxCheckCode(block, source)`, which as the
name says, will syntax check the code. The way this syntax checking works is somewhat complicated,
but let's step through it.

### Some backstory (optional reading)

Just as a precursor, in JavaScript there are multiple ways to execute code that the user provides as
text. One way is to use the function `eval`, for example you can run

```javascript
eval("alert('Hello!');");
```

and this will pop up a box, as if you had directly run

```javascript
alert("Hello!");
```

This method combines syntax checking and running together - first the browser syntax checks the
code, and then it runs it. However, we want to syntax check the code _before_ running it. The main
way to do this, is to create a _`Function` object_ from the source code. The browser will syntax
check the code when making it, without running it yet. As will be explained later, it turns out we
actually _need_ to make a `Function` object anyway, for certain important features like pausing the
code and allowing while loops.

This can be as simple as

```javascript
let myFunction = new Function("alert('Hello!');");
```

However, we also need to be notified of any errors that occur, so we can tell the user about them.
If you are familiar with JavaScript, you might suggest a `try/catch` block, like this:

```javascript
try {
  let myFunction = new Function("alert('Hello!');");
} catch (error) {
  // tell the user about the error
}
```

It 'tries' to create the new function, and if it fails, we catch the error. It turns out we can get
the error message and line number from that `error`, so this seems like it will work. The problem
with this, is that the actual 'error' that occurred, technically happened on the line where
`new Function(...)` was called, and not the line inside the user's code, meaning the line number we
get back is useless. So instead the method described next is what was used.

### Syntax Checking

The method used for syntax checking is to create a `Function` object from the user's source code,
which lets us do the syntax check without running the code. For reasons that will be explained
later, we actually create an `AsyncFunction`, which will let us run the code in a more flexible way
later on.

To retrieve any syntax errors that might occur when checking, we listen to the main window's `error`
event, which reports any errors that happen, and where they happened.

So the code to perform the syntax check looks a bit like this:

```
Attach to the "error" event
    If the event gets called next, report the error to the user.

Create the function - if the syntax check fails, the "error" event will get called, and the function will fail here.

Detach from the "error event"
```

One important aspect of implementing this, is that inside the sandboxed iFrame, the information we
get in the `error` event is very unhelpful - the line number is always 0, and the error message is
very generic. Luckily, since we are just syntax checking (and not _running_) the code, we can just
do the syntax check inside the main page instead of the iFrame - so this is what happens.

Once the code passes syntax checking, it is sent into the iFrame for the next steps. Let's have a
look at the code running inside the iFrame that receives the code:

```javascript
if (m.data.type == "RunCodeBlock") {
  let processedCode = "";
  try {
    processedCode = processCodeForExecutionEnvironment(
      m.data.code,
      "mainLoopStop",
      "mainLoopPause",
      "mainLoopContinuer",
      "onProgramPause",
    );

    tryEvalSource(m.data.name, processedCode);
  } catch (e) {
    ReportError(userCodeBlockIdentifier + m.data.name, "Unknown syntax error.", null);
  }
}
```

_from
[executionEnvironment_Internal.js](https://github.com/thoth-tech/SplashkitOnline/blob/ddb06cec6296d6de905ee0a90084a4c1a71c7a58/Browser_IDE/executionEnvironment_Internal.js#L248C10-L248C10)_

Let's break this down. First, it tries to run `processCodeForExecutionEnvironment`, passing in the
user's code and some other parameters. We'll see what that does in a moment, but for now, know that
it takes the user's code, and _changes it_, to allow us to pause it, resume it, reset it, etc.
Assuming it's successful, then we move to `tryEvalSource`, which makes a new `AsyncFunction` from
this modified source code, and then runs it! Remember, these stages all take place securely inside
the iFrame.

Let's look at how the code modification/transformation works, and why we do it.

## The code is transformed to make it runnable within the environment

### Code Transformation

#### Why do we modify/transform the user's code?

There are a couple of things that we want the user's code to be able to do, that's impossible to
support without modifying their code.

##### We want them to be able to have infinite while loops

It's pretty normal to have code that looks like this in a C program:

```c
void main(){
    bool quit = false;
    while(!quit){
        ...do stuff...
    }
}
```

where it just loops and loops until the user quits. However, in a browser, JavaScript is executed on
the same thread as the page. So normally the browser might do something like this:

1. Check for user input
2. Update the page
3. If the user clicks the button, **run some JavaScript**
4. Goto 1

Which works fine if the 'run some JavaScript' part ends quickly. But if it enters a loop, like in
the code above, then the browser won't be able to check for input or even update the page until the
code ends - if it's an infinite loop like above, the page can only crash.

What's the solution? We modify loops inside the user's code, so that they give control _back_ to the
browser periodically. This is done with JavaScript's `async` function support, and requires all user
functions to be marked as `async`, to have calls to those functions marked with `await`, to have
code inserted in every loop to handle the control passing, and to have user classes have some
changes (since constructors can't be async).

Here are some more specific details (optional reading):

- All loops automatically await a timeout of 0 seconds after executing for more than ~25ms.
- screen_refresh (and other similar functions) await a window.requestAnimationFrame
- All user functions are marked as async, so that they can use await.
- Similarly, all calls to user functions are marked with await.
- Constructors cannot be async, so rename all constructors of user classes to `__constructor`, and
  call it when user classes are newed. `let player = new Player()` becomes
  `let player = (new Player()).__constructor()`

This same setup is used to enable code pausing, and stopping, by simply listening for
\*pause/stop/continue **flags\*** when it does the awaits. To stop, we simply throw a
'ForceBreakLoop' error. To pause, we create a promise and await it. To continue, we call that
promise.

_Here's something important to note, for those wondering why we just don't use `eval` instead of
putting the user's code in a new `Function` object. We couldn't do this transformation if we didn't
put the user's code inside a function, because you cannot `eval` asynchronous code! Meaning the user
couldn't write while loops, or any long running code at all!_

##### We want the user to be able to declare global functions, variables, and classes in one block and be able to access them in another

When we evaluate the user's code, we are technically sticking it inside a function, then running it.
As such, the variables, functions and classes declared are actually scoped to that function, meaning
they vanish once the function ends. This obviously isn't very helpful - the user couldn't define
things in one code block, and use them in another, because they're in different scopes! In fact, we
couldn't even run the user's main, since it would vanish just after the code that creates it
finishes evaluating.

We could just combine the user's code together into a single piece that executes in the same scope,
but then we couldn't have hot-reloading, where the user can update their code _while_ the program
runs.

So what we do, is modify the user's code, so that declarations made inside the "global" scope, are
manually assigned to the _real_ global scope outside the function that the user's code is written
in. Just as an example, imagine the user has written the following code.

General Code:

```javascript
let globalVariable = "Hello!";
```

Main:

```javascript
function main() {
  write_line(globalVariable);
}
```

If we evaluated each block by putting the block's code directly into a new `Function` and running
the function, it would be equivalent to the following:

```javascript
function GeneralCode() {
  let globalVariable = "Hello!";
}
function MainCode() {
  function main() {
    write_line(globalVariable);
  }
}

// Init the user's functions, variables, etc
GeneralCode();
MainCode();

// Start the program!
main();
```

Hopefully it's clear why this wouldn't work.

Here's how we transform it:

```javascript
function GeneralCode() {
  window.globalVariable = "Hello!";
}
function MainCode() {
  window.main = function main() {
    write_line(globalVariable);
  };
}

// Init the user's functions, variables, etc
GeneralCode();
MainCode();

// Start the program!
main();
```

Notice how every time we define something that should be in the global scope, we assign it to
`window`? This is (_one name for_) the global scope in JavaScript. So now the
variables/functions/classes are actually in the global scope, and everything works as expected.

##### We also want them to be able to restart their program without old variables and functions being left behind

Now that we have the variables in the global scope, we have a problem. Let's say the user runs the
program above once. They then remove the line of code defining `globalVariable`. If they restart
their program, you'd expect that an error occurs when they reach the line
`write_line(globalVariable);`, since `globalVariable` isn't defined right?

But no error occurs! This is because, the global variable was already set the _first_ time they ran
the program, and when they 'restarted' it, all we did was call `main()` again, meaning the global
variable stayed in existence! We could fully reset the executionEnvironment with
`resetEnvironment()`, but this takes a long time (up to 20 seconds), so doing this every time the
user runs their code would be a poor user experience.

Luckily, we already know what the global variables are - we already transform them after all. So
what we can do is keep a list of them, and then when the user restarts the program, we can `delete`
all the variables from the global `window` object, and then we get a clean run; hence the function
`cleanEnvironment()` exists. Now when the user runs, they'll get an error as they should!

#### How do we modify the code?

While we could just modify the text as a string, this is error prone and kind of hacky. Instead, we
use a JavaScript library called **Babel**, which parses the user's JavaScript, and creates what's
called an AST (or abstract-syntax-tree), which lets us treat each part of the code as separate
objects we can manipulate. For example:

```javascript
let a = 10;
```

might become something like

```javascript
VariableDeclaration(Identifier("a"), NumericLiteral(10), (type = "let"));
```

There's no need to understand this too deeply, but it's just good to know.

#### Putting it all together

Now we have all the pieces needed to understand the `processCodeForExecutionEnvironment` function.

```javascript
function processCodeForExecutionEnvironment(
  userCode,
  asyncStopName,
  asyncPauseName,
  asyncContinueName,
  asyncOnPauseName,
) {
  asyncifyTransform__asyncStopName = asyncStopName;
  asyncifyTransform__asyncPauseName = asyncPauseName;
  asyncifyTransform__asyncContinueName = asyncContinueName;
  asyncifyTransform__asyncOnPauseName = asyncOnPauseName;

  // Find the user's global declarations - important for next step
  // Couldn't find a way to return extra information, so they are stored
  // in the global 'findGlobalDeclarationsTransform__userScope'
  Babel.transform(userCode, {
    plugins: ["findGlobalDeclarationsTransform"],
  });

  // Now do the actual transforms!
  userCode = Babel.transform(userCode, {
    plugins: ["makeFunctionsAsyncAwaitTransform", "asyncify"],
    retainLines: true,
  });

  return userCode.code;
}
```

_from
[executionEnvironment_CodeProcessor.js](https://github.com/thoth-tech/SplashkitOnline/blob/ddb06cec6296d6de905ee0a90084a4c1a71c7a58/Browser_IDE/executionEnvironment_CodeProcessor.js#L275)_

We can see it takes the user's code, and also some _names_ for the variables that will handle making
the code stop/pause/continue - these are the _flags_ mentioned earlier. It also takes the name of a
callback to call, when the user's code actually pauses.

We can see the first thing it does is assign these to some variables - you can ignore that part for
now, it's just an implementation detail (it doesn't seem possible to pass parameters into Babel
transforms, so I just used global variables...). But after that, it calls Babel with the
`"findGlobalDeclarationsTransform"`, this handles updating the list of global variables that we
clear when restarting the program. Then we run it again with two more passes -
`"makeFunctionsAsyncAwaitTransform"`, and `"asyncify"`, which handle making functions/calls
async/await along with the scope changes, and inserting the yielding back to the browser during
loops, respectively.

## A real function is created from the transformed code

```javascript
processedCode = processCodeForExecutionEnvironment(
  m.data.code,
  "mainLoopStop",
  "mainLoopPause",
  "mainLoopContinuer",
  "onProgramPause",
);

tryEvalSource(m.data.name, processedCode);
```

Hopefully we now understand what the first line here does. Now we get to actually run the processed
code! First we have to turn it into a real function, and this is exactly what `tryEvalSource` does
first. Let's have a look inside:

```javascript
async function tryEvalSource(block, source) {
  // First create and syntax check the function
  let blockFunction = await createEvalFunctionAndSyntaxCheck(block, source);

  if (blockFunction.state != "success") return blockFunction;

  return await tryRunFunction(blockFunction.value, reportError);
}
```

_from
[executionEnvironment_Internal.js](https://github.com/thoth-tech/SplashkitOnline/blob/ddb06cec6296d6de905ee0a90084a4c1a71c7a58/Browser_IDE/executionEnvironment_Internal.js#L191)_

As can be seen, the first thing that happens is that we call `createEvalFunctionAndSyntaxCheck`,
which does exactly what it says. You'll notice we're syntax checking here as well - this isn't
exactly deliberate, it just happens automatically when the `Function` object is created. Still, it's
helpful if the Babel output had a syntax error, for instance. The important part is inside
`createEvalFunctionAndSyntaxCheck`, here:

```javascript
return Object.getPrototypeOf(async function () {}).constructor(
  '"use strict";' + source + "\n//# sourceURL=" + userCodeBlockIdentifier + block,
);
```

_from
[executionEnvironment_Internal.js](https://github.com/thoth-tech/SplashkitOnline/blob/ddb06cec6296d6de905ee0a90084a4c1a71c7a58/Browser_IDE/executionEnvironment_Internal.js#L179C44-L179C44)_

Here's where the user's code _finally_ becomes a real function, that will actually be called! Notice
it looks a little different to the `new Function("...")` example earlier. This is because, it's
creating an `AsyncFunction`, which doesn't have a nice constructor, so we access it directly. The
`AsyncFunction` is important, because all of that work we did before modifying the user's code to
give control back to the browser when it loops, won't work without it being an `AsyncFunction`!

You'll also notice that we modify the user's code slightly; we don't just pass `source` directly, we
add `"use strict";` at the start, and `//# sourceURL=...` at the end. What do these do?

- `"use strict;"` makes the user's JavaScript code execute in strict mode, which tidies up a lot of
  the language's semantics, forces variable declarations to be explicit, and overall improves code
  quality and makes errors easier to track down. We couldn't turn on `"use strict";` without the
  manual scoping fixes either!
- `//# sourceURL=...` tells the browser what 'source file' the code is from. This means that when
  the browser reports an error, we'll be able to tell what code block it came from! Notice we add
  `userCodeBlockIdentifier` at the start? This is just a short string that we can use to help us
  tell if an error came from user code, or if it came from code in the IDE itself. An example might
  look like this `//# sourceURL=__USERCODE__MainCode`, and so if an error occurs, we will see it
  came from `__USERCODE__MainCode`, and tell the user it came from their "Main Code" block!

Now we can finally call this function to run the user's code! Remember, this won't run their
_program_ but it will run the code which creates all their functions, global variables, classes, and
of course their `main()` function. Actually running the code happens inside `tryRunFunction`, and
we'll look at that in just a short bit. But just know now that the code has been run (or failed with
an error); let's assume it successfully ran, and so we can actually run the user's `main`!

## Now it needs to run the user's main

If we recall, this all started with the user pressing the Run button, which looked like this:

```javascript
clearErrorLines();

runAllCodeBlocks();
/* This is what it looks like inside "runAllCodeBlocks":
executionEnviroment.runCodeBlocks([
    {name: "GeneralCode", code: editorInit.getValue()},
    {name: "MainCode", code: editorMainLoop.getValue()}
]);
*/

executionEnviroment.runProgram();
```

_from
[editorMain.js - runProgram()](https://github.com/thoth-tech/SplashkitOnline/blob/ddb06cec6296d6de905ee0a90084a4c1a71c7a58/Browser_IDE/editorMain.js#L194C6-L194C6)_

We now know what `runAllCodeBlocks` does quite well - it syntax checks the code, sends it to the
iFrame, the code gets transformed, stuffed into a function, and then run! So what does
`executionEnviroment.runProgram()` do? It's comparatively _much_ simpler!

First thing it does is send a message to the iFrame, telling it to run the program - we definitely
don't want to run the program in the main page, so this is all secured inside the iFrame, like the
execution earlier. Upon receiving this message, it then calls its own internal `runProgram()`

```javascript
async function runProgram() {
  if (window.main === undefined || !(window.main instanceof Function)) {
    ReportError(userCodeBlockIdentifier + "Program", "There is no main() function to run!", null);
    return;
  }
  if (!mainIsRunning) {
    mainLoopStop = false;

    mainIsRunning = true;
    parent.postMessage({ type: "programStarted" }, "*");
    await tryRunFunction(window.main);
    mainIsRunning = false;
    parent.postMessage({ type: "programStopped" }, "*");
  }
}
```

_from
[executionEnvironment_Internal.js](https://github.com/thoth-tech/SplashkitOnline/blob/ddb06cec6296d6de905ee0a90084a4c1a71c7a58/Browser_IDE/executionEnvironment_Internal.js#L223)_

Let's break this down.

First, it checks to see if the main program even exists:

```javascript
if (window.main === undefined || !(window.main instanceof Function))
```

We can see how it's just checking the 'global' scope of `window` - which is the same one we know the
user's functions get assigned to! So if the use created a `main` function, we'll be able to find it.
We also make sure it _is_ actually a function, and that they didn't do something like
`let main = 10;`

Next we make sure it isn't already running. If it was, we could end up with `main()` running
multiple times simultaneously, not ideal!

```javascript
if (!mainIsRunning){
    mainLoopStop = false;
```

If it wasn't already running, it's time to start it! First turn off the `mainLoopStop` flag.
Remember the async control flags mentioned earlier - this is one of them! If it's `true`, the
program will stop as soon as it can, so we make sure it's `false`.

```javascript
mainIsRunning = true;
parent.postMessage({ type: "programStarted" }, "*");
await tryRunFunction(window.main);
mainIsRunning = false;
parent.postMessage({ type: "programStopped" }, "*");
```

Now we set `mainIsRunning` to `true` (so that we can't start it multiple times at the same time),
and post a message to the outside window `"programStarted"` - there's a listener in the main page
that will then change the green buttons accordingly.

Finally, the moment of truth: `await tryRunFunction(window.main);` We run the program! It's called
with `await`, which means that the code will _wait_ for it to finish before continuing. Remember we
made all the user functions `async`? This allows them to give control back to the browser
momentarily, but it also means that they can't stop things that call them from continuing to the
next line of code - so we `await` to make sure we wait for the program to completely stop.

Once it does finally end (which will happen if we set `mainLoopStop` to `true`), we set
`mainIsRunning` back to `false`, so the user can start it again, and then post a message back to the
main window `"programStopped"`, which will again update the buttons accordingly.

### `tryRunFunction(func)` - what does it do?

The responsibility of `tryRunFunction` - which is used when running the code blocks earlier as well,
is to run the user's code, and then detect when it has errors and report them to the user.

These aren't syntax errors in this case, these are runtime errors (for instance if the user tries to
call a function that doesn't exist, or access outside the bounds of an array), and so we go about
detecting them in a way a bit different to the syntax errors before.

And after all, we can't use the window's `error` callback for the same reasons mentioned earlier -
inside the iFrame, the error message is generic, and line number reported is always 0! And we
certainly can't run the code outside the iFrame, or that would defeat the entire point of having it.

If we look inside `tryRunFunction`, we'll see it actually ends up calling `tryRunFunction_Internal`,
which is a bit more interesting. Here's a simplified version:

```javascript
async function tryRunFunction_Internal(func) {
  try {
    await func();
    return "success!";
  } catch (err) {
    if (err instanceof ForceBreakLoop) {
      return "Stopped";
    }

    let error = parseErrorStack(err);
    return error;
  }
}
```

_from
[executionEnvironment_Internal.js](https://github.com/thoth-tech/SplashkitOnline/blob/ddb06cec6296d6de905ee0a90084a4c1a71c7a58/Browser_IDE/executionEnvironment_Internal.js#L138)_

We can see it takes the user's function (for instance, the user's `main()`, or the `AsyncFunctions`
we made from their code blocks), and tries to run it. It waits for it to finish with `await`, and if
it finishes without issues, it returns "success!".

However, if an error was thrown, we catch it. If it was a `ForceBreakLoop` error, then we know it
threw it because the user pressed the Stop button, not because it crashed, and so we just report
back that it "Stopped". However, if that didn't happen, we figure out information about the error
(such as its line number and what code block it happened in) with `parseErrorStack(err)`, and then
return information about the error.

This information is received by the original `tryRunFunction`, and if an error occurred it reports
it to the user via `ReportError`.

Let's take a closer look at `parseErrorStack`, as the last stop on our journey.

### parseErrorStack - what does _it_ do?

Once we catch an error, the problem becomes "how do we report it to the user?" We need to give them
the error message, and at least a line number and code block to look at. If the error message had
members like `err.lineNumber` or `err.fileName` it'd be great, but they don't (unless you're using
Firefox...). However, all modern browsers support `err.stack`, which gives us a piece of text
describing the error and where it happened. It looks a bit like this:

```javascript
gameInnerLoop@Init.js;:25:25
main@Main.js;:25:11
async*tryRunFunction_Internal@http://localhost:8000/executionEnvironment_Internal.js:57:21
tryRunFunction@http://localhost:8000/executionEnvironment_Internal.js:89:21
runProgram@http://localhost:8000/executionEnvironment_Internal.js:132:15
@http://localhost:8000/executionEnvironment_Internal.js:167:9
EventListener.handleEvent*@http://localhost:8000/executionEnvironment_Internal.js:144:8
```

We can see on each line, the function, filename, line number, and even column number! The problem,
is that `stack` is actually non-standardized JavaScript, and so each browser implements it slightly
differently. Additionally, we still have to actually parse (read) the string, to get all the
information out of it. This is the job that `parseErrorStack` performs.

The actual method isn't that complicated. It uses a regex that is designed to work across both
Firefox and Chrome based browsers (including Edge), that reads out the file name and line number. It
then returns these! Not too hard overall. One thing to note, is there are two lines inside
`parseErrorStack` that might be confusing:

```javascript
if (file.startsWith(userCodeBlockIdentifier)) lineNumber -= userCodeStartLineOffset;
```

_from
[executionEnvironment_Internal.js - parseErrorStack](https://github.com/thoth-tech/SplashkitOnline/blob/ddb06cec6296d6de905ee0a90084a4c1a71c7a58/Browser_IDE/executionEnvironment_Internal.js#L123)_

Once we have extracted the line number, we check to see if the file name starts with the
`userCodeBlockIdentifier` (remember this from earlier, when we added the `//# sourceURL=` to the
user's code to help identify it?). If it starts with this, we know it's user code. And then we
subtract `userCodeStartLineOffset` from it. Why do we do that? The answer is that when we create the
`AsyncFunction` object, Firefox actually adds some lines to the start. For example, let's say we
create a simple function from text:

```javascript
let myFunc = new Function("console.log('Hi!');");
```

If we were to look at the function's source code with:

```javascript
myFunc.toString();
```

We get the following (at least in Firefox):

```javascript
function anonymous() {
  console.log("Hi!");
}
```

See how there are two extra lines at the start? When the ExecutionEnvironment starts, it actually
detects how many lines the browser adds at the start, and stores it inside
`userCodeStartLineOffset` - so in Firefox, `userCodeStartLineOffset` is equal to `2`. Subtracting
this from `lineNumber` then gives us the _actual_ line number of the error, so that we can highlight
it in the user's code editor.

## Recap

Hopefully having read all of that, you have a decent understanding of the steps SplashKit Online
takes to run the user's code! As a recap, let's have one more look at the overview, which hopefully
makes a lot more sense now.

1. Before the user does anything...
   1. The IDE starts up, and creates an ExecutionEnvironment.
   2. The ExecutionEnvironment creates an iFrame, and loads SplashKit inside it.
2. User writes code into the code editor (currently there are two 'code blocks', General and Main).
3. User presses the Run button. First we have to run the code blocks, to create all the user's
   functions/classes and initialize global variables.
4. Pressing run calls `ExecutionEnvironment.runCodeBlocks`, passing in the General Code and Main
   Code code blocks. For each code block: 1. The code block's text is sent as an argument to
   `ExecutionEnvironment.runCodeBlock(block, source)` 2. The source code gets syntax checked. 3. If
   it is syntactically correct, it is then sent as a `message` into the ExecutionEnvironment's
   iFrame.
5. The following steps all happen inside the iFrame (for security purposes)
   1. The iFrame receives the message.
   2. The code is transformed to make it runnable within the environment
   3. A real function is created from the transformed code.
   4. **The code is run!**
6. Now it needs to run the user's main: `ExecutionEnvironment.runProgram()` is called.
7. This sends a message into the iFrame.
8. The following steps all happen inside the iFrame (for security purposes)
   1. The iFrame check if the user has created a `main()`
   2. **If so, `main()` is run!**
