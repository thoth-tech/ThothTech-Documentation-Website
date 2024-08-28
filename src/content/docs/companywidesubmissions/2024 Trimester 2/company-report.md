---
title: Thoth Tech – Company Progress Report 2024 TRIMESTER 2
description: 2.1P Task, T2 2024
---

## Executive Summary

Thoth Tech is an education-focused technology company located in Melbourne, Australia.

Thoth Tech’s mission is to build, operate, and deploy tools that enhance education outcomes by
empowering students, connecting them with tutors, and facilitating personalised learning
experiences.

We value excellence and collaboration. We strive to deliver all our products in exceptional quality,
making sure it is sustainable in the long run. We continuously meet this goal while empowering our
people through established frameworks and a safe and supportive learning environment.

This report will provide an update the previous report that outlined the company structure,
objectives, and projects for Trimester 2, 2024. This includes descriptions of progress in each
project, any planned changes for the projects as well as key contributions from project members.

This trimester, Thoth Tech will be running the two main products: OnTrack and SplashKit.

## Leadership Team

### Company Board

- Andrew Cain – Director, Product Owner (OnTrack & SplashKit)

### Product Mentors

- Satika Jayawardena (OnTrack)
- Nebula Alam (OnTrack)
- Tien Pham (SplashKit)
- Olivia McKeon (SplashKit)
- Sean Boettger (SplashKit)

### Student Leads

- Jake Mansfield – Student Lead (OnTrack)
- Jack Carroll – Student Lead (OnTrack)
- Atharv Bhandare – Junior Leader (OnTrack)
- Bruce Wang – Senior Leader (OnTrack)
- Ivan Justin – Junior Leader (OnTrack)
- Eliya Geerlings – Junior Leader (OnTrack)
- Jonathan Tynan – Student Lead (SplashKit)
- Oscar Harris – Student Lead (SplashKit)
- Hayley Hughes – Student Lead (SplashKit)
- Shaun Ratcliff – Junior Leader (SplashKit)
- Brianna Laird – Junior Leader (SplashKit)

## Trimester Goals and Objectives

This trimester, Thoth Tech aims to achieve the following:

**Goal 1: Foster Employee Growth and Development in a Supportive Environment**:

- **Cultivate a Culture of Continuous Learning**: Provide a safe and supportive environment where
  employees can develop the technical and soft skills necessary for successful careers
  post-graduation.
- **Promote Initiative and Collaboration**: Encourage team members to take the initiative and work
  collaboratively on tasks, fostering a sense of ownership and teamwork.
- **Standardise Workflows and Processes**: Implement standardised processes for using tools such as
  Planner and GitHub, as well as the conduct of peer reviews to ensure consistency and efficiency
  across teams.
- **Develop Comprehensive Documentation**: Create detailed documentation for various product aspects
  to aid in learning and knowledge transfer.
- **Champion Inclusivity and Support**: Ensure that all employees, regardless of race, gender, or
  other differences, have a supportive environment that allows them to thrive and reach their full
  potential.

**Goal 2: Enhance and Extend Thoth Tech Products**:

- **Refine and Expand Product Features**: Continuously improve existing features and extend the
  capabilities of Thoth Tech products in alignment with the company’s mission.
- **Implement Critical Bug Fixes and Enhancements**: Prioritise the deployment of crucial bug fixes,
  performance improvements, and usability enhancements to maintain product quality.
- **Adhere to Security and Industry Standards**: Maintain rigorous security guidelines and adhere to
  industry best practices to ensure the integrity and reliability of products.
- **Drive Innovation through Research**: Encourage innovation by contributing well-researched ideas
  for new features and improvements, ensuring the products evolve to meet emerging user needs.

## Company Structure and Projects Overview

![org chart](/company-structure/2024-t2-thoth-tech-structure.png)

## Project 1: OnTrack

### Overview, Goals, and Objectives

