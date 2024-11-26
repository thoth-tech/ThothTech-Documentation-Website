---
title: Company Structure and Objectives T3 2024
sidebar:
  label: Company Structure and Objectives T3 2024
---

## Executive Summary

Thoth Tech is an education-focused technology company located in Melbourne, Australia. Thoth Tech’s
mission is to build, operate, and deploy tools that enhance education outcomes by empowering
students, connecting them with tutors, and facilitating personalised learning experiences.

We value excellence and collaboration. We strive to deliver all our products in exceptional quality,
making sure it is sustainable in the long run. We continuously meet this goal while empowering our
people through established frameworks and a safe and supportive learning environment.

This report will outline the company structure, objectives, and projects for Trimester 3, 2024. This
trimester, Thoth Tech will be running the two main products: OnTrack and SplashKit.

## Table of Contents

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

## Trimester Goals and Objectives

This trimester, Thoth Tech aims to achieve the following:

### Goal 1: Support Professional Development and a Collaborative Team Environment

- **Cultivate Lifelong Learning and Skill Growth**: Create a supportive space where team members can
  advance their technical and interpersonal skills, building a strong foundation for their careers
  beyond graduation.
- **Inspire Initiative and Teamwork**: Empower team members to take ownership of their projects and
  engage in collaborative efforts, fostering a culture of shared responsibility and collective
  success.
- **Implement Consistent Processes Across Teams**: Develop unified workflows and standards for tools
  like Planner and GitHub, along with clear peer review protocols, to enhance efficiency and quality
  across all teams.
- **Create Clear, Accessible Documentation**: Build comprehensive documentation across all project
  areas to support learning, onboarding, and smooth knowledge transfer within and between teams.
- **Champion Diversity and Inclusive Practices**: Ensure a welcoming environment where all team
  members, regardless of background, are supported and encouraged to reach their full potential.

### Goal 2: Elevate and Expand Thoth Tech’s Product Offerings

- **Enhance Core Features and Add New Capabilities**: Focus on improving existing functionalities
  and expanding product features to meet user needs in alignment with Thoth Tech’s vision.
- **Address Critical Bugs and Improve User Experience**: Prioritise key bug fixes and usability
  enhancements to maintain a high standard of quality and reliability in all products.
- **Uphold Strong Security and Industry Standards**: Adhere to rigorous security protocols and best
  practices to ensure that Thoth Tech’s products are safe, secure, and trustworthy.
- **Promote Research-Informed Innovation**: Encourage new, well-researched ideas that will drive the
  evolution of Thoth Tech products, adapting to emerging technologies and user demands.

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

### Overview, Goals, and Objectives

SplashKit is a versatile and user-friendly programming framework designed to introduce students to
programming through the engaging process of 2D game development. Primarily coded in C++, SplashKit
also supports a variety of other languages, including C#, Python, Pascal, and, more recently,
JavaScript.

The SplashKit Software Development Kit (SDK) offers seamless integration with popular development
environments, enabling the easy incorporation of robust graphics and game development capabilities
into projects. With a single codebase, developers can create games and applications that run across
multiple platforms, including Windows, macOS, and Linux. The SplashKit SDK is renowned for its
intuitive interface and a comprehensive set of features that streamline the game development
process.

Additionally, SplashKit provides an extensive array of detailed documentation and tutorials,
designed to help students get started quickly and maximise their use of the SDK. This wealth of
resources empowers learners to progress at their own pace and fully explore the capabilities of
SplashKit, making it an invaluable tool for both beginners and more advanced users.

SplashKit will be running with the following projects during T3 2024:

#### **SplashKit Website & Tutorials**

Powered by the Starlight framework, the revamped SplashKit website aims to offer an enriched and
user-friendly experience for developers and learners. The SplashKit Website will also feature
tutorials aimed at helping students learn and explore SplashKit’s functionality. The focus is on
developing smaller, high-quality tutorials across C++, C#, and Python, rather than extensive series.

#### **SplashKit Expansion**

The Expansion team is responsible for maintaining and enhancing the SplashKit core. This includes
bug fixes, feature improvements, and refining installation and usage workflows through package
creation and addressing installation issues.

#### **SplashKit Online**

SplashKit Online is developing a web-based IDE that allows students to write and run code directly
in their browsers. Initially launched as a prototype in 2023, the 2024 goal is to mature this tool
into a comprehensive product, including C# support and an embeddable version for the SplashKit
website.

