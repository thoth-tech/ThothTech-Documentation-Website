---
title: Tutorials List
description: A compilation of SplashKit tutorials with recommendations for improvement.
sidebar:
  hidden: true
  order: 6
---

On this page is a compilation of SplashKit tutorials and tutorial proposals. Areas of potential
improvement have been marked.

The tutorials have been layed out in categories that seem reasonable for further development. There
is a need for both tutorials that focus on specific areas (such as sprites, or audio), along with
tutorials that bring these concepts together cohesively (like the Metroidvania series).

## Current Tutorials

---

### Starter

#### _Installation_

- Overview: Installation guides for SplashKit for different operating systems.
- Status: Completed
- Repo Links:
  [_splashkit.io_](https://github.com/splashkit/splashkit.io/tree/develop/source/articles/installation/)
  [_splashkit.io-starlight_](https://github.com/thoth-tech/splashkit.io-starlight/tree/master/src/content/docs/installation/)
- Website Links: [_Live_](https://splashkit.io/installation/)

#### _Getting Started Drawing using Procedures_

- Overview: An introduction to the basics of SplashKit.
- Status: Completed
- Repo Links:
  [_splashkit.io_](https://github.com/splashkit/splashkit.io/tree/develop/source/articles/guides/2018-05-30-get-started-drawing.html.md.erb)
  [_splashkit.io-starlight_](https://github.com/thoth-tech/splashkit.io-starlight/blob/master/src/content/docs/guides/Starter/get-started-drawing.mdx)
- Website Links: [_Live_](https://splashkit.io/guides/starter/get-started-drawing/)

#### _Understanding Double Buffering_

- Overview: An explanation of double buffering.
- Status: Needs Improvement/Checking
  - Explaining that without double buffering, the in-between states while drawing could end up
    visible to the user would be good.
- Repo Links:
  [_splashkit.io_](https://github.com/splashkit/splashkit.io/tree/develop/source/articles/guides/2018-05-30-basic-drawing.html.md.erb)
  [_splashkit.io-starlight_](https://github.com/thoth-tech/splashkit.io-starlight/blob/master/src/content/docs/guides/Starter/double-buffering.mdx)
- Website Links: [_Live_](https://splashkit.io/guides/starter/double-buffering/)

#### _Loading Resources with Bundles_

- Overview: An explanation of bundles.
- Status: Completed
- Repo Links:
  [_splashkit.io_](https://github.com/splashkit/splashkit.io/tree/develop/source/articles/guides/2018-06-05-bundles.html.md.erb)
  [_splashkit.io-starlight_](https://github.com/thoth-tech/splashkit.io-starlight/blob/master/src/content/docs/guides/Starter/Bundles.mdx)
- Website Links: [_Live_](https://splashkit.io/guides/starter/bundles/)

#### _Reading Text_

- Overview: How to read text from the terminal or from a graphical application.
- Status: Completed
- Repo Links:
  [_splashkit.io_](https://github.com/splashkit/splashkit.io/tree/develop/source/articles/guides/2018-10-02-reading-text.html.md.erb)
  [_splashkit.io-starlight_](https://github.com/thoth-tech/splashkit.io-starlight/blob/master/src/content/docs/guides/Starter/reading-text.mdx)
- Website Links: [_Live_](https://splashkit.io/guides/starter/reading-text/)

#### _Getting Started With SplashKit - Windows C#/C++_

- Overview: Covers installing MSYS2, SplashKit and VSCode + project setup.
- Status: Completed
- Repo Links:
  [_documentation_](https://github.com/thoth-tech/documentation/blob/main/docs/Splashkit/Applications/Tutorials%20and%20Research/Tutorial%20Proposals/Tutorial%20Markdowns/Getting%20Started%20With%20SplashKit%20-%20C%23-C%2B%2B/Getting%20Started%20With%20Splashkit%20-%20C%23-C%2B%2B.md)
  [_splashkit.io-starlight_](https://github.com/thoth-tech/splashkit.io-starlight/blob/master/src/content/docs/guides/Starter/Getting%20Started%20With%20Splashkit.md)
- Website Links: [_Live_](https://splashkit.io/guides/starter/getting-started-with-splashkit/)

---

### Input

#### _Getting Started With Mouse Button and Inputs_

- Overview: Covers mouse inputs, coordinates and visibility.
- Status: Completed
- Repo Links:
  [_documentation_](https://github.com/thoth-tech/documentation/blob/main/docs/Splashkit/Applications/Tutorials%20and%20Research/Tutorial%20Proposals/Tutorial%20Markdowns/Getting%20Started%20With%20Mouse%20Button%20and%20Inputs.md)
  [_splashkit.io-starlight_](https://github.com/thoth-tech/splashkit.io-starlight/blob/master/src/content/docs/guides/Inputs/Getting%20Started%20With%20Mouse%20Button%20and%20Inputs.md)
- Proposal Repo Links:
  [_SplashKit-Tutorial_](https://github.com/thoth-tech/SplashKit-Tutorial/blob/main/Tutorial%20Proposals/Getting%20Started%20With%20Mouse%20Button%20and%20Inputs.md)
- Website Links:
  [_Live_](https://splashkit.io/guides/inputs/getting-started-with-mouse-button-and-inputs/)

#### _Using Key Callbacks_

- Overview: Covers registering and deregistering key callbacks.
- Status: Completed
- Repo Links:
  [_SplashKit-Tutorial_](https://github.com/thoth-tech/SplashKit-Tutorial/blob/main/Tutorial%20Proposals/kcb/2023-07-30-using-keycallbacks.html.md)
  [_documentation_](https://github.com/thoth-tech/documentation/blob/main/docs/Splashkit/Applications/Tutorials%20and%20Research/Tutorial%20Proposals/kcb/2023-07-30-using-keycallbacks.html.md)

#### _Introduction to Key Codes_

- Overview: A list of keycodes + example.
- Status: Completed
- Repo Links:
  [_documentation_](https://github.com/thoth-tech/documentation/blob/main/docs/Splashkit/Applications/Tutorials%20and%20Research/Tutorial%20Proposals/Tutorial%20Markdowns/Introduction%20to%20Key%20Codes.md)
- Proposal Repo Links:
  [_SplashKit-Tutorial_](https://github.com/thoth-tech/SplashKit-Tutorial/blob/main/Tutorial%20Proposals/Introduction%20to%20Key%20Codes.md)
  [_documentation_](https://github.com/thoth-tech/documentation/blob/main/docs/Splashkit/Applications/Tutorials%20and%20Research/Tutorial%20Proposals/Introduction%20to%20Key%20Codes.md)

---

### Sprites

#### _Sprite Layering tutorial C++_

- Overview: Explanation of what sprite layering is with code and video of result.
- Status: Completed
- Repo Links:
  [_SplashKit-Tutorial_](<https://github.com/thoth-tech/SplashKit-Tutorial/blob/main/Tutorials/Sprite%20Layering%20Tutorial%20(C%2B%2B)/Sprite%20Layering%20Tutorial.md>)
  [_splashkit.io-starlight_](https://github.com/thoth-tech/splashkit.io-starlight/blob/master/src/content/docs/guides/Sprites/Sprite%20Layering%20Tutorial.md)
- Website Links: [_Live_](https://splashkit.io/guides/sprites/sprite-layering-tutorial/)

#### _Getting Started With Sprites in Splashkit - C#_

- Overview: Explanation of what sprites are in SplashKit.
- Status: Needs Improvement/Checking
  - Is quite good! One thing that might make it better is to just improve the explanation of what a
    sprite is, since a sprite isn't really a bitmap, it's closer to an instantiation of a bitmap (as
    mentioned later on in it).
- Repo Links:
  [_SplashKit-Tutorial_](https://github.com/thoth-tech/SplashKit-Tutorial/blob/main/Tutorials/Tutorial%20Markdowns/Getting%20Started%20With%20Sprites%20in%20Splashkit%20Tutorial%20-%20C%23/Getting%20Started%20With%20Sprites%20in%20Splashkit%20Tutorial%20-%20CSharp.md)
  [_splashkit.io-starlight_](https://github.com/thoth-tech/splashkit.io-starlight/blob/master/src/content/docs/guides/Sprites/Getting%20Started%20With%20Sprites%20csharp.md)
- Proposal Repo Links:
  [_SplashKit-Tutorial_](https://github.com/thoth-tech/SplashKit-Tutorial/blob/main/Tutorial%20Proposals/Getting%20Started%20With%20Sprites%20in%20Splashkit%20Outline%20-%20C%23.md)
  [_documentation_](https://github.com/thoth-tech/documentation/blob/main/docs/Splashkit/Applications/Tutorials%20and%20Research/Tutorial%20Proposals/Getting%20Started%20With%20Sprites%20in%20Splashkit%20Outline%20-%20C%23.md)
- Website Links: [_Live_](https://splashkit.io/guides/sprites/getting-started-with-sprites-csharp/)

#### _Getting Started With Sprite layering in Splashkit - C#_

- Overview: Explanation of what sprite layering is with code and video of result. Slightly more
  technical than 'Sprite Layering tutorial C++'.
- Status: Completed
- Repo Links:
  [_documentation_](https://github.com/thoth-tech/documentation/blob/main/docs/Splashkit/Applications/Tutorials%20and%20Research/Tutorial%20Proposals/Tutorial%20Markdowns/Getting%20Started%20With%20Sprite%20Layering%20in%20Splashkit%20Tutorial%20-%20C%23/Sprite%20layering%20in%20Splashkit%20Tutorial%20-%20C%23.md)
- Proposal Repo Links:
  [_SplashKit-Tutorial_](https://github.com/thoth-tech/SplashKit-Tutorial/blob/main/Tutorial%20Proposals/Getting%20Started%20With%20Sprite%20Layering%20In%20Splashkit%20-%20C%23.md)
  [_documentation_](https://github.com/thoth-tech/documentation/blob/main/docs/Splashkit/Applications/Tutorials%20and%20Research/Tutorial%20Proposals/Getting%20Started%20With%20Sprite%20Layering%20In%20Splashkit%20-%20C%23.md)

#### _Sprite Pack Documentation_

- Overview: An API reference for Sprite Packs.
- Status: Needs Improvement/Checking
  - As mentioned, not really a tutorial. Would be good as part of an API page.
- Repo Links:
  [_SplashKit-Tutorial_](https://github.com/thoth-tech/SplashKit-Tutorial/blob/main/Tutorial%20Proposals/Sprite%20Pack%20Documentation.md)

---

### Camera

#### _Using the Splashkit Camera_

- Overview: A guide on SplashKit's coordinate system and camera.
- Status: Completed
- Repo Links:
  [_splashkit.io_](https://github.com/splashkit/splashkit.io/tree/develop/source/articles/guides/2018-08-16-about-camera.html.md.erb)
  [_splashkit.io-starlight_](https://github.com/thoth-tech/splashkit.io-starlight/blob/master/src/content/docs/guides/Camera/about-camera.mdx)
- Website Links: [_Live_](https://splashkit.io/guides/camera/about-camera/)

---

### Audio

#### _Get started with SplashKit Audio_

- Overview: A guide on playing sound effects and music.
- Status: Needs improvement
  - A bit bare-bones. See the proposal 'Introduction to Splashkit Audio and Music Functions' for
    perhaps a good replacement.
- Repo Links:
  [_splashkit.io_](https://github.com/splashkit/splashkit.io/tree/develop/source/articles/guides/2018-06-10-about-audio.html.md.erb)
  [_splashkit.io-starlight_](https://github.com/thoth-tech/splashkit.io-starlight/blob/master/src/content/docs/guides/Audio/GettingStartedAudio.mdx)
- Website Links: [_Live_](https://splashkit.io/guides/audio/gettingstartedaudio/)

---

### Animations

#### _Using Animations_

- Overview: A guide to animation frames and scripts.
- Status: Completed
- Repo Links:
  [_splashkit.io_](https://github.com/splashkit/splashkit.io/tree/develop/source/articles/guides/2018-05-29-animation.html.md.erb)
  [_splashkit.io-starlight_](https://github.com/thoth-tech/splashkit.io-starlight/blob/master/src/content/docs/guides/Animations/Using%20Animation.mdx)
- Website Links: [_Live_](https://splashkit.io/guides/animations/using-animation/)

#### _Sprite Animation_

- Overview: Builds upon the "Using Animations", cover similar functionality (animations, movement,
  etc)
- Status: Completed
- Repo Links:
  [_SplashKit-Tutorial_](https://github.com/thoth-tech/SplashKit-Tutorial/blob/main/Tutorials/Sprite%20Animation%20Tutorial/Sprite%20Animation%20Tutorial.md)

---

### Networking

:::note[Thoughts]

While these tutorials are quite good, they feel very disconnected from the rest of SplashKit.
Wouldn't creating a (very simple) multiplayer game have been a better subject? I don't think anyone
is going to make a website using SplashKit.

:::

#### _Getting Started With Servers_

- Overview: A detailed tutorial about creating a web server that serves a file.
- Status: Completed
- Repo Links:
  [_splashkit.io_](https://github.com/splashkit/splashkit.io/tree/develop/source/articles/guides/2018-07-14-getting-started-with-servers.html.md.erb)
  [_splashkit.io-starlight_](https://github.com/thoth-tech/splashkit.io-starlight/blob/master/src/content/docs/guides/Networking/getting-started-with-servers.mdx)
- Website Links: [_Live_](https://splashkit.io/guides/networking/getting-started-with-servers/)

#### _Routing With Servers_

- Overview: A continuation of the previous tutorial, serving different pages to different routes.
- Status: Completed
- Repo Links:
  [_splashkit.io_](https://github.com/splashkit/splashkit.io/tree/develop/source/articles/guides/2018-08-10-routing-with-servers.html.md.erb)
  [_splashkit.io-starlight_](https://github.com/thoth-tech/splashkit.io-starlight/blob/master/src/content/docs/guides/Networking/routing-with-servers.mdx)
- Website Links: [_Live_](https://splashkit.io/guides/networking/routing-with-servers/)

#### _How to make a RESTful API call using Splashkit_

- Overview: A tutorial on making requests to RESTful APIs.
- Status: Completed
- Repo Links:
  [_splashkit.io_](https://github.com/splashkit/splashkit.io/tree/develop/source/articles/guides/2018-10-03-restful-api-call.html.md.erb)
  [_splashkit.io-starlight_](https://github.com/thoth-tech/splashkit.io-starlight/blob/master/src/content/docs/guides/Networking/index.mdx)
- Website Links: [_Live_](https://splashkit.io/guides/networking/restful-api-call/)

---

### Databases

#### _Using Databases_

- Overview: An introduction to interacting with databases via SplashKit.
- Status: Needs Improvement/Checking
  - The tutorial is well written and engaging. Only thing missing perhaps is a better explanation of
    what a database is, since SplashKit is targetted at beginnners who may not know what they are. A
    visual example with tables might be good?
- Repo Links:
  [_splashkit.io_](https://github.com/splashkit/splashkit.io/tree/develop/source/articles/guides/2017-10-03-using-databases.html.md)
  [_splashkit.io-starlight_](https://github.com/thoth-tech/splashkit.io-starlight/blob/master/src/content/docs/guides/Database/using-databases.mdx)
- Website Links: [_Live_](https://splashkit.io/guides/database/using-databases/)

#### _Getting Started With SplashKit Database_

- Overview: A much more in-depth tutorial on the database functions (closer to an API reference).
- Status: Completed
- Repo Links:
  [_documentation_](https://github.com/thoth-tech/documentation/blob/main/docs/Splashkit/Applications/Tutorials%20and%20Research/Tutorial%20Proposals/Tutorial%20Markdowns/Getting%20Started%20With%20SplashKit%20Database.md)
- Proposal Repo Links:
  [_documentation_](https://github.com/thoth-tech/documentation/blob/main/docs/Splashkit/Applications/Tutorials%20and%20Research/Tutorial%20Proposals/Getting%20Started%20With%20SplashKit%20Database.md)

---

### JSON

#### _Using JSON_

- Overview: A short explanation of JSON with a code example.
- Status: Needs improvement
  - Doesn't provide much explanation of JSON nor why one would want to use it. The code example
    clearly demonstrates writing, but is missing reading that data back in.
- Repo Links:
  [_splashkit.io_](https://github.com/splashkit/splashkit.io/tree/develop/source/articles/guides/2017-10-03-using-json.html.md)
  [_splashkit.io-starlight_](https://github.com/thoth-tech/splashkit.io-starlight/blob/master/src/content/docs/guides/JSON/using-json.mdx)
- Website Links: [_Live_](https://splashkit.io/guides/json/using-json/)

---

### Utilities

#### _Useful Utilities_

- Overview: Explanation of string convertion utilities.
- Status: Completed
- Repo Links:
  [_splashkit.io_](https://github.com/splashkit/splashkit.io/tree/develop/source/articles/guides/2017-10-03-useful-utilities.html.md)
  [_splashkit.io-starlight_](https://github.com/thoth-tech/splashkit.io-starlight/blob/master/src/content/docs/guides/Utilities/useful-utilities.md)
- Website Links: [_Live_](https://splashkit.io/guides/utilities/useful-utilities/)

---

### Game Creation

:::note[Thoughts]

While these tutorials are quite decent, they suffer from what seems to be a big problem. There isn't
actually a completed project that the tutorials are leading up to, and since some of the parts are
written by different people, there is a lack of continuity. Something introduced by one tutorial (as
an example: creating a floor using sprites), is then forgotten about in a future tutorial (which
then opts to quickly add a ground by drawing rectangles).

It would be good if there was a 'source-of-truth' codebase for the finished game, that can then be
used as a base to keep the tutorials cohesive even when written by different people.

:::

#### _Creating a 2D Metroidvania Game (1, 2, 5, 6, 12)_

- Overview: A series on producing a Metroidvania game, have only skim read. Seems quite thorough and
  well written.
- Status: Completed
- Repo Links:
  [_SplashKit-Tutorial_](https://github.com/thoth-tech/SplashKit-Tutorial/blob/main/Tutorials/Creating%20a%202D%20Metroidvania%20Game%20Using%20Splashkit/)

#### _Creating a 2D Metroidvania Game (2)_

- Overview: See above.

**Note:** There are **two** 'Part 2's, with somewhat overlapping content. Someone will need to
choose which one to use in the final series, or merge bits of them together. While this tutorial
suggests it comes after the _other_ part 2, I would recommend putting this one first, since this one
covers project creation with `skm new`, and doesn't go into as much detail about drawing graphics.

- Status: Completed
- Repo Links:
  [_SplashKit-Tutorial_](https://github.com/thoth-tech/SplashKit-Tutorial/blob/main/Tutorials/Creating%20a%202D%20Metroidvania%20Game%20Project%20Structure%20and%20Initialization/Creating%20a%202D%20%22Metroidvania%22%20Game%20-%20Project%20Structure%20and%20Initialization.md)

#### _Creating a 2D Metroidvania Game (3)_

- Overview: See above
- Status: Completed
- Repo Links:
  [_SplashKit-Tutorial_](https://github.com/thoth-tech/SplashKit-Tutorial/blob/main/Creating%20a%202D%20_Metroidvania_%20Game%20-%20Player%20Character%20Basics.md)

#### _Creating a 2D Metroidvania Game (4)_

- Overview: See above
- Status: Completed
- Repo Links:
  [_SplashKit-Tutorial_](<https://github.com/thoth-tech/SplashKit-Tutorial/blob/main/Creating%20a%202D%20_Metroidvania_%20Game%20-%20Environment%20Design%20Basics%20(1).md>)

#### _Creating a 2D Metroidvania Game (9)_

- Overview: See above
- Status: Completed
- Repo Links:
  [_SplashKit-Tutorial_](https://github.com/thoth-tech/SplashKit-Tutorial/blob/main/Creating%20a%202D%20_Metroidvania_%20Game%20-%20Power-Ups%20and%20Items.md)

#### _Creating a 2D Metroidvania Game (11)_

- Overview: See above
- Status: Completed
- Repo Links:
  [_SplashKit-Tutorial_](https://github.com/thoth-tech/SplashKit-Tutorial/blob/main/Creating%20a%202D%20_Metroidvania_%20Game%20-%20Audio%20and%20Sound%20Effects.md)

---

### Meta

#### _Writing a SplashKit Guide_

- Overview: A guide to contributing to SplashKit's tutorials.
- Status: Completed
- Repo Links:
  [_splashkit.io_](https://github.com/splashkit/splashkit.io/tree/develop/source/articles/contributing/index.html.md.erb)

---

### Debugging, Compilation and Publishing

#### _Debugging Your Application in Visual Studio Code (VSCode)_

- Overview: Debugging in VSCode; watches and breakpoints.
- Status: Completed
- Repo Links:
  [_SplashKit-Tutorial_](https://github.com/thoth-tech/SplashKit-Tutorial/blob/main/Tutorials/VScodeDEbuggerTut.md)

#### _CMake Tutorials 1 to 8_

- Overview: Tutorials on the syntax of CMake.
- Status: Needs Improvement/Checking
  - While these are well written, they don't have a whole lot to do with SplashKit aside from the
    final one (see below). Should they use and reference the SplashKit cmake file as an example each
    time?
- Repo Links:
  [_SplashKit-Tutorial_](https://github.com/thoth-tech/SplashKit-Tutorial/blob/main/Tutorials/Cmake%20Tutorial/)
  [_splashkit.io-starlight_](https://github.com/thoth-tech/splashkit.io-starlight/blob/master/src/content/docs/guides/Others/Cmake/)
- Proposal Repo Links:
  [_SplashKit-Tutorial_](https://github.com/thoth-tech/SplashKit-Tutorial/blob/main/Tutorial%20Proposals/Building%20the%20SplashKit%20Core%20Library%20with%20CMake.md)
  [_documentation_](https://github.com/thoth-tech/documentation/blob/main/docs/Splashkit/Applications/Tutorials%20and%20Research/Tutorial%20Proposals/Building%20the%20SplashKit%20Core%20Library%20with%20CMake.md)
- Website Links: [_Live_](https://splashkit.io/guides/others/cmake/1-get-started/)

#### _CMake #9. Building the SplashKit Core Library with CMake_

- Overview: Final tutorial on CMake, covering compiling SplashKit Core with it.
- Status: Completed
- Repo Links:
  [_SplashKit-Tutorial_](https://github.com/thoth-tech/SplashKit-Tutorial/blob/main/Tutorials/Cmake%20Tutorial/9.%20Cmake%20with%20SplashKit.md)
  [_splashkit.io-starlight_](https://github.com/thoth-tech/splashkit.io-starlight/blob/master/src/content/docs/guides/Others/Cmake/9.%20Cmake%20with%20SplashKit.md)
- Proposal Repo Links:
  [_SplashKit-Tutorial_](https://github.com/thoth-tech/SplashKit-Tutorial/blob/main/Tutorial%20Proposals/Building%20the%20SplashKit%20Core%20Library%20with%20CMake.md)
  [_documentation_](https://github.com/thoth-tech/documentation/blob/main/docs/Splashkit/Applications/Tutorials%20and%20Research/Tutorial%20Proposals/Building%20the%20SplashKit%20Core%20Library%20with%20CMake.md)
- Website Links: [_Live_](https://splashkit.io/guides/others/cmake/9-cmake-with-splashkit/)

#### _Publishing in SplashKit - C# / C++_

- Overview: Short tutorial explaining how to publish a game made in SplashKit, with regards to
  assets and such.
- Status: Completed
- Repo Links:
  [_documentation_](https://github.com/thoth-tech/documentation/blob/main/docs/Splashkit/Applications/Tutorials%20and%20Research/Tutorial%20Proposals/Tutorial%20Markdowns/Publishing%20with%20SplashKit%20-%20C%23)
  [_splashkit.io-starlight_](https://github.com/thoth-tech/splashkit.io-starlight/blob/master/src/content/docs/guides/Others/Publishing%20with%20SplashKit%20Csharp.md)
- Website Links: [_Live_](https://splashkit.io/guides/others/publishing-with-splashkit-csharp/)

---

### General Programming Via SplashKit (possibly irrelevant)

#### _The Programmers Field Guide Part 0-3_

- Overview: Uses SplashKit while teaching general programming.
- Status: Completed
- Repo Links:
  [_the-programmers-field-guide_](https://github.com/splashkit/the-programmers-field-guide/tree/main/src/content/docs/book/part-0-getting-started/3-building-programs/)

---

### Other (are these actually proposals?)

#### _Game Concept Ideas_

- Overview: An article on resources to help with coming up with game concepts and resources.
- Status: Needs improvement
  - While it's solid as an article, the way it presents itself as the first tutorial in a series
    (which as far as I can tell does not exist) makes its actual goal confusing. Unless further
    tutorials in this series will be made, I suggest re-writing parts of it to make it self
    contained. Is it actually a proposal? If so, why is it so long?
- Repo Links:
  [_SplashKit-Tutorial_](https://github.com/thoth-tech/SplashKit-Tutorial/blob/main/Tutorials/Game%20Concept.md)
  [_SplashKit-Tutorial_](https://github.com/thoth-tech/SplashKit-Tutorial/blob/main/Game%20Concept.md)

#### _Design Tutorial for 2D racer_

- Overview: An article describing some principles of UX/UI
- Status: Needs improvement
  - Same thoughts as above. It's solid as an introductory article, but it isn't a tutorial. Again,
    perhaps it's a proposal?
- Repo Links:
  [_SplashKit-Tutorial_](https://github.com/thoth-tech/SplashKit-Tutorial/blob/main/Tutorials/2d%20Racer%20Design%20tutorial.md)
  [_SplashKit-Tutorial_](https://github.com/thoth-tech/SplashKit-Tutorial/blob/main/2d%20Racer%20Design%20tutorial.md)

#### _Controls_

- Overview: A list of the controls needed to be compatible with the arcade machine. Not a tutorial.
- Status: Needs improvement
  - The file itself is fine, but it shouldn't be in tutorials.
- Repo Links:
  [_SplashKit-Tutorial_](https://github.com/thoth-tech/SplashKit-Tutorial/blob/main/Tutorials/arcade_controls.md)
  [_SplashKit-Tutorial_](https://github.com/thoth-tech/SplashKit-Tutorial/blob/main/arcade_controls.md.md)
  [_arcade-games_](https://github.com/thoth-tech/arcade-games/blob/master/README.md)

## Proposals

---

### Incomplete (On Trello)

#### _Creating a 2D Metroidvania Game (7, 8, 10, 13)_

- Overview: The remaining parts in a series on producing a Metroidvania game.
- Status: Incomplete

#### _Introduction to Splashkit Audio and Music Functions_

- Overview: Proposal for introduction to audio and music functions.
- Status: Incomplete
  - Seems to overlap with 'Get started with SplashKit Audio' but much more in-depth. Possibly a good
    replacement.
- Repo Links:
  [_SplashKit-Tutorial_](https://github.com/thoth-tech/SplashKit-Tutorial/blob/main/Tutorial%20Proposals/Audio%20Series/Basic%20Audio%20Manipulation%20in%20Splashkit.md)
  [_documentation_](https://github.com/thoth-tech/documentation/blob/main/docs/Splashkit/Applications/Tutorials%20and%20Research/Tutorial%20Proposals/Basic%20Audio%20Manipulation%20in%20Splashkit.md)

#### _Managing Audio Resources in Splashkit_

- Overview: Covers sound and music resource management.
- Status: Incomplete
  - Seems to overlap with 'Get started with SplashKit Audio' but much more in-depth. Possibly a good
    replacement.
- Repo Links:
  [_SplashKit-Tutorial_](https://github.com/thoth-tech/SplashKit-Tutorial/blob/main/Tutorial%20Proposals/Audio%20Series/Managing%20Audio%20Resources%20in%20Splashkit.md)

#### _Working with Sound Effects in Splashkit_

- Overview: Covers specifically sound effects, playing them, etc.
- Status: Incomplete
  - Seems to overlap with 'Get started with SplashKit Audio' but much more in-depth. Possibly a good
    replacement.
- Repo Links:
  [_SplashKit-Tutorial_](https://github.com/thoth-tech/SplashKit-Tutorial/blob/main/Tutorial%20Proposals/Audio%20Series/Working%20with%20Sound%20Effects%20in%20Splashkit.md)

#### _Software Requirements Specification for Mario-Like Game Tutorial Using Splashkit_

- Overview: Proposal for a Mario-like game tutorial.
- Status: Probably incomplete.
- Repo Links:
  [_documentation_](https://github.com/thoth-tech/documentation/blob/main/docs/Splashkit/Applications/Tutorials%20and%20Research/Tutorial%20Proposals/Splash%20World%20Adventures.md)
  [_SplashKit-Tutorial_](https://github.com/thoth-tech/SplashKit-Tutorial/blob/main/Tutorial%20Proposals/Splash%20World%20Adventures.md)

#### _Understanding SplashKit Manager (SKM) Shell Commands_

- Overview: Covers SplashKit project setup + other commands.
- Status: Probably incomplete.
  - Overlaps with 'Getting Started: C++, C#, Python, and Pascal - Windows'. See above. Also mostly
    already covered by 'Getting Started With SplashKit - Windows C#/C++'
- Repo Links:
  [_SplashKit-Tutorial_](<https://github.com/thoth-tech/SplashKit-Tutorial/blob/main/Tutorial%20Proposals/Understanding%20SplashKit%20Manager%20(SKM)%20Shell%20Commands.md>)
  [_documentation_](<https://github.com/thoth-tech/documentation/blob/main/docs/Splashkit/Applications/Tutorials%20and%20Research/Tutorial%20Proposals/Understanding%20SplashKit%20Manager%20(SKM)%20Shell%20Commands.md>)

---

### Incomplete (Not on Trello)

#### _Using JSON Files_

- Overview: Proposal for a more complete JSON tutorial.
- Status: Incomplete
- Repo Links:
  [_SplashKit-Tutorial_](https://github.com/thoth-tech/SplashKit-Tutorial/blob/main/Tutorial%20Proposals/Proposal%20for%20SplashKit%20JSON%20Functionality%20Tutorial%20Series.md)

#### _2 D Racer - Features to keep & add_

- Overview: Proposal for features in 2D Racer?
- Status: Probably incomplete.
- Repo Links:
  [_SplashKit-Tutorial_](https://github.com/thoth-tech/SplashKit-Tutorial/blob/main/Tutorial%20Proposals/2%20D%20Racer%20-%20Features%20to%20keep%20%26%20add.md)
  [_SplashKit-Tutorial_](https://github.com/thoth-tech/SplashKit-Tutorial/blob/main/2%20D%20Racer%20-%20Features%20to%20keep%20%26%20add.md)

### Incomplete (Archived/Deleted)

#### _Getting Started: C++, C#, Python, and Pascal - Windows_

- Overview: Covers installing MSYS2, SplashKit and VSCode + project setup.
- Status: Archived - too much overlap.
  - Overlaps with 'Understanding SplashKit Manager (SKM) Shell Commands'. See below. Also mostly
    already covered by 'Getting Started With SplashKit - Windows C#/C++'
- Repo Links:
  [_SplashKit-Tutorial_](https://github.com/thoth-tech/SplashKit-Tutorial/blob/main/Tutorial%20Proposals/Getting%20Started%20in%20Splashkit%20Outline.md)
  [_documentation_](https://github.com/thoth-tech/documentation/blob/main/docs/Splashkit/Applications/Tutorials%20and%20Research/Tutorial%20Proposals/Getting%20Started%20in%20Splashkit%20Outline.md)

## [For Reference] Current SplashKit Tutorial/Proposal Directories

All the directories listed below contain either tutorials or proposals (or both). In its current
state, tutorials and proposals seem to be mixed together and files from the same series are
scattered across folders. There is also a lot of duplication.

The current plan for future tutorials seems to be to store all tutorials under
[splashkit.io-starlight](https://github.com/thoth-tech/splashkit.io-starlight), and all tutorial
proposals under
[ThothTech-Documentation-Website](https://github.com/thoth-tech/ThothTech-Documentation-Website). We
should attempt to migrate all tutorials to fit under that structure at some point. There are also
some completed tutorials that are not currently live on any site - it should be investigated if
there is a reason for this.

### Tutorials

- [https://github.com/splashkit/splashkit.io/tree/develop/source](https://github.com/splashkit/splashkit.io/tree/develop/source/)
  - [articles/contributing](https://github.com/splashkit/splashkit.io/tree/develop/source/articles/contributing/)
  - [articles/guides](https://github.com/splashkit/splashkit.io/tree/develop/source/articles/guides/)
  - [articles/installation](https://github.com/splashkit/splashkit.io/tree/develop/source/articles/installation/)
- [https://github.com/thoth-tech/SplashKit-Tutorial/blob/main](https://github.com/thoth-tech/SplashKit-Tutorial/blob/main/)
  - [Tutorial Proposals](https://github.com/thoth-tech/SplashKit-Tutorial/blob/main/Tutorial%20Proposals/)
    - [kcb](https://github.com/thoth-tech/SplashKit-Tutorial/blob/main/Tutorial%20Proposals/kcb/)
  - [Tutorials](https://github.com/thoth-tech/SplashKit-Tutorial/blob/main/Tutorials/)
    - [Cmake Tutorial](https://github.com/thoth-tech/SplashKit-Tutorial/blob/main/Tutorials/Cmake%20Tutorial/)
    - [Creating a 2D Metroidvania Game Using Splashkit](https://github.com/thoth-tech/SplashKit-Tutorial/blob/main/Tutorials/Creating%20a%202D%20Metroidvania%20Game%20Using%20Splashkit/)
    - [Sprite Layering Tutorial (C++)](<https://github.com/thoth-tech/SplashKit-Tutorial/blob/main/Tutorials/Sprite%20Layering%20Tutorial%20(C%2B%2B)/>)
    - [Tutorial Markdowns/Getting Started With Sprites in Splashkit Tutorial - C#](https://github.com/thoth-tech/SplashKit-Tutorial/blob/main/Tutorials/Tutorial%20Markdowns/Getting%20Started%20With%20Sprites%20in%20Splashkit%20Tutorial%20-%20C%23/)
- [https://github.com/thoth-tech/documentation/blob/main/docs/Splashkit/Applications/Tutorials and Research](https://github.com/thoth-tech/documentation/blob/main/docs/Splashkit/Applications/Tutorials%20and%20Research/)
  - [Tutorial Proposals/Tutorial Markdowns](https://github.com/thoth-tech/documentation/blob/main/docs/Splashkit/Applications/Tutorials%20and%20Research/Tutorial%20Proposals/Tutorial%20Markdowns/)
    - [Getting Started With SplashKit - C#-C++](https://github.com/thoth-tech/documentation/blob/main/docs/Splashkit/Applications/Tutorials%20and%20Research/Tutorial%20Proposals/Tutorial%20Markdowns/Getting%20Started%20With%20SplashKit%20-%20C%23-C%2B%2B/)
    - [Getting Started With Sprite Layering in Splashkit Tutorial - C#](https://github.com/thoth-tech/documentation/blob/main/docs/Splashkit/Applications/Tutorials%20and%20Research/Tutorial%20Proposals/Tutorial%20Markdowns/Getting%20Started%20With%20Sprite%20Layering%20in%20Splashkit%20Tutorial%20-%20C%23/)
  - [Tutorial Proposals/kcb](https://github.com/thoth-tech/documentation/blob/main/docs/Splashkit/Applications/Tutorials%20and%20Research/Tutorial%20Proposals/kcb/)
- [https://github.com/thoth-tech/splashkit.io-starlight/blob/master/src/content/docs/guides](https://github.com/thoth-tech/splashkit.io-starlight/blob/master/src/content/docs/guides/)
  - [Animations](https://github.com/thoth-tech/splashkit.io-starlight/blob/master/src/content/docs/guides/Animations/)
  - [Audio](https://github.com/thoth-tech/splashkit.io-starlight/blob/master/src/content/docs/guides/Audio/)
  - [Camera](https://github.com/thoth-tech/splashkit.io-starlight/blob/master/src/content/docs/guides/Camera/)
  - [Database](https://github.com/thoth-tech/splashkit.io-starlight/blob/master/src/content/docs/guides/Database/)
  - [Inputs](https://github.com/thoth-tech/splashkit.io-starlight/blob/master/src/content/docs/guides/Inputs/)
  - [JSON](https://github.com/thoth-tech/splashkit.io-starlight/blob/master/src/content/docs/guides/JSON/)
  - [Networking](https://github.com/thoth-tech/splashkit.io-starlight/blob/master/src/content/docs/guides/Networking/)
  - [Others](https://github.com/thoth-tech/splashkit.io-starlight/blob/master/src/content/docs/guides/Others/)
    - [Cmake](https://github.com/thoth-tech/splashkit.io-starlight/blob/master/src/content/docs/guides/Others/Cmake/)
  - [Sprites](https://github.com/thoth-tech/splashkit.io-starlight/blob/master/src/content/docs/guides/Sprites/)
  - [Starter](https://github.com/thoth-tech/splashkit.io-starlight/blob/master/src/content/docs/guides/Starter/)
  - [Utilities](https://github.com/thoth-tech/splashkit.io-starlight/blob/master/src/content/docs/guides/Utilities/)
- [https://github.com/thoth-tech/splashkit.io-starlight/tree/master/src/content/docs/installation](https://github.com/thoth-tech/splashkit.io-starlight/tree/master/src/content/docs/installation/)

### Tutorial Proposals

- [https://github.com/thoth-tech/SplashKit-Tutorial/blob/main](https://github.com/thoth-tech/SplashKit-Tutorial/blob/main/)
  - [Tutorial Proposals](https://github.com/thoth-tech/SplashKit-Tutorial/blob/main/Tutorial%20Proposals/)
    - [Audio Series](https://github.com/thoth-tech/SplashKit-Tutorial/blob/main/Tutorial%20Proposals/Audio%20Series/)
  - [Tutorials](https://github.com/thoth-tech/SplashKit-Tutorial/blob/main/Tutorials/)
- [https://github.com/thoth-tech/documentation/blob/main/docs/Splashkit/Applications/Tutorials and Research/Tutorial Proposals](https://github.com/thoth-tech/documentation/blob/main/docs/Splashkit/Applications/Tutorials%20and%20Research/Tutorial%20Proposals/)