OnTrack, also known as Doubtfire, is an innovative Learning Management System (LMS) designed
specifically for skill-based course delivery. This platform enhances the connection between tutors
and students, with a primary focus on Deakin University and other global educational institutions.
OnTrack aims to elevate the educational experience by offering a structured, efficient, and
interactive learning environment. The system is crafted to improve student engagement, boost
learning outcomes, and streamline the teaching and learning process, benefiting both students and
educators.

### Aims for Trimester

Trimester Aims for OnTrack Development:

- **Bug Fixes and Implement Urgent Enhancements**: This trimester will focus on addressing and
  documenting bugs reported by students, particularly those affecting the student calendar and
  notifications system. Urgent enhancements will also be implemented, such as adding support for ZIP
  file uploads, enabling students to view the history of target grade changes, saving unsent draft
  comments locally for each task, adjusting the automatic extension "resubmit" feature to provide a
  one-week extension from the feedback date, and extending the group lock feature to allow students
  to unlock and lock groups as needed.

- **Initiate Frontend Migration**: A significant effort will be dedicated to completing the
  migration of the frontend module from Angular.js and Coffeescript to Angular 17 and Typescript.
  Once the current migration backlogs are resolved, the team will assess and determine which
  additional modules will be prioritised for migration, ensuring that the transition to modern
  technologies is smoothly executed.

- **Revamp Feature Implementations**: The trimester will also involve a thorough examination and
  update of existing features to align with OnTrack’s evolving software. This includes abstracting
  the current authentication system into its own dedicated module and integrating the JPLag software
  plagiarism detection system with Docker Compose, replacing the existing MOSS system to enhance
  plagiarism detection capabilities.

- **Complete the Documentation Website**: Comprehensive documentation of OnTrack’s evolving features
  will be completed to assist new developers. This effort includes documenting all missing API
  endpoints, improving the documentation for existing endpoints where necessary, and creating a
  detailed map of areas requiring documentation. This documentation will ensure that new developers
  can quickly understand and contribute to the project.

- **Continue CourseFlow development**: Development will progress on the CourseFlow API entities by
  updating them with appropriate authentication and creating a functional frontend for student
  interaction. Testing will be conducted on both backend and frontend components to showcase
  progress and support ongoing development, with the goal of delivering a usable slice of the
  component.

- **Add New Features**: Several new features will be implemented to enhance OnTrack’s functionality.
  These include tools for staff to manage student extensions, the capability to create, edit, and
  disable multiple organisations on a single server, integration with Panopto for video uploads and
  embeds, and the implementation of CourseFlow. Additionally, a dedicated page will be developed to
  allow tutors to track the time spent providing feedback for each student.

- **Quality of Life Improvements**: Critically examine and implement quality of life improvements to
  enhance the user experience. This includes adding functionalities such as allowing unit chairs to
  set target dates that affect task due dates and creating visualisations to help students track
  their selected target grades, estimated progress, and feedback status.

### Deliverables

Trimester Deliverables:

- **Documentation Website**
  - Complete the documentation for all API endpoints. This involves finalising detailed and clear
    documentation to assist developers in understanding and utilising OnTrack’s API effectively.
- **JPLAG Implementation**
  - Set up JPLAG in its own container to run locally.
  - Refactor MOSS calls to call JPlag container and return reports.
  - Develop a new user interface to provide access to these reports.
- **Frontend Migration**
  - Migrate at least 10% of the existing frontend migration backlog. This task includes
    transitioning components from Angular.js and Coffeescript to Angular 17 and Typescript,
    respectively.
- **CourseFlow**
  - Update authentication for existing API entities to meet current standards.
  - Implement the necessary frontend features for these updated API entities.
  - Develop tests for both the updated backend and the new frontend components.

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

### Project Members