_SplashKit also has two other main lines of effort, however these will not be running in T3 2024:_

#### **Arcade Machines**

The university has acquired four arcade machines equipped with Raspberry Pi 3B+ units, designed to
showcase games developed with SplashKit. The short-term goal is to prepare these platforms for
students to display their SplashKit creations. The medium-term goal is to streamline the process for
first-year students to easily upload and test their games.

#### **Game Development**

The Game Development team is dedicated to creating and enhancing games that run on the arcade
machines. Their mission is to demonstrate SplashKit’s capabilities and inspire students by
showcasing what can be achieved with the framework.

### Aims for Trimester

Trimester Aims for SplashKit Development:

#### **Strengthen Communication and Coordination Across Teams**

This trimester, a key objective is to strengthen communication and coordination across teams by
implementing regular cross-team updates. The plan is to establish a way to better share the status
of each project during regular meetings. This system will provide better visibility into each team’s
progress, streamline task allocation, and significantly reduce duplicated work. Improved
communication will also allow teams to work in sync, especially as they develop and contribute to
new features like the embedded lite version of SplashKit Online.

#### **Enhance and Consolidate Project Documentation**

Another primary goal is to enhance and consolidate project documentation by centralising all
resources in a single, accessible location. This will involve restructuring and clearly labelling
documentation so every team member can quickly locate necessary materials and contribute
efficiently. As part of this aim, a structured upskilling pathway will be implemented, helping new
contributors build skills early on through usage examples, with a gradual path towards contributing
to tutorials.

#### **Migrate, Embed, and Automate Package Management for SplashKit Online**

For SplashKit Online, the priority is to migrate it to the Thoth Tech repository, centralising its
management and integrating it more effectively with the broader SplashKit project. As part of this
aim, a “lite” version will be embedded directly into the SplashKit website, showcasing code snippets
and usage examples to help new users engage with the framework in an accessible, hands-on way.
Additionally, an automated package management system will streamline deployment and version
tracking, making it easy for users to install, update, and maintain SplashKit across different
platforms.

#### **Refine and Expand Tutorial Content to Cover Advanced Topics and Language Support**

Expanding the tutorial content to cover advanced topics is another significant goal. This includes
creating tutorials for game mechanics and network-based functionalities. Additionally, a continued
focus on refining existing tutorials will ensure support across C++, C#, and Python, making content
user-friendly and intuitive. By introducing these languages and topics through structured usage
examples, contributors will develop familiarity with SplashKit gradually, ultimately supporting more
sophisticated development skills by the trimester’s end.

#### **Develop a Comprehensive Testing Framework for SplashKit**

To ensure high software quality, a robust testing framework will be developed for SplashKit,
supporting stable functionality across its language targets. This trimester’s goal is to complete
the test suite for one language target, establishing a foundation for further testing in C++, C#,
and Python. This will ensure that both new and existing tutorials and features perform reliably,
supporting the growth of a well-tested, professional development environment for SplashKit users.

#### **Revamp Project Management Features on SplashKit Online**

Finally, there will be a revamp of project management on SplashKit Online, enhancing features for
project creation, version control, and exporting. By implementing executable exporting, version
tracking, and potential collaborative features, SplashKit Online will become a more versatile and
powerful tool for project management. These upgrades, combined with the embedded lite version, will
allow users to work more effectively within the platform and engage interactively, furthering
SplashKit’s capabilities as a comprehensive online IDE.

### Deliverables

#### SplashKit Website & Tutorials

**Trimester Deliverables:**

- **API Reference Enhancements**: Expand basic usage examples to API reference sections,
  illustrating how features work in practice.
- **Fix and Reintegrate Tutorials**: Address issues with ported tutorials and import additional
  completed ones, ensuring resources are functional and accessible.
- **Embed SplashKit Online Lite Version**: Integrate a lightweight version of SplashKit Online
  within the website for users to test code snippets interactively. This will allow quick
  exploration of SplashKit's functionality directly from the main site.
- **Review and Expand Existing Tutorials**: Ensure all current tutorials function correctly,
  addressing issues such as clarity in tutorial language. Continue expanding languages to include
  code examples in C++, C# (OOP and Top level), and Python to widen accessibility.
