---
title: Overview of SplashKit Online's Folders and Files
description:
  An overview of what all of SplashKit Online's folders and files contain, and how they relate.
---

## Introduction

This document is a brief overview of how SplashKit Online's folders are structured, with short
descriptions on what each file contains. If you're looking for a particular piece of code, maybe
this will help!

## Structure

### Browser_IDE

This folder contains all the files relevant to the in-browser IDE. This includes front-end and
back-end Javascript, html, css, libraries, etc.

#### Folders

`node_modules` - All the installed node libraries.

`splashkit` - Where the SplashKit WebAssembly library build goes! Compiled from the SplashKitWasm
folder.

#### Files

##### Node Files

The following files are used when running as a node project

`server.js` - serves the main index, and sets up routing for the libraries.

`package.json` - The list of packages/libraries and versions that the project uses.

##### Main Editor

The following files are used inside the main page (`index.html`)

`index.html` - The editor's html itself - contains a simple layout and some placeholder elements for
the file view, ExecutionEnvironment, and code editors to load into.

`editorMain.js` - The main file that handles setting up the IDE. It loads the code editors, the
project, shows/updates the run/stop buttons, and also performs saving, loading, and file mirroring.
It also creates the ExecutionEnvironment, and IDBStoredProject on startup.

`IDBStoredProject.js` - Holds the IDBStoredProject class, which handles saving/loading the user's
project to/from internal browser storage. See
[IDBStoredProject](/products/splashkit/splashkit-online/code-documentation/classes/idb-stored-project)
for internal documentation.

`executionEnvironment.js` - Holds the ExecutionEnvironment class, which handles 'compiling' and
running the user's code in a safe way. See
[ExecutionEnvironment](/products/splashkit/splashkit-online/code-documentation/classes/execution-environment)
for internal documentation.

`treeview.js` - Holds the TreeView class, used to display a tree view targeted at showing a
filesystem. See
[TreeView](/products/splashkit/splashkit-online/code-documentation/classes/tree-view) for internal
documentation.

`fileview.js` - Creates an instance of the TreeView class, hooks it into the IDBStoredProject and
ExecutionEnvironment's filesystems, and places it on the main page.

`modal.js` - A utility file with a function for creating modals.

`projectInitializer.js` - Contains demo code (as text) and the function used to initialize the
default project - does something similar to `skm new`.

`stylesheet.css` - Contains the styles for the editor, primarily related to the TreeView but also
the code editors and other areas.

`splashkit-javascript-hint.js` - Contains code to handle autocompletion in the code editors,
including loading `splashkit_autocomplete.json`

`splashkit_autocomplete.json` - Contains data on all the SplashKit functions, classes and enums.

##### Internal Execution Environment

The following files are used inside the isolated iFrame (inside the Execution Environment)
(`executionEnvironment.html`)

`executionEnvironment.html` - The Execution Environment's main page, contains a simple layout with
placeholders for where the canvas and terminal should go.

`executionEnvironment_Internal.js` - Internal code for the ExecutionEnvironment. Handles receiving
messages from the main page's ExecutionEnvironment object, 'compiling', and running the user's code.

`executionEnvironment_CodeProcessor.js` - Handles processing the user's code, transforming and
modifying it so that it can be properly paused, restarted, etc.

`loadsplashkit.js` - used to load the SplashKit Wasm library.

`fsevents.js` - creates an eventTarget that can be used to listen to filesystem events inside the
virtual filesystem (that the SplashKit Wasm library can access).

`stylesheet.css` - Same as in [Main Editor](#main-editor).

### SplashKitWasm

This folder contains the files related to _building_ SplashKit so that it can run inside the
browser - the output from this build is then copied into Browser_IDE, where the library is used!

`cmake` - The cmake project - used to build the SplashKit Wasm library!

`external` - Contains the `splashkit-core` submodule, which contains all of SplashKit's code.

`stubs` - A couple of stubs (files with empty functions) used to help compile SplashKit despite
certain functionality missing.

`tools` - Tools used during compilation, particularly in relation to generating C++ to Javascript
bindings.

`generated` - Files generated during the build process.

`out` - Contains the built library! This is also copied straight into `Browser_IDE/splashkit` during
the build.

### DemoProjects

This folder contains a set of demo projects (just zip files) that can be loaded into the IDE for
testing, demonstration, or learning purposes.

### .archive

This folder contains an archive of previous trimester's work, primarily around some sort of login
system. currently unneeded but perhaps can be repurposed at some point.
