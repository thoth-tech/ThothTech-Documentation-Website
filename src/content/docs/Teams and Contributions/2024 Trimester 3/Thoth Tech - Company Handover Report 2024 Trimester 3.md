---
title: Thoth Tech - Company Handover Report 2024 TRIMESTER 3
sidebar:
  label: Thoth Tech - Company Handover Report 2024 TRIMESTER 3
---

## Table of Contents

[1. Executive Summary](#executive-summary)

[2. Showcase Video](#showcase-video)

[3. Leadership Team](#leadership-team)

> [3.1 Company Board](#company-board)  
> [3.2 Product Mentors](#product-mentors)  
> [3.3 Student Leaders](#student-leads)  
> [3.4 Leadership Responsibilities](#leadership-responsibilities)

[4. Company Structure](#company-structure)

[5. Project 1: OnTrack](#project-1-ontrack)

> [5.1 Project Overview](#project-overview)  
> [5.2 User Manual](#user-manual)  
> [5.3 Completed Deliverables](#completed-deliverables)  
> [5.4 Roadmap](#roadmap)  
> [5.5 Open Issues](#open-issues)  
> [5.6 Lessons Learned](#lessons-learned)  
> [5.7 Product Development Life Cycle](#product-development-life-cycle)
>
> > [5.7.1 New Tasks](#new-tasks)  
> > [5.7.2 Definition of Done](#definition-of-done)  
> > [5.7.3 Task Review](#task-review)  
> > [5.7.4 Testing](#testing)  
> > [5.7.5 Branching Strategy](#branching-strategy)
>
> [5.8 Product Architecture](#product-architecture)
>
> > [5.8.1 Tech Stack](#tech-stack)
>
> [5.9 Source Code](#source-code)
>
> [5.10 Login Credentials](#login-credentials)

[6. Project 2: SplashKit](#project-2-splashkit)

> [6.1 Project Overview](#project-overview-1)  
> [6.2 User Manual](#user-manual-1)  
> [6.3 Completed Deliverables](#completed-deliverables-1)  
> [6.4 Roadmap](#roadmap-1)  
> [6.5 Open Issues](#open-issues-1)  
> [6.6 Product Development Life Cycle](#product-development-life-cycle-1)
>
> > [6.6.1 New Tasks](#new-tasks-1)  
> > [6.6.2 Definition of Done](#definition-of-done-1)  
> > [6.6.3 Task Review](#task-review-1)  
> > [6.6.4 Testing](#testing-1)  
> > [6.6.5 Branching Strategy](#branching-strategy-1)
>
> [6.7 Product Architecture](#product-architecture-1)  
> [6.8 Source Code](#source-code-1)


## Executive Summary

Thoth Tech is an education-focused technology company located in Melbourne, Australia. Thoth Tech’s
mission is to build, operate, and deploy tools that enhance education outcomes by empowering
students, connecting them with tutors, and facilitating personalised learning experiences.

We value excellence and collaboration. We strive to deliver all our products in exceptional quality,
making sure it is sustainable in the long run. We continuously meet this goal while empowering our
people through established frameworks and a safe and supportive learning environment.

This report will outline the company structure, objectives, and projects for Trimester 3, 2024. This
trimester, Thoth Tech will be running the two main products: OnTrack and SplashKit.

## Leadership Team

### Company Board

- Farah Farizi - Company Director
- Andrew Cain - Product Owner (OnTrack & SplashKit)

### Product Mentors

- OnTrack: Nebula Alam & Satika Jayawardena
- SplashKit: Olivia McKeon, Sean Boettger & Tien Pham

### Student Leadership

- Tan Tai Nguyen – Senior Leader (OnTrack)
- Brianna Laird – Senior Leader (SplashKit)
- Shaun Ratcliff – Senior Leader (SplashKit)
- Eswar Sivan Sethu – Senior Leader (SplashKit)
- Aditya Tomer – Junior Leader (OnTrack)
- Ashwini Deore – Junior Leader (OnTrack)
- Hirdyansh Dudi – Junior Leader (OnTrack)
- Shounak Bhalerao – Junior Leader (OnTrack)
- Rachel Chu – Junior Leader (SplashKit)
- Ethan Rin – Junior Leader (SplashKit)
- Vishnu Vengadeswaran – Junior Leader (SplashKit)

### Leadership Responsibilities

The following are the key responsibilities of the company student leadership team throughout the
trimester:

1. Company presentation in the first junior lecture – Introduce the company, its projects, and
   required skill sets for potential junior students

   - Student leads must prepare and organise a PowerPoint presentation representing each of their
     projects during Week 0

2. Host first company-wide meeting and onboard students – Provide a more specific overview of
   company and project goals, meeting schedules, and expectations for the trimester

   - Team building sessions may also be organised to build rapport across teams

3. Weekly company leadership team meeting – Report on project progress and concerns to company
   stakeholders

   - Date and time to be decided by members in the first week according to availability

4. Complete company tasks: progress, handover, and showcase reports and videos
   - These reports must be submitted by 1 senior and 1 junior on behalf of the company and
     appropriate communications must be made on Teams

All past company reports, showcase videos, and relevant assets can be found here:
[Company Documents & Videos](https://deakin365.sharepoint.com/sites/ThothTech2) &
[Thoth Tech Documentation Website](https://thoth-tech.netlify.app)

## Company Structure and Projects Overview

![Org chart](/company-structure/2024-t3-thoth-tech-structure.png)

## Project 1 - OnTrack

### Overview, Goals, and Objectives

OnTrack, also known as Doubtfire, is an innovative Learning Management System (LMS) designed
specifically for skill-based course delivery. This platform enhances the connection between tutors
and students, with a primary focus on Deakin University and other global educational institutions.
OnTrack aims to elevate the educational experience by offering a structured, efficient, and
interactive learning environment. The system is crafted to improve student engagement, boost
learning outcomes, and streamline the teaching and learning process, benefiting both students and
educators.

### Aims for Trimester

#### Documentation Website

- **Complete API Documentation**: Finalise documentation for all API endpoints, ensuring they are
  detailed, accurate, and user-friendly to assist developers in navigating OnTrack’s API
  efficiently.

- **Identify and Fill Documentation Gaps**: Address missing entries and clarify existing ones,
  establishing a roadmap to cover any essential areas still in need of documentation. This effort
  will support onboarding and provide a comprehensive guide for new contributors.
- **Backend Code Review**: Conduct a systematic review of the OnTrack platform's backend codebase to
  identify potential vulnerabilities.

#### Frontend Migration

- **Achieve Frontend Migration Milestone**: Continue to migrate the frontend backlog from Angular.js
  and CoffeeScript to Angular 17 and TypeScript, prioritising modules critical for current user
  needs. This effort will modernise OnTrack’s frontend architecture for better performance and
  maintainability.

#### New Feature Additions

- **Notification System Ideation & Blueprint**: Develop code for sending notifications to students
  when the tutor messages them.

Long Term Deliverables:

- **OnTrack Bug Fixes**
  - Continuously document and identify issues faced by users and rectify them once the causes have
    been diagnosed.
  - Current prominent issues include:
    - Student calendar and notifications not working for certain students.
    - Task sheets and/or resources appearing as unavailable after unit rollovers.
- **Urgent Enhancements**
  - Add support for ZIP file uploads and integrate frontend displays for tutors.
  - Implement the ability for students and staff to view the history of target grade changes.
  - Enable the saving of draft comments locally per task, allowing tutors to maintain different
    unsent draft comments for each task.
  - Adjust the automatic extension system so that the “resubmit” status provides a one-week
    extension from the date of feedback.
  - Extend the group lock feature to allow students to lock and unlock their groups.
- **Incorporate Multiple Organisations on Single OnTrack Server**
  - Develop the capability to create, edit, and disable multiple organisations on a single server.
  - Create frontend interfaces for these features on a dedicated dashboard for teaching staff to
    perform management tasks.
  - Update backend systems to support these features and create unit tests for both frontend and
    backend to verify implementation and functionality.
- **Quality of Life Improvements**
  - Add functionality for Unit Chairs to set target dates for each grade, which would impact the due
    dates of tasks based on the selected grade.
  - Develop a new visualisation to help students see their selected target grade, along with
    estimated, submitted, and marked progress bars.
- **Authentication Module**
  - Abstract the existing authentication functionality into its own system/module.
  - Create unit tests for this new module to ensure its implementation and functionality.
- **Tutor Times**
  - For the frontend, implement stopwatch and manual time input features, as well as a notification
    system.
  - For the backend, develop systems to store, manage, and serve marking time data, including
    creating database tables, API endpoints, and secure data handling.
  - Create unit tests for both frontend and backend to verify implementation and functionality.
- **Panopto Video Integration**
  - Implement frontend interfaces for uploading videos to Panopto and viewing embeds directly in
    OnTrack.
  - For the backend, establish systems to bridge OnTrack and Panopto, including creating API
    endpoints, implementing a playback mechanism, and ensuring user authentication.
  - Create unit tests for both frontend and backend to validate implementation and functionality.
- **Staff Extensions**
  - Develop a frontend UI that allows teaching staff to view and manage student extensions.
  - Implement a backend feature enabling staff to manually grant extensions to students, even
    without formal extension requests in the system.
  - Create unit tests for both frontend and backend to confirm implementation and functionality.

### Deliverables

#### Documentation Website

- **Complete API Documentation**: Finalise documentation for all API endpoints, ensuring they are
  detailed, accurate, and user-friendly to assist developers in navigating OnTrack’s API
  efficiently.

- **Identify and Fill Documentation Gaps**: Address missing entries and clarify existing ones,
  establishing a roadmap to cover any essential areas still in need of documentation. This effort
  will support onboarding and provide a comprehensive guide for new contributors.

#### Frontend Migration

- **Achieve Frontend Migration Milestone**: Continue to migrate the frontend backlog from Angular.js
  and CoffeeScript to Angular 17 and TypeScript, prioritising modules critical for current user
  needs. This effort will modernise OnTrack’s frontend architecture for better performance and
  maintainability.

#### New Feature Additions

- **Notification System Ideation & Blueprint**: Develop code for sending notifications to students
  when the tutor messages them.

#### Long-term Deliverables

- **Complete Frontend Migration to Angular and TypeScript**
  - **Complete Remaining Frontend Modules**: Continue the migration process beyond the trimester,
    aiming for a full transition to Angular 17 and TypeScript to ensure a consistent and modern
    codebase.

### Project Members

| Member Name                   | Role/Responsibilities                   | Junior/Senior |
| ----------------------------- | --------------------------------------- | ------------- |
| ALVIN ODUNGA                  | Team Member - Frontend Migration        | Senior        |
| TAN TAI NGUYEN                | Team Member - Frontend Migration        | Senior        |
| SHOUNAK RAVI BHALERAO         | Junior Lead - Frontend Migration        | Junior        |
| ASHWINI CHANDRAKANT DEORE     | Junior Lead - Survey Documentation      | Junior        |
| HIRDYANSH DUDI                | Junior Lead - Frontend Migration        | Junior        |
| HARSHA JAYAMANGALA            | Team Member - Frontend Migration        | Junior        |
| HASHINI MADUSHANI NANAYAKKARA | Team Member - Frontend Migration        | Junior        |
| JUDE ROZAIRO                  | Team Member - Target Grades History     | Junior        |
| LAKSH GANESH GUPTA            | Team Member - Frontend Migration        | Junior        |
| SAM WONG                      | Team Member - Frontend Migration        | Junior        |
| ANMOL SAINI                   | Team Member - Visualisation Development | Junior        |
| ADITYA PRATAP SINGH TOMAR     | Junior Lead - Frontend Migration        | Junior        |
| CHEE YU KOH                   | Team Member - Backend/ Bugfix           | Junior        |
| EPITACIO DO NASCIMENTO NETO   | Team Member - Backend Review            | Junior        |
| HARSHIT ARORA                 | Team Member - Frontend Migration        | Junior        |
| RAMANDEEP SINGH BHOMRAH       | Team Member - Frontend Migration        | Junior        |
| XIN HUANG                     | Team Member - Frontend Migration        | Senior        |

## Project 2 - SplashKit

### Project Overview

SplashKit is a user-friendly, cross platform development framework designed for 2D games creation. It helps simplifies the a range of applications developement process with graphics, networking, sound and many more; offering an accessible entry point for students and beginner programmers. The framework is mainly written in C++, but it supports multiple languages, including C#, Python, Pascal and Javascript.

### Projects 

#### SplashKit Expansion

The SplashKit Expansion team is responsible for maintaining and enhancing the core functionality of SplashKit. Their work focuses on continuously improving the features, bug fixes, and refining the installation and usage workflows to ensure reliability and capability.

#### SplashKit Website & Tutorials

The SplashKit website, built on the Starlight framework, is designed to provide developers and learners with an intuitive and engaging experience. It serves as a hub for developer documentation, tutorials, guides, and resources, including content on coding beyond SplashKit.

#### SplashKit Online

The SplashKit Online team is responsible for developing a web-based IDE for SplashKit, allowing developers and learners to experiment with SplashKit instantly from their browsers. Initially launched in 2023, the 2025 goal is to improve the capabilities of this tool to include support for more languages and optimizing performance.

#### Arcade Machines

The university has acquired four arcade machines equipped with Raspberry Pi 3B+ units, designed to showcase games developed with SplashKit. The short-term goal is to prepare these platforms for students to display their SplashKit creations. The medium-term goal is to streamline the process for first-year students to easily upload and test their games.

#### Game Development

The Game Development team is dedicated to creating and enhancing games that run on the arcade machines. Their mission is to demonstrate SplashKit’s capabilities and inspire students by showcasing what can be achieved with the framework.


### User Manual 

#### SplashKit Expansion

- [Repository setup instructions](https://github.com/thoth-tech/splashkit-core/blob/develop/CONTRIBUTING.md)

#### SplashKit Website

- [Development environment setup instructions](https://github.com/thoth-tech/splashkit.io-starlight/blob/main/CONTRIBUTE.md)

#### SplashKit Tutorials

- [Tutorial Information Hub](https://thoth-tech.netlify.app/products/splashkit/splashkit-tutorials/0-overview/)
- [Development environment setup instructions](https://github.com/thoth-tech/splashkit.io-starlight/blob/main/CONTRIBUTE.md)

#### SplashKit Online

- [Development environement setup instructions](https://github.com/thoth-tech/SplashkitOnline?tab=readme-ov-file#installation)
- [General developer documentation](https://thoth-tech.netlify.app/products/splashkit/splashkit-online/code-documentation/other/folderstructureoverview/)

#### Arcade Machines

- [Brief development environment setup instructions](https://github.com/thoth-tech/arcade-machine)
- [Machine Operations Guide](https://deakin365.sharepoint.com/:b:/r/sites/ThothTech2/Shared%20Documents/SplashKit/Arcade%20Machine%20(Burwood%20Building%20M)%20Operation%20Guide/Thoth%20Tech%20Arcade%20Machine%20Operation.pdf?csf=1&web=1&e=Mx3iBS)

#### Game Developments

- [Game Development Student Onboarding Guide](https://github.com/thoth-tech/arcade-games/blob/main/advanced-game-design-team/Student%20Onboarding%20Guide.md)
- [Guide to Contribute a Game to the Arcade Machine](https://github.com/thoth-tech/arcade-games/blob/main/README.md)

### Completed Deliverables 

This trimester, the following deliverables were completed:

#### SplashKit Expansion

- General Improvements
  - Fixed bugs relating to sprites, ulities, networking, and the C# signature error in the translator
  - Update the SplashKit translator to generate formatted enum signatures for multiple languages
- New Features
  - Added unit tests for sprites 
  - Created multiple physics functions: `calculate_collision_direction`, `resolve_collision`, `bitmap_quad_collision`, `bitmap_ray_collision`, `bitmap_bounding_circle`
  - Created multiple input validation functions: `is_binary`, `is_hex` and `is_octal`
  - Created multiple conversions  functions: `dec_to_bin`, `hex_to_bin`, `oct_to_dec`, `hex_to_ct`, `base64`
  - Crated multiple netwokring functions: `is_valid_ipv4`, `mac_to_hex`, `hex_to_mac`, `bin_to_ipv4`, and `ipv4_to_bin`
  - Created multiple math functions: `calculate_square_root`, `is_prime_number`, `greatest_common_divisor`, and `least_common_multiple`

#### SplashKit Website 

- Website Improvements:
  - Enhanced API references to link the usage examples and guides pages to the developer documenation page.
  - Integrated SplashKit Online Lite to SplashKit website with real-time code export from usage examples.
  - Over 250 usage examples have either been completed or are in peer review, making it one of the most successful projects in splashkit.
  - Begun development of 'Beyond Splaskit'
    - Added nested tabs to the usage example 
    - Added 

#### SplashKit Tutorials

#### SplashKit Online

### Roadmap 

#### SplashKit Expansion 

#### Splashkit/io Website 

- SplashKit.io Improvements
  - Migrate the site to GitHub pages with a deployed preview for pull requests 
  - 
- Thoth Tech Documentation Website 
  - Migrate the site to GitHub pages 
    - The si

#### Arcade Machine

- Consolidate documentation in one place or repository
- Add additional modes to the Arcade Machine software
  - Kiosk Mode: Show only published games, ideal for events
  - Normal Mode: Display both published and test games
- Implement Voting System: Integrate a voting system to give significance to the star ranking
  currently available on the machines
- Correct the C# compatibility for ARM, as .NET currently does not run correctly in the emulated PI
  environment used for C++ games
- Implement versioning for compiled games to manage updates effectively
- Continue development of [flipper](https://github.com/thoth-tech/flipper) Game Packaging Tool

#### Game Development

- Establish Standardised Implementation Patterns:
  - Enforce decoupling of data/functionality and decoupling of state/render patterns.
  - Develop a prescribed implementation pattern to ensure consistency and quality across projects.
- Develop a "10 Minute Game":
  - Collaboratively plan and execute the development of a simple game (e.g., idle game, tower
    defence, survivor.io-like).
  - Ensure core game mechanics are implemented in the first sprint.
  - Focus the latter half of the trimester on improving visual representation, adding "juice," and
    implementing variations of core game elements (e.g., enemies, powerups, weapons).
  - This approach ensures that core functionality is completed within a single trimester, with
    additional features developed against a standardised interface that integrates with the core
    game types.
- Iterate on Prescribed Patterns:
  - Adjust and refine the implementation pattern based on student feedback and experiences.
- Generate Development Artifacts:
  - Create documentation covering the implementation of discrete game systems (e.g., terrain
    generation systems using IDW/random walk/noise, 2D light marching, threaded state update and
    render patterns).
- Improve Documentation:
  - Existing games often lack adequate documentation. Good documentation can significantly increase
    onboarding speed for new contributors.
  - For completed games, create UML diagrams, overviews of gameplay mechanics, and guides for
    creating levels in each game’s format.
  - Address the discoverability of existing documentation and resources. Update README files to
    reflect the current focus of work and ensure existing documentation is easy to find.
- Complete Core Functionality of Incomplete Games:
  - Focus on finishing significant core functionalities in games that are currently incomplete
    (e.g., Sky Surge, Single Combat).
- Extend Gameplay and Functionality of Completed Games:
  - Enhance and expand the gameplay and features of games that are already completed, ensuring they
    continue to engage and challenge players.

### Open Issues

### Lessons Learned

The SplashKit team has faced several challenges over Trimester 3, 2024. These are detailed below:
  - Insufficient Peer Review Contributions
    - Due to the intensive nature of the trimester, we believe this have led team members to place a heavy emphasis on their own work without being able to allocate enough time for peer review. In the previous trimester, there were time for multiple cycles where members can take time off their tasks and dedicate their effors toward peer reviews which was lacking in this trimester.

### Product Development Life Cycle

#### New Tasks

In SplashKit it is up to individuals to assign themselves to cards – generally speaking, it is fine
to assign oneself to any card unless otherwise noted. New cards are created by discussing the
problem with mentors, either during stand-ups or directly – if approved, the mentor will create the
card and you can assign yourself to it.

#### Definition of Done

A task is only considered fully done once it has been completed, submitted as a pull request, and
reviewed by two other students who approve it (see below). Once a mentor reviews it, it may be
considered fully complete, or potentially moved back to doing if unsatisfactory.

#### Task Review

Two mandatory peer reviews must be completed before the mentor review. Once the pull request is
made, contact a teammate for a review and upon agreement, tag this teammate under the Teams Planner
card and GitHub pull request as the reviewer. Make sure to review and test the code syntax, logic,
and output through pulling the changes unto your local machine if you are the reviewer. If the
reviewer requests any changes, update the contribution, and notify the reviewer. Once the changes
are committed and pushed, it will automatically update the pull request; thus, there is no need to
make another pull request.
[Watch this tutorial video by Satika Jayawardena](https://deakin365.sharepoint.com/:v:/r/sites/ThothTech2/Shared%20Documents/OnTrack/Demo%20videos/pull-request-demo.mov?csf=1&web=1&e=a6p1gg&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D)
from the OnTrack team on creating and reviewing someone else’s pull request.

Once the peer review is complete and your contribution was deemed correct by your teammate, the pull
request may be moved into the Mentor Review column – in time, a mentor will review the work, and if
it is deemed satisfactory it will be considered complete and moved into the current sprint’s
Complete column.

#### Testing

Testing strategies depend on the project – please see each project’s onboarding information for more
details.

#### Branching Strategy

Refer to the Branch Prefixes and Commit Message Format sections of the
[Git Contributions Guide](https://thoth-tech.netlify.app/resources/quality-assurance/git-contributions-guide/)
for guidelines on creating Git branches and commits for contributions.

### Product Architecture

#### SplashKit.io Website

The SplashKit.io website is the primary portal for developers and learners, offering a modern,
responsive interface built with Starlight (Astro), React, SolidJS, Tailwind CSS, Node.js, and
Docker. It provides users with access to API documentation, installation guides, and tutorials,
making it essential for anyone looking to learn or expand their knowledge of SplashKit. This website
supports external developers, especially beginners, in using SplashKit for 2D game development and
interactive applications.

#### SplashKit SDK

The SplashKit SDK is a versatile toolkit designed to simplify 2D game development and interactive
application creation. It is primarily built using C++, SDL, and OpenGL, and is managed through CMake
and Clang/LLVM. The SDK supports cross-platform development on Windows, macOS, Linux, and Raspberry
Pi, allowing developers to create applications that run on multiple platforms using a single
codebase. Additionally, the SDK includes automated translation into C#, Python, and Pascal.

#### SplashKit Online

SplashKit Online is a web-based Integrated Development Environment (IDE) that enables users to
write, compile, and run SplashKit projects directly in their browsers. It supports JavaScript and
experimental C++ through WebAssembly (WASM) via Emscripten. The platform uses Node/NPM for
dependency management and test server operation. SplashKit Online aims to make it easy for
developers, particularly beginners, to get started with SplashKit without needing to install any
software.

#### Arcade Machine

The SplashKit-powered arcade machines, developed in collaboration with Deakin University, run on
Raspberry Pi using emulationstation and retropie. These machines allow students and developers to
upload and test games developed with SplashKit in a real-world arcade setting. The machines offer a
hands-on experience where games can be played and evaluated using physical arcade hardware.

#### Game Development

The Game Development team produces games that showcase SplashKit's capabilities. These games are
typically built using C++ or C# and adhere to industry-standard game design practices. The games
serve as examples of what can be achieved using SplashKit, demonstrating various features of the
SDK, including graphics, input handling, and audio management.

### Source Code

- [Github Account](https://github.com/thoth-tech)
- Arcade Machine
  - [arcade-machine](https://github.com/thoth-tech/arcade-machine)
  - [arcade-machine-startup](https://github.com/thoth-tech/arcade-machine-startup)
  - [ArcadeMenu](https://github.com/thoth-tech/ArcadeMenu)
  - [flipper](https://github.com/thoth-tech/flipper)
- SplashKit Expansion
  - [splashkit-core](https://github.com/thoth-tech/splashkit-core),
    [skm](https://github.com/thoth-tech/skm)
- [SplashKit Website](https://github.com/thoth-tech/splashkit.io-starlight)
- [Games Development](https://github.com/thoth-tech/arcade-games)
- [SplashKit Online](https://github.com/thoth-tech/splashkitonline)

### Showcase Video

The videos in the following folder summarise our efforts this trimester in SplashKit:

- [Showcase Videos]()