| **Member Name** | **Role/Responsibilities**                                                                | **Junior/Senior** |
| --------------- | ---------------------------------------------------------------------------------------- | ----------------- |
| Jack Carroll    | Senior Lead - JPlag Implementation                                                       | Senior            |
| Jake Mansfield  | Senior Lead - Courseflow Development                                                     | Senior            |
| Isabelle Holt   | Senior Lead - Frontend Migration                                                         | Senior            |
| Samuel Rolfe    | Team Member - Courseflow Development & Frontend                                          | Senior            |
| Joshua Bourquin | Team Member - Courseflow Development & Frontend                                          | Senior            |
| Su Myat Thiri   | Team Member - Frontend Migration                                                         | Senior            |
| Yuheng Wang     | Team Member - Frontend Migration                                                         | Senior            |
| Minu Sunil      | Team Member - Documentation Website                                                      | Senior            |
| Shyama Pillai   | Team Member - Documentation Website                                                      | Senior            |
| Anirudh Joshi   | Team Member - Frontend Migration                                                         | Senior            |
| Amos Saji       | Team Member - Frontend Migration                                                         | Senior            |
| Atharv Bhandare | Junior Lead – Frontend Migration & Reviews                                               | Junior            |
| Ivan Justin     | Junior Lead - Frontend Migration                                                         | Junior            |
| Thuy Tien Hoa   | Team Member - Frontend Migration                                                         | Junior            |
| Amrith Jayadeep | Team Member - Frontend Migration                                                         | Junior            |
| George Muyomba  | Team Member - Frontend Migration                                                         | Junior            |
| Shen Tian       | Team Member - Frontend Migration                                                         | Junior            |
| Xin Huang       | Team Member - Frontend Migration                                                         | Junior            |
| Muhammad Danial | Team Member - Frontend Migration                                                         | Junior            |
| Eliya Geerlings | Junior Lead – JPlag Implementation & Frontend Migration & Dev Container Image Downsizing | Junior            |

## Project 2: SplashKit

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

### Projects

**Arcade Machines**:

The university has acquired four arcade machines equipped with Raspberry Pi 3B+ units, designed to
showcase games developed with SplashKit. The short-term goal is to prepare these platforms for
students to display their SplashKit creations. The medium-term goal is to streamline the process for
first-year students to easily upload and test their games.

**Game Development**:

The Game Development team is dedicated to creating and enhancing games that run on the arcade
machines. Their mission is to demonstrate SplashKit’s capabilities and inspire students by
showcasing what can be achieved with the framework.

**SplashKit Website**:

Powered by the Starlight framework, the revamped SplashKit website aims to offer an enriched and
user-friendly experience for developers and learners. It will host existing tutorials and guides,
providing a central hub for exploring and learning about SplashKit.

**SplashKit Tutorials**:

The SplashKit Website will feature tutorials aimed at helping students learn and explore SplashKit’s
functionality. The focus is on developing smaller, high-quality tutorials across C++, C#, and
Python, rather than extensive series.

**SplashKit Expansion**:

The Expansion team is responsible for maintaining and enhancing the SplashKit core. This includes
bug fixes, feature improvements, and refining installation and usage workflows through package
creation and addressing installation issues.

**SplashKit Online**:

SplashKit Online is developing a web-based IDE that allows students to write and run code directly
in their browsers. Initially launched as a prototype in 2023, the 2024 goal is to mature this tool
into a comprehensive product, including C# support and an embeddable version for the SplashKit
website.

### Aims for Trimester

Trimester Aims for SplashKit Development:

- **Refine and Complete SplashKit Online**: Finalise the development and polish of SplashKit Online
  to enhance its functionality and user experience. This includes embedding a "lite" version into
  the SplashKit website, focusing on seamless integration, improving interface design, and
  optimising performance for code snippets and interactive features. Migrate the current version to
  the Thoth Tech repository for centralised management.

- **Establish and Manage Software Packages**: Initiate the development of a comprehensive package
  management system for SplashKit libraries. This includes organising and automating the creation of
  software packages, ensuring their proper integration and usage across different platforms. Provide
  thorough documentation and sample projects to support users in integrating and utilising the
  packages effectively.

- **Enhance and Expand Tutorials and Guides**: Review and update existing tutorials to align with
  the latest features of SplashKit. Complete pending tutorials, including advanced topics like
  creating a 2D Metroidvania game and networking basics. Develop new tutorials for Raspberry Pi GPIO
  functionalities and networking principles. Ensure all tutorials are clear, interactive, and
  supported by updated guides.