- **Complete Key Tutorials**: Finalise and polish pending tutorials.
- **Usage Example Expansion**: Develop usage examples for all of the Graphics, Geometry and
  utilities functions within Splashkit. The goal is to highlight each function within a simple
  program to show how it could be used by students.
- **Develop Networking Tutorials**: Create introductory tutorials for networking basics in Python
  using SplashKit, including a simple client-server setup, laying the groundwork for future
  multi-player games over the local network.
- **Cryptography and Maths Tutorials**: Create tutorials on encrypting and decrypting messages using
  Caesar Cipher, RSA, and DHKE for secure message transmission in local chat applications, along
  with a guide on building different maths operations.
- **Stegnography on Bitmaps**: Develop a tutorial showing how to embed messages and files into
  bitmaps using steganography, this tutorial will demonstrate the process of embedding and
  extracting from a bitmap image. This tutorial will also highlight how the message can be
  encoded/decoded using various methods like base64 encoding, ceaser cipher which will relate to the
  cryptography tutorial, as well as using some of the conversion functions being developed for
  SplashKit core.
- **Documentation for Tutorial Contributions**: Refine guide for contributors on how to propose and
  create new tutorials, streamlining the contribution process and helping maintain quality
  standards.

**Long Term Deliverables:**

- **Establish Community Engagement Tools**: Develop contributor resources and potentially a blog,
  encouraging community feedback and contributions to tutorials and the API as well as communicating
  upcoming and recent updates to SplashKit and relevant resources.
- **Expand Onboarding Hub**: Continue building the onboarding hub to include a detailed resource
  centre with learning paths, guides, and templates for tutorial development.
- **Develop Advanced Tutorials**: Create in-depth tutorials covering complex topics like AI and game
  development, ensuring SplashKit supports advanced use cases.
- **Further expansion on usage examples**: Long term the goal is to have usage examples for every
  function in SplashKit, this will help students understand how to use the functions and what they
  do.

#### SplashKit Expansion

**Trimester Deliverables:**

- **Finalise Brew Package**: Complete development and testing for the Brew package, addressing any
  bugs to ensure smooth installation and user experience on Mac.
- **Test and Fix Key SplashKit Functionality**: Continue identifying and fixing critical issues in
  SplashKit, including issues with MoveTo and mass handling, to maintain software stability.
- **Improve Python Compatibility**: Address ongoing compatibility issues with Python 3.8, working
  towards stable functionality across all versions, including testing and documentation for
  consistent results.
- **SplashKit Translator**: Address issues with enum handling in the translator so that enums
  display correctly for each language. Then work on implementing this into the config file on
  starlight to correctly display tabs for each language.
- **SplashKit Core Functions**: Create new functions for converting between different values and
  basic maths operations.
- **C# Issues in SplashKit Core**: Address translation issues in SplashKit core for C# where
  functions like Rnd appear as Random.Rnd, which doesn't work as intended.

**Long Term Deliverables:**

- **Comprehensive Testing and Bug Fixing**: Build a robust test suite for SplashKit’s functionality,
  including both procedural and OOP versions, to ensure stability as features are added and updated.
- **Enhanced Raspberry Pi Support**: Develop advanced GPIO control features and ensure compatibility
  with the latest Raspberry Pi models, keeping SplashKit relevant for IoT projects.

#### SplashKit Online

**Trimester Deliverables:**

- **Deploy to Thoth Tech Repository**: Migrate SplashKit Online from a personal repository to Thoth
  Tech’s official repo, ensuring it’s centrally managed and accessible.
- **Optimise Lite Version for the Website**: Improve loading times and caching for the embedded
  SplashKit Online Lite version to ensure smooth performance and a user-friendly experience.

**Long Term Deliverables:**

- **Expand Project Management Capabilities**: Add features allowing users to create, save, load, and
  manage multiple projects, with version control for tracking changes and the ability to export
  builds as executables or HTML files.
- **Improve Interface and Debugging Tools**: Refine the interface layout and workflow of SplashKit
  Online, adding debugging features like breakpoints, variable watch windows, and code autocomplete
  for a more seamless coding experience.
- **Collaborative Project Features**: Consider implementing tools for real-time collaboration,
  allowing multiple users to work on projects simultaneously within SplashKit Online.

#### Arcade Machines

_The Arcade Machine and Game Development teams are not running in T3 2024; however, long-term
deliverables for these projects are outlined to facilitate recommencement in T1 2025._

