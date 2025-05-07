---
title: API Support Tests
description:
  The results of running tests to check support for parts of the SplashKit API, across the two
  currently supported languages.
---

# Report on SplashKit API functionality in SplashKit Online

### Overview

While much of the SplashKit API already works in browsers thanks to Emscripten, there are still
areas of functionality that do not. This report will outline what is working, what isn't, and the
general reason why.

### SplashKit Tests

It was decided that the most efficient way to test SplashKit's functionality was to use the existing
suite of tests that exist inside `splashkit-core`. To test the JavaScript language backend, these
tests had to be converted. To assist with this, a small C++ to JavaScript conversion utility was
written; the result of this was then patched up manually. For C++, a few of the tests had to be
slightly modified, but all in all are practically identical to their original source.

The project file containing these tests will be added to the SplashKit Online DemoProjects folder
for reproducibility. Here are the results grouped by API category.

| Field            | JavaScript        | C++               | Details                                                                                                                                                                                                                                                                  |
| ---------------- | ----------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Animations       | Full Support      | Full Support      |                                                                                                                                                                                                                                                                          |
| Audio            | Near Full Support | Near Full Support | No FLAC support or MOD support.                                                                                                                                                                                                                                          |
| Camera           | Full Support      | Full Support      |                                                                                                                                                                                                                                                                          |
| Color            | Full Support      | Full Support      |                                                                                                                                                                                                                                                                          |
| Geometry         | Full Support      | Full Support      |                                                                                                                                                                                                                                                                          |
| Graphics         | Full Support      | Near Full Support | C++ backend doesn't support reading pixels currently (so no `take_screenshot`, etc).                                                                                                                                                                                     |
| Input            | Near Full Support | Near Full Support | IME doesn't show up when using `Start Reading Text`.                                                                                                                                                                                                                     |
| Json             | Full Support      | Full Support      |                                                                                                                                                                                                                                                                          |
| Logging          | Full Support      | Full Support      |                                                                                                                                                                                                                                                                          |
| Networking       | No Support        | No Support        | All networking functionality is replaced with stubs currently, due to no cURL support.                                                                                                                                                                                   |
| Physics          | Full Support      | Full Support      |                                                                                                                                                                                                                                                                          |
| Raspberry        | No Support        | No Support        | Disabled during build.                                                                                                                                                                                                                                                   |
| Resource Bundles | Full Support      | Full Support      |                                                                                                                                                                                                                                                                          |
| Resources        | Full Support      | Full Support      |                                                                                                                                                                                                                                                                          |
| Sprites          | Full Support      | Full Support      |                                                                                                                                                                                                                                                                          |
| Terminal         | Partial Support   | Limited Support   | **JavaScript**: it all _works_, but no terminal input bar. 'Input' _popup_ appears, that has confusing behaviour of only sending data once _cancelled_. This may be fixed very shortly however. <br/>**C++**: all the _read_ functions return immediately with no input. |
| Timers           | Full Support      | Full Support      |                                                                                                                                                                                                                                                                          |
| Utilities        | Near Full Support | Full Support      | [Display Dialog](https://splashkit.io/api/utilities/#display-dialog) does not work in JavaScript backend, as it enters a busy loop that freezes the page.                                                                                                                |
| Windows          | Partial Support   | Partial Support   | No support for multiple windows, or for moving the window. No way to close the current window.                                                                                                                                                                           |

And here are the results specific to each test - some tests test multiple things unfortunately, so
some of these results aren't very helpful.

| Test                | JavaScript       | C++                | Details                                                                                                                                                                                                         |
| ------------------- | ---------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Animations          | Works fully      | Works fully        |                                                                                                                                                                                                                 |
| Audio               | Partially works  | Partially works    | Cannot download test audio.                                                                                                                                                                                     |
| Bundles             | Works fully      | works mostly       |                                                                                                                                                                                                                 |
| Camera              | Works fully      | Works fully        |                                                                                                                                                                                                                 |
| Geometry            | Works fully      | Works fully (Note) | Cannot close the first screen - replaced with delay                                                                                                                                                             |
| Graphics            | Fails            | Fails              |                                                                                                                                                                                                                 |
| Input               | Partially works  | Partially works    | Only support for one window currently                                                                                                                                                                           |
| Logging             | Works fully      | Works fully        |                                                                                                                                                                                                                 |
| Physics             | Works fully      | Fails              | Due to use of read pixel                                                                                                                                                                                        |
| Resources           | Works fully      | Works fully        |                                                                                                                                                                                                                 |
| Shape drawing       | Works fully      | Mostly works       | Have to disable `take_screenshot` usage for C++ backend                                                                                                                                                         |
| Sprite tests        | Works fully      | Works fully        |                                                                                                                                                                                                                 |
| Terminal            | Possible failure | Possible failure   | Slightly unsure what the behaviour should be                                                                                                                                                                    |
| Text                | Mostly Works     | Mostly Works       | Just fails to download font                                                                                                                                                                                     |
| Timers              | works            | Works fully        |                                                                                                                                                                                                                 |
| Windows             | Fails            | Fails              | JavaScript backend freezes (due to Display Dialog). C++ fails after clicking okay, with `Cannot read properties of null (reading 'createTexture')` in console - works if `display_dialog(...)` line is removed. |
| Cave Escape         | Works fully      | Works fully        |                                                                                                                                                                                                                 |
| Web Server          | Fails            | Fails              |                                                                                                                                                                                                                 |
| RESTful Web Service | Fails            | Fails              |                                                                                                                                                                                                                 |
| UDP Networking Test | Fails            | Fails              |                                                                                                                                                                                                                 |
| TCP Networking Test | Fails            | Fails              |                                                                                                                                                                                                                 |
| JSON Unit Test      | Works fully      | Works fully        |                                                                                                                                                                                                                 |
