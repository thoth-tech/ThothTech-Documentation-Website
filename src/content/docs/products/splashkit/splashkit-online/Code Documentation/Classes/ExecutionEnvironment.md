---
title: ExecutionEnvironment - Code Documentation
description: An explanation of what ExecutionEnvironment is, its methods, members, and events.
---

[_executionEnvironment.js_](https://github.com/thoth-tech/SplashkitOnline/blob/main/Browser_IDE/executionEnvironment.js)

ExecutionEnvironment is a class designed to abstract out running the user's code, and also handle
the environment itself (such as resetting variables, preloading files, etc). It contains functions
to 'compile' user code, run the main program, reset itself, and create directories/files inside the
environment.

The actual implementation can be found inside `executionEnvironment.js`. Upon creation, it creates
an iFrame (which can be thought of as a page inside the page) - and this is where all the user's
code will be run.

## Why create an iFrame?

The iFrame it creates is sandboxed so that it cannot access anything inside the main page. This is
important, since while we can likely trust code the user writes themselves, we cannot trust code
they may receive from other people. If we ran the code the user writes directly inside the main
page, it could access and manipulate the IDE itself, along with accessing cookies and other things
it shouldn't have access to. By running it inside the iFrame, we can be sure it can't access
anything it shouldn't.

It also makes it clear which files are part of the project (since those exist outside the iFrame),
and which parts are only transient, such as logs (that only exist inside the iFrame and are
destroyed on reloads). It means user code can not permanently overwrite resources.

Additionally, it gives us a way to completely reset the environment the code is running in, as we
can destroy and recreate the iFrame without having to reload the main page itself.

To communicate with the iFrame, we can only send and receive messages, which also limits the number
of potential escape routes from the iFrame.

## Members

- `hasRunOnce` - has the program been run yet? Is reset with `resetEnvironment()`
- `executionStatus` - current status of the program, can be:
  - `ExecutionStatus.Unstarted`
  - `ExecutionStatus.Running`
  - `ExecutionStatus.Paused`

## Methods

- `constructor(container)` - takes a container element to load the iFrame inside.

### Initializing user's code

- `runCodeBlock(block, source)` - takes a code block (which has the block name `block`, and the
  source code `source`, syntax checks it, and if it passes, sends the code to the iFrame via a
  message.
- `runCodeBlocks(blocks)` - takes an array of dictionaries with the keys {name, code}, and calls
  `runCodeBlock` for each one.

### Running user's code

- `runProgram()` - sends a message to the iFrame to run the user's `main` (if it exists).
- `pauseProgram()` - sends a message to pause the user's program - returns a `promise`, that
  resolves once the program pauses, or fails after 2 seconds.
- `continueProgram()` - sends a message to continue the user's program (if it has been paused)
- `stopProgram()` - sends a message to stop the user's program completely - returns a `promise`,
  that resolves once the program stops, or fails after 2 seconds.

### Handling the environment

- `resetEnvironment()` - completely resets the environment, by destroying and recreating the iFrame.
  All files inside the environment will also be lost.
- `cleanEnvironment()` - Does a 'best-efforts' attempt to tidy the environment, such as removing
  user created global variables. Much faster than `resetEnvironment()`, and does not reset the file
  system.

### Filesystem

- `mkdir(path)` - sends a message to create a directory at `path`
- `writeFile(path, data)` - sends a message to write `data` to a file `path`, creating it if it does
  not exist

## Events

The events can be listened to by attaching with `addEventListener(event, callback)`

- `initialized` - the ExecutionEnvironment is setup and ready to execute code.
- `error` - an error has occurred in user code. Members:
  - `message` - the error message
  - `line` - the line number of the error
  - `block` - the name of the code block the error occurred in.
- `programStarted` - the program has started running
- `programStopped` - the program has stopped running
- `programPaused` - the program has paused
- `programContinued` - the program has resumed running
- `onMovePath` - A file or directory has been moved. Members:
  - `oldPath` - the original path
  - `newPath` - the path it was moved to
- `onMakeDirectory` - A directory has been made. Members:
  - `path` - the path to the new directory
- `onDeletePath` - A file or directory has been deleted. Members: - `path` - the path to the
  file/directory
- `onOpenFile` - A file has been opened, possibly for reading or writing. Members:
  - `path` - the path to the file