**Long Term Deliverables:**

- **Enhance the Arcade Menu and Testing System**: Continue updates to the Emulation Station menu,
  focusing on Kiosk Mode (for published games) and Normal Mode (for both test and published games).
  Develop a new testing system that simplifies game additions and allows for more flexible testing.
- **Initial Voting System Implementation**: Begin developing a voting system that adds weight to the
  star ranking, ensuring a clear path for further iterations.
- **Arcade Game Documentation Updates**: Revise README files for arcade games to include updated
  control instructions, compilation processes, and resources folder structure for clarity and
  accessibility.
- **Formalise the Game Upload Process**: Establish a streamlined and documented workflow for
  students to upload their games, targeting SIT102 and SIT771 students to reduce friction and ensure
  consistent game submissions.
- **Develop Local Test Mode**: Design and implement a test mode that allows users to add a new game
  build for a limited testing period, automatically deleting the game afterward to maintain system
  integrity.
- **Full Voting System Implementation**: Expand the voting system to track user feedback over time,
  integrating it into the arcade’s ranking system to highlight popular games.
- **Complete C# Compatibility for ARM**: Resolve compatibility issues for C# in the ARM environment
  to fully support .NET on arcade machines, ensuring consistent performance for C++ and C# games.
- **Introduce Version Control for Games**: Establish version control for compiled arcade games to
  manage updates and track revisions as new features are added or bugs are fixed.

#### Game Development

**Long Term Deliverables:**

- **Standardised Implementation Patterns**: Finalise and enforce decoupling patterns for
  data/functionality and state/render. Establish these patterns through collaboration, providing a
  base for consistent development practices.
- **Develop the “10 Minute Game” Concept**: Create a simple game prototype (such as a tower defense
  or idle game) with core mechanics in the first sprint, reserving the latter half of the trimester
  for visual polish and feature variations.
- **Iterate on Game Patterns**: Use feedback from students to refine and adjust the implementation
  patterns, enhancing them to support various project needs.
- **Document Game Development Processes**: Produce initial documentation on discrete game systems
  (like terrain generation and threaded state update patterns) to assist new contributors and
  promote best practices.
- **Enhance Documentation for Completed Games**: Develop UML diagrams, gameplay mechanics overviews,
  and level design guides for existing games to support new contributors and improve development
  continuity.
- **Complete Incomplete Game Features**: Focus on finalising core functionality for partially
  completed games like Sky Surge and Single Combat, ensuring they are polished and playable.
- **Extend Features in Finished Games**: Add new gameplay elements and enhancements to completed
  games to keep them engaging and challenging for players.

### Project Members

| Member Name          | Role/Responsibilities                                | Junior/Senior |
| -------------------- | ---------------------------------------------------- | ------------- |
| BRIANNA LAIRD        | Senior Lead - SplashKit Expansion and Website        | Senior        |
| ESWAR SIVAN SETHU    | Senior Lead - SplashKit Expansion                    | Senior        |
| SHAUN RATCLIFF       | Senior Lead - SplashKit Website and SplashKit Online | Senior        |
| ETHAN HOLLEY         | Team Member - SplashKit Online                       | Senior        |
| HANGYU LI            | Team Member - SplashKit Website and Expansion        | Senior        |
| MATTHEW HARDING      | Team Member - SplashKit Expansion                    | Senior        |
| RACHEL CHU           | Junior Lead - SplashKit Website                      | Junior        |
| ETHAN RIN            | Junior Lead - SplashKit Website and Expansion        | Junior        |
| VISHNU VENGADESWARAN | Junior Lead - SplashKit Website and Expansion        | Junior        |
| DANIEL GARCIA VARGAS | Team Member - SplashKit Online                       | Junior        |
| JIAYI ZHANG          | Team Member - SplashKit Online                       | Junior        |
| LAM QUOC HUY HUYNH   | Team Member - SplashKit Website                      | Junior        |
| MUHAMMAD DANIAL      | Team Member - SplashKit Website                      | Junior        |
| NOAH CROSS           | Team Member - SplashKit Website                      | Junior        |
| PRASANNA SINGHARA    | Team Member - SplashKit Online                       | Junior        |
| SIMON RHOOK          | Team Member - SplashKit Website and Expansion        | Junior        |

---