- **Advance Arcade Game Automation**: Develop a foundational structure for arcade game automation.
  Enhance the EmulationStation menu to support new modes (Kiosk and Normal) and game download
  scripts. Create a local test mode for new game builds and implement a voting system to improve the
  star ranking process. Address C# compatibility issues and formalise the game upload process for
  student contributions.

- **Revamp SplashKit Website**: Establish a core onboarding hub on the SplashKit website, including
  onboarding guides, tutorial templates, and links to essential resources. Improve the API reference
  with additional usage examples, live demos, and a global language switcher. Fix broken parts of
  ported tutorials and import completed ones. Design and launch a showcase page to feature games
  developed with SplashKit, enhancing the website's visual appeal and user engagement.

- **Standardise Game Development Approach**: Introduce standardised implementation patterns for game
  development, focusing on decoupling data and functionality. Develop a "10-minute game" to
  implement core mechanics early in the trimester, allowing time for visual enhancements and
  additional features. Create documentation on discrete game systems and refine the implementation
  patterns based on feedback.

### Deliverables

#### Arcade

Trimester Deliverables:

- **Updates to Arcade Menu**:
  - Currently, the arcade machines utilise Emulation Station, forked from the RetroPI project
    version. The aim is to develop a new system for testing games.
  - Modify the Emulation Station menu to trigger game download scripts and add additional modes:
    - **Kiosk Mode**: Show only published games, ideal for events.
    - **Normal Mode**: Display both published and test games.

Long Term Deliverables:

- **Create a Local Test Mode**:
  - Develop a mode that allows users to drop a new game build for testing.
  - Ensure the machine deletes the game and resets after a predefined period.
  - Incorporate security measures to maintain system integrity.
- **Implement Voting System**:
  - Integrate a voting system to give significance to the star ranking currently available on the
    machines.
- **Arcade Game GitHub Actions**:
  - Correct the C# compatibility for ARM, as .NET currently does not run correctly in the emulated
    PI environment used for C++ games.
  - Update game README files to ensure control instructions and compiling processes are accurate and
    that all game assets are placed in the correct resources folder.
  - Implement versioning for compiled games to manage updates effectively.
- **Formalise Upload Process**:
  - Establish a formal process for students from SIT102 or SIT771 to upload their games to the
    arcade machines, ensuring a consistent and reliable workflow.

#### Game Development

Trimester Deliverables:

- **Establish Standardised Implementation Patterns**:
  - Enforce decoupling of data/functionality and decoupling of state/render patterns.
  - Develop a prescribed implementation pattern to ensure consistency and quality across projects.
- **Develop a "10 Minute Game"**:
  - Collaboratively plan and execute the development of a simple game (e.g., idle game, tower
    defence, survivor.io-like).
  - Ensure core game mechanics are implemented in the first sprint.
  - Focus the latter half of the trimester on improving visual representation, adding "juice," and
    implementing variations of core game elements (e.g., enemies, power-ups, weapons).
  - This approach ensures that core functionality is completed within a single trimester, with
    additional features developed against a standardised interface that integrates with the core
    game types.
- **Iterate on Prescribed Patterns**:
  - Adjust and refine the implementation pattern based on student feedback and experiences.
- **Generate Development Artifacts**:
  - Create documentation covering the implementation of discrete game systems (e.g., terrain
    generation systems using IDW/random walk/noise, 2D light marching, threaded state update and
    render patterns).

Long Term Deliverables:

- **Improve Documentation**:
  - Existing games often lack adequate documentation. Good documentation can significantly increase
    onboarding speed for new contributors.
  - For completed games, create UML diagrams, overviews of gameplay mechanics, and guides for
    creating levels in each game’s format.
  - Address the discoverability of existing documentation and resources. Update README files to
    reflect the current focus of work and ensure existing documentation is easy to find.
- **Complete Core Functionality of Incomplete Games**:
  - Focus on finishing significant core functionalities in games that are currently incomplete
    (e.g., Sky Surge, Single Combat).
