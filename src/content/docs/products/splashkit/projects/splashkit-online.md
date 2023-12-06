---
title: Splashkit Online
---

SplashKit Online is a beginner friendly programming environment that runs right inside the browser, designed for educational purposes and use with SplashKit. The user can create projects in it, import resources like images and music, and then write and execute Javascript that calls the SplashKit library. You can use it to make an entire game right inside your browser without downloading or installing anything, making it a really easy way to get started with programming! Development spans both low level elements like building SplashKit so that it can be used in the browser, and higher level Javascript development related to UX for the IDE, and security for code execution.

**In case it's useful, on the technical side there are currently two main areas:**

1. **Compiling SplashKit to WebAssembly and creating bindings to it so that it can be used as a library in the browser.** Here one gets to work on something a bit low level, with a mixture of C++ and technical Javascript development to bridge it to the browser, including data marshaling and writing wrappers. It's mostly complete, but there are some parts of SplashKit that have not been ported fully yet, particularly with regards to networking and the terminal.

2. **Development of the IDE that runs in the browser.** This is higher level front-end Javascript development, and involves a lot of interesting elements such as IndexedDB local storage, iFrames/messaging for isolation, and virtual Unix style file systems. It is being kept simple so that it can be hosted as a static page easily, so there deliberately aren't any frameworks being used. There's lot of work here regarding UX, but also security (such as making sure the code executed is isolated in a safe way) and interactivity/user friendliness.

**Currently future development may involve:**

- Improved project handling (multiple projects in-browser, exporting finished projects)
- Further developing REPL functionality and helping users solve errors
- Creating tutorials on how to use the IDE
- Write ports for ncurses and cURL that build under Emscripten to WebAssembly
- In-browser compilation or intepretation of C++ code

![Splashkit-Online](/splashkit-online1.png)
