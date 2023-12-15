---
title: SplashKit Starlight Website  Sidebar and Component Override Spike Outcome
---

**Spike:** NA

**Title:** SplashKit Starlight Website Sidebar and Component Override Spike Outcome

**Author:** Frankie Veri, s222371429@deakin.edu.au, 

## Goals / Deliverables

The goal of this task was to investigate a way to save the state of the starlight website sidebar,
with a larger goal of finding a way to override astro components without error to allow for better
customisation.

## Technologies, Tools, and Resources used

- Internet Browser: Chrome
- Programming Languages: JS, HTML
- Visual Studio 2022
- Visual Studio Code
- Programming Libraries: SplashKit
- Astro Framework
- Starlight Template
- Text Editor: Notepad
- Terminal

## Tasks undertaken

The following are the tasks that were performed to produce this report. A lot of 
research and experimentation were also conducted, which I will briefly discuss. 

### JavaScript localStorage, sessionStorage, and Cookies

- In my first attempts to save the state of the sidebar 
  I looked into using the JS methods of localStorage, sessionStorage,
 as well as cookies. 
- Due to the sidebar's reliance on downloaded astro dependencies, 
  I couldn't achieve this method of implementation without big changes 
  to the website's framework. 
- Astro also has current limitations with cookies. 
- Testing the website would result in the browser not registering the 
  storage or cookies as a result. 

### Git Sidebar Persistence  Request

- A Pull Request was found under the Starlight Git which looked to
  achieved a similar result. 
- This PR does work with the current Splashkit website in testing, 
  however, it needs to be made a permanent addition. 
- The URL below will bring you to this PR
  https://github.com/withastro/starlight/pull/1121/files

#### Override Changes and Attempts

- I used the below URL as a guide for the following, as it gave 
  me instructions  on how to override astro components with custom ones.
      https://starlight.astro.build/guides/overriding-components/
- The code below was added to the astro.config in order to override:
```
components: {
    //Override the default `Sidebar` component.
    Sidebar: './src/components/Sidebar.astro',
},
```
- This would result in the following error
```
Could not import ./SidebarSublist.astro.

```

- Adding the 'SidebarSublist.astro' file to the 'src/components' directory 
  would result in the following error:
```
Could not import ../utils/navigation.

```
- Adding the 'navigation.ts' file would then cause the following:
```
Could not import ./createPathFormatter.
```
- On occasion it will throw an 'unexpected character' error. Otherwise,
  it will always be searching for extra imports.

### Importance of Task and Report

- This task, if completed, could allow for immense customisation of the starlight
  website. 
- It would allow for us to override other components and make extra important changes.
- Due to being pressed for time, it was here that testing and troubleshooting ended, resulting
  in this final report for work to resume.   

This report is the product of hours and hours of testing and troubleshooting, so the scope of the final
task is not known. It may be larger than expected.

## What we found out

That major changes like this are possible, but they need to be done within the astro framework. If this works,
we could enhance the website in almost any way that we wanted, allowing for extra customisable options.  

#### What worked

Replacing the default 'Sidebar.astro' in '.\node_modules\@astrojs\starlight\components' does work.
This change will allow you to test the custom 'Sidebar.astro' file and allow you to save the state of the sidebar. 
The website seems to recognise the attempt to override the default component but struggles to find the rest
that we do not wish to override. 

#### What wasn't tested

Any additional attempts to get the 'override' function to work. Several hours were spent troubleshooting,
but there could be a lot more done that wasn't tried. 

#### What didn't work

Using JS to save the bar did not work. Following the override guide also did not work.

## Open issues/risks

The permanent changes have yet to be complete, as I cannot currently find a way to get the website
to recognise the non-overridden components. I don't know if there are larger or unknown issues at play
here. This will need to be investigated further. 

## Recommendation

Currently, I recommend investigating why the override function is not working, as it should based on
the official tutorial. Extra troubleshooting will be required, as well as possibly testing this with
smaller components. Beyond this, I am currently not sure how to fix this issue.