- **Extend Gameplay and Functionality of Completed Games**:
  - Enhance and expand the gameplay and features of games that are already completed, ensuring they
    continue to engage and challenge players.

#### SplashKit.io Website

Trimester Deliverables:

- **Develop Core Onboarding Content and Templates**:
  - Onboarding Hub: Create a dedicated section for onboarding new members, including:
    - Onboarding guides and checklists.
    - Templates for tutorial proposals.
    - Links to essential guides and upskilling resources.
  - Visual and Functional Enhancement: Ensure the onboarding content is easily accessible and
    visually appealing.
- **Improve API Reference**:
  - Add Usage Examples: Enrich the API reference with additional usage examples to illustrate how to
    use various features.
  - Include Live Demos: Integrate live demos to provide interactive examples of API functionality.
  - Programming Language Switcher: Add a function to globally switch between programming languages
    in the API reference.
- **Continue Fixing the Ported Website**:
  - Fix Broken Tutorials: Resolve issues in existing tutorials, such as broken example code and
    formatting errors.
  - Import Completed Tutorials: Pull in more completed tutorials and ensure all resources are
    correctly linked and formatted.
- **Integrate SplashKit Online Links**:
  - Link Integration: Create a connection between the SplashKit website and SplashKit Online,
    including links to the embedded version and other related resources.
- **Create Starlight Documentation**:
  - Documentation Creation: Develop a comprehensive document for contributing to the Starlight
    website, covering:
    - Setup and configuration.
    - Folder structure and making changes.
    - Verification and viewing changes locally.
  - Supplementary Videos: Produce concise videos to support the documentation.
- **Design and Launch Showcase Page**:
  - Showcase Page Creation: Design and implement a webpage to feature games developed using
    SplashKit, highlighting the SDK’s capabilities and successful projects.

Long Term Deliverables:

- **Enhanced Onboarding and Resource Hub**:
  - Comprehensive Resource Centre: Expand the onboarding section into a full resource centre with:
    - Detailed onboarding paths.
    - Templates and guides for all stages of the tutorial and project development lifecycle.
    - A comprehensive upskilling section with curated learning materials.
- **Visual and User Experience Overhaul**:
  - Website Redesign: Undertake a redesign to improve the website’s visual appeal and user
    experience, ensuring it is modern and engaging.
  - Interactive Features: Add interactive elements and improved navigation to enhance user
    engagement and accessibility.
- **Advanced API Reference Features**:
  - Extended Language Support: Add support for additional programming languages and features in the
    API reference.
  - Interactive Documentation: Enhance the API reference with more interactive and user-friendly
    documentation elements.
- **Community Engagement and Contributions**:
  - Contributor Resources: Develop additional resources to support community contributions,
    including detailed guides, best practices, and an interactive forum.

#### SplashKit Tutorials

Trimester Deliverables:

- **Review Current Tutorials**:
  - **Compile and Run Tutorial Code**: Ensure all example code works correctly, fixing any issues
    (e.g., SplashKit Camera). Ensure they all use top level statements for C#, and include C++ and
    python code.
  - **Proof-read Content**: Verify that the wording is clear and comprehensible.
  - **Add Python Code Tabs**: Include Python code examples in any tutorials currently missing them.
- **Complete Outstanding Tutorials**:
  - Finish writing up several pending tutorials.
  - Plan and develop new tutorials to cover the full range of SplashKit functionality.
  - Specifically, develop the tutorial “Create a 2D Metroidvania Game” using incomplete pre-existing
    resources. Ensure this tutorial is cohesive and consistent.
- **Create Introductory Level Games**:
  - Write short, introductory-level games using procedural C++/C#, with accompanying tutorials aimed
    at SIT102 level beginner skills.
  - Link to content on [Programmers Guide](https://programmers.guide/) to promote the use of
    pre-existing material.
- **Create Networking Tutorials**:
  - Write short tutorials on building simple aspects of computer networks using Python and the
    SplashKit library.
  - Develop a basic tutorial for creating a client-server setup that can be extended to demonstrate
    various networking aspects.
  - Design a way for two programs to communicate over a local network, facilitating 2-player local
    games.
- **Create SplashKit Online IDE Tutorial**:
  - Develop a tutorial series on creating a game using the SplashKit Online IDE.
- **Tutorial Creation Documentation**:
  - Create a comprehensive guide on contributing a tutorial, covering the end-to-end process from
    proposal to completion.

Long Term Deliverables:

- **Expand and Update Tutorials**:
  - Continuously update existing tutorials to reflect changes in SplashKit.
  - Develop advanced tutorials to cover more complex topics and advanced functionalities of
    SplashKit.
- **Create a Comprehensive Tutorial Library**:
  - Develop a wide range of tutorials that cover all aspects of game development using SplashKit,
    including advanced game mechanics, AI, physics, and more.
- **Interactive Tutorial Platform**:
  - Develop an interactive platform where users can follow tutorials and write code directly within
    their browser, with real-time feedback and code execution.
- **Community Engagement and Feedback**:
  - Establish a system for receiving and incorporating feedback from the community to continuously
    improve tutorials.
  - Encourage contributions from the community and maintain a high standard for tutorial
    submissions.
- **Metroidvania Game Tutorial Rewrite**:
  - Re-write the "Create a 2D Metroidvania Game" tutorial series to improve organisation and
    consistency, using the existing material as a foundational resource.

#### SplashKit Expansion

Trimester Deliverables:

- **Deployment Packages**:
  - **Brew Package**: Finalise and fix existing Brew packages to ensure smooth installation and
    usage.
- **Test and Fix SplashKit Functionality**:
  - Identify and resolve bugs in SplashKit functionality (e.g., issues with MoveTo and mass
    handling).
- **Port SwinGame Functions to SplashKit**:
  - Review and port additional functions from SwinGames into SplashKit, enhancing functionality.
- **Fix Python Compatibility**:
  - Address Python compatibility issues that arose with the update to version 3.8, ensuring
    consistent functionality. Previous research indicates intermittent success with skm global
    install, but this needs to be resolved.
- **Finalise Contributor Documentation**:
  - Complete an in-depth document on contributing to SplashKit, covering setup, making changes,
    SplashKit structure (both code and folder), build scripts, deployment processes, and more.
  - Create onboarding pages on the Thoth Tech Documentation Website, including a concise
    supplementary video.
- **Improve Raspberry Pi Functionality**:
  - Enable remote control of GPIO pins on the Raspberry Pi.
  - Investigate and implement support for the Raspberry Pi 5, as current support only extends to
    Raspberry Pi 4B+.

Long Term Deliverables:

- **Further Integration Testing**:
  - Conduct detailed testing and bug fixing of SplashKit functionality.
  - Ensure both procedural and OOP versions of each function are thoroughly tested and reliable.
- **Comprehensive Testing and Bug Fixing**:
  - Develop a comprehensive automated test suite to regularly test SplashKit functionality and
    quickly identify and resolve new bugs. This ensures the framework remains stable and reliable as
    new features are added and updates are made.
- **Robust Python Integration**:
  - Develop robust integration with Python, ensuring consistent performance across all versions.
    This would involve resolving any existing compatibility issues and maintaining support for
    future Python updates, which broadens the user base and usability of SplashKit.
- **Continuous Improvement of Contributor Documentation**:
  - Keep contributor documentation up to date with any changes in SplashKit’s codebase, structure,
    or processes. Encourage community contributions to documentation, leveraging diverse
    perspectives and expertise to create a more comprehensive resource.
- **Enhanced Raspberry Pi Functionality**:
  - Develop more advanced remote-control features for GPIO pins on the Raspberry Pi and continuously
    update and expand support for newer Raspberry Pi models. This ensures that SplashKit remains a
    versatile tool for a wide range of hardware platforms, enhancing its appeal and functionality.

#### SplashKit Online

Trimester Deliverables:

- **Embed Lite Version into SplashKit Website**:
  - Develop and implement a "lite" version of SplashKit Online for embedding in the SplashKit
    website to demonstrate code snippets and showcase functionalities.
  - Focus on interface changes to integrate seamlessly with the website.
  - Improve loading times and caching to ensure smooth performance.
- **Deploy into Thoth Tech Repo**:
  - Migrate the current version from a prior team member’s personal repo to the official Thoth Tech
    repository.

Long Term Deliverables:

- **Improve Project Management**:
  - Project Handling: Add functionality for users to create, load, save, and delete projects within
    the browser, managing multiple projects with unique names.
  - Version Control: Integrate version control to track changes and revert to previous states as
    needed.
  - Export Project Builds: Enable exporting project builds as executables for C++ projects or single
    HTML files for JavaScript projects for better portability and sharing.
- **Improve SplashKit Online Interface**:
  - Layout and Workflow: Enhance the layout of buttons and overall workflow for a more intuitive
    user experience.
  - Code Editing and REPL Functionality: Implement auto-complete for variable parameters, add
    breakpoints, and create variable watch windows to improve coding and debugging.
- **Extended Language Support**:
  - C# Support: Explore and potentially add support for C# to broaden language options.
  - Python Support: Investigate and add support for Python as a stretch goal to accommodate
    additional user needs.
- **Advanced Project Features**:
  - Integrated Code Snippets: Develop functionality for users to save and reuse code snippets within
    their projects.
  - Collaborative Features: Consider implementing collaborative features for simultaneous project
    work among multiple users.

### Project Members

| **Member Name**    | **Role/Responsibilities**                          | **Junior/Senior** |
| ------------------ | -------------------------------------------------- | ----------------- |
| Mounika Angadipeta | Team Member – SplashKit Tutorials                  | Senior            |
| Jess Balsillie     | Team Member – SplashKit Online                     | Senior            |
| Oliver Exell-Bruce | Team Member – SplashKit Website & Tutorials        | Senior            |
| Oscar Harris       | Senior Lead – Games Development & Design           | Senior            |
| Mark Heath         | Team Member – Games Development                    | Senior            |
| Hayley Hughes      | Senior Lead – SplashKit Expansion & Arcade Machine | Senior            |
| Sharvani Kandala   | Team Member – SplashKit Tutorials                  | Senior            |
| Kartik Kaushik     | Team Member – SplashKit Tutorials & Website        | Senior            |
| Ka Chun Lam        | Team member – Games Development                    | Senior            |
| Jake Oxley         | Team Member – SplashKit Expansion & Tutorials      | Senior            |
| Nidhisha Pahade    | Team Member – SplashKit Website                    | Senior            |
| William Saunders   | Team Member – Arcade Machine & Expansion           | Senior            |
| Thomas Shanahan    | Team member – Games Development                    | Senior            |
| Darren Sunandar    | Team Member – SplashKit Expansion                  | Senior            |
| Jonathan Tynan     | Senior Lead – SplashKit Expansion & Tutorials      | Senior            |
| Taiming Xu         | Team Member – SplashKit Website                    | Senior            |
| Yuyang Yang        | Team Member – SplashKit Tutorials                  | Senior            |
| Simon Zhu          | Team Member – Games Development                    | Senior            |
| Jordan Brown       | Team Member – SplashKit Website                    | Junior            |
| Matthew Harding    | Team Member – SplashKit Expansion                  | Junior            |
| Ethan Holley       | Team Member – SplashKit Online                     | Junior            |
| Brianna Laird      | Junior Lead – SplashKit Tutorials & Expansion      | Junior            |
| Hangyu Li          | Team Member – SplashKit Website                    | Junior            |
| Sana Noureen       | Team Member – SplashKit Website                    | Junior            |
| Shaun Ratcliff     | Junior Lead – SplashKit Website & Tutorials        | Junior            |
| Anish Sampson      | Team Member – Games Development                    | Junior            |
| Amith Tiwari       | Team Member – SplashKit Website                    | Junior            |
