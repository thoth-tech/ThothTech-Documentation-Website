---
title: Thoth Tech – Company Report 2024 TRIMESTER 2
description: 6.1P Task, T2 2024
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

### Progress Update

Over the course of the trimester, the OnTrack team has made significant strides in aligning efforts
with the established goals and deliverables. Below is a detailed summary of the progress made
against each key objective:

**Bug Fixes and Urgent Enhancements**:

- **Chat Markdown Rendering Bug**: Successfully fixed an issue where markdown was not rendering
  properly in chat, enhancing the user experience for students and staff.
- **Documentation Enhancements**: Completed and merged documentation updates for both general and
  specific API pages. This includes contributions from team members on various entities such as
  requirement sets and course entities, directly supporting the goal of comprehensive documentation
  for OnTrack's evolving features.

**Backend and Frontend Development**:

- **Backend Requirements Implementation**: Completed backend requirements for several critical
  entities, including the requirement set, course, and course map unit entities. These efforts are
  part of the overarching aim to enhance CourseFlow functionality and ensure robust backend support
  for new and existing features.
- **Frontend Enhancements and Component Migrations**: Several components have been successfully
  migrated to Angular 17 and TypeScript, including the comments-modal, group set manager, and
  unit-ilo-edit-modal. Additionally, enhancements were made to PDF handling and user interface
  elements like the grade-task-modal and grade-icon components, contributing to the ongoing frontend
  migration and user interface improvement objectives.

**CourseFlow and New Feature Implementation**:

- **CourseMap Base Page Development**: Developed the base page for CourseMap, laying the groundwork
  for further enhancements and integrations planned for the CourseFlow component.
- **Ongoing Frontend Migration**: The migration of legacy CoffeeScript components to
  TypeScript/Angular continues, with files such as timeout.coffee and grade-task-modal.coffee
  currently under peer review. This aligns with our aim to complete at least 10% of the existing
  frontend migration backlog this trimester.

**New Feature Development and Quality of Life Improvements**:

- **Overlay Component Creation**: Developed a new overlay component to provide additional
  information about units to users, enhancing the user interface and experience. This feature is
  currently under review.
- **CourseFlow Enhancements**: Several enhancements are under review, including adding
  authentication to endpoints and integrating new UI elements. These efforts are part of the
  continued development of the CourseFlow API and its related functionalities.

**JPlag Integration and Dev Container Improvements**:

- **JPlag Container Workflow**: A functional setup for JPlag report generation using Docker Compose
  has been established, progressing toward the full integration of JPlag as a replacement for the
  existing MOSS plagiarism detection system.
- **Docker Dev Container Downsizing**: Feasibility studies and downsizing efforts, including the
  removal and containerisation of LaTeX from the Dev Container image, are currently being reviewed,
  aiming to streamline the development environment for future tasks.

### Ongoing and Pending Tasks

- **Group Set Manager Migration**: The migration of the group set manager component to the latest
  framework is in progress.
- **Unit Group Set Editor Migration**: The migration of the unit-group-set-editor.coffee file
  continues to move forward, aligning with our frontend migration goals.
- **Tasks in Peer Review**: Detailed documentation and API operations for units and task
  definitions, along with the migration of several legacy components, are currently under peer
  review. This work supports the ongoing documentation efforts and frontend migration initiatives.

### Team Members and Contributions

| **Full Name**                 | **Planner Card Name**                                                                                             | **Evidence**                                                                                                                                                                                                 |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Anirudh Nellippilli Joshi     | migrate file-uploader.coffee                                                                                      | <https://github.com/thoth-tech/documentation/pull/530/commits/724603f9709ca4744d3014a64b8002facf149de7https://github.com/thoth-tech/documentation/pull/530/commits/724603f9709ca4744d3014a64b8002facf149de7> |
| Atharv Sandip Bhandare        | Migration: comments-modal                                                                                         | <https://github.com/doubtfire-lms/doubtfire-web/pull/869> <br><https://github.com/thoth-tech/documentation/pull/519> <br><https://github.com/thoth-tech/doubtfire-web/pull/218>                              |
| Atharv Sandip Bhandare        | Write documentation                                                                                               | <https://github.com/thoth-tech/documentation/pull/528> <br><https://www.github.com/JackSCarroll/documentation/blob/JplagDocs/docs/OnTrack/JPlag/Jplag-Feasibility-Document.md>                               |
| Bruce Wang                    | Documentation: grade-task-modal component review                                                                  | <https://github.com/thoth-tech/documentation/pull/525>                                                                                                                                                       |
| Bruce Wang                    | Migration: grade-icon.coffee                                                                                      | <https://github.com/thoth-tech/doubtfire-web/pull/231>                                                                                                                                                       |
| Bruce Wang                    | Migration: grade-task-modal.coffee                                                                                | <https://github.com/thoth-tech/documentation/pull/525> <br><https://github.com/thoth-tech/doubtfire-web/pull/224>                                                                                            |
| Bruce Wang                    | Migration: timeout.coffee                                                                                         | <https://github.com/doubtfire-lms/doubtfire-web/pull/868/commits/6a965ef9927837bd3e9e77d27b035473cd974215>                                                                                                   |
| Eliya Geerlings               | Migration: comments-modal                                                                                         | <https://github.com/doubtfire-lms/doubtfire-web/pull/869> <br><https://github.com/thoth-tech/documentation/pull/519> <br><https://github.com/thoth-tech/doubtfire-web/pull/218>                              |
| Eliya Geerlings               | Autoload PDFs on page 2 when viewing student submissions                                                          | <https://github.com/thoth-tech/doubtfire-web/pull/232>                                                                                                                                                       |
| Eliya Geerlings               | Fix up existing confirmation-modal migration                                                                      | <https://github.com/doubtfire-lms/doubtfire-web/pull/870>                                                                                                                                                    |
| Eliya Geerlings               | Latex docker downsizing: Creation of feasibility document                                                         | <https://github.com/thoth-tech/documentation/pull/534>                                                                                                                                                       |
| Eliya Geerlings               | Latex docker downsizing: Implementation                                                                           | <https://github.com/thoth-tech/doubtfire-api/pull/38> <br><https://github.com/thoth-tech/doubtfire-deploy/pull/13>                                                                                           |
| Eliya Geerlings               | Persistent PDF zoom levels when selecting between different task submissions                                      | <https://github.com/thoth-tech/doubtfire-web/pull/228>                                                                                                                                                       |
| Eliya Geerlings               | Fix jupyter notebook latex rake test                                                                              | <https://github.com/doubtfire-lms/doubtfire-api/pull/444>                                                                                                                                                    |
| Ivan Justin                   | Latex docker downsizing: Creation of feasibility document                                                         | <https://github.com/thoth-tech/documentation/pull/534>                                                                                                                                                       |
| Ivan Justin                   | Migration: Unit-ilo-edit-modal.coffee                                                                             | <https://github.com/thoth-tech/documentation/pull/526> <br><https://github.com/thoth-tech/doubtfire-web/pull/226>                                                                                            |
| Jack Shinners Carroll         | Write documentation                                                                                               | <https://github.com/thoth-tech/documentation/pull/528> <br><https://www.github.com/JackSCarroll/documentation/blob/JplagDocs/docs/OnTrack/JPlag/Jplag-Feasibility-Document.md>                               |
| Jack Shinners Carroll         | Set up JPLAG container                                                                                            | <https://github.com/doubtfire-lms/doubtfire-deploy/pull/28>                                                                                                                                                  |
| Jake Mansfield                | Document the below API pages in detail within the website - set 5                                                 | <https://github.com/thoth-tech/doubtfire-astro/pull/9>                                                                                                                                                       |
| Jake Mansfield                | Implement the backend requirements for the course entity.                                                         | <https://github.com/thoth-tech/doubtfire-api/pull/34>                                                                                                                                                        |
| Jake Mansfield                | Implement the backend requirements for the course map entity.                                                     | <https://github.com/thoth-tech/doubtfire-api/pull/35>                                                                                                                                                        |
| Jake Mansfield                | Implement the backend requirements for the course map unit entity.                                                | <https://github.com/thoth-tech/doubtfire-api/pull/35>                                                                                                                                                        |
| Jake Mansfield                | Implement the backend requirements for the requirement set entity.                                                | <https://github.com/thoth-tech/doubtfire-api/pull/37>                                                                                                                                                        |
| Jake Mansfield                | Implement the backend requirements for the specialization entity.                                                 |                                                                                                                                                                                                              |
| Jake Mansfield                | Add Authentication to the Courseflow endpoints                                                                    |                                                                                                                                                                                                              |
| Jake Mansfield                | Add detailed operations for units API (group set - group ID) on Ontrack documentation website                     | <https://github.com/thoth-tech/doubtfire-astro/pull/10>                                                                                                                                                      |
| Jake Mansfield                | Add detailed operations for units API (task_definitions -tii_group_attachments ) on Ontrack documentation website | <https://github.com/thoth-tech/doubtfire-astro/pull/12>                                                                                                                                                      |
| Jake Mansfield                | Document the operations units API - Tutorial Streams                                                              | <https://github.com/thoth-tech/doubtfire-astro/pull/10>                                                                                                                                                      |
| Minu Nediyapalackal Sunil     | Document the below API pages in detail within the website - set 5                                                 | <https://github.com/thoth-tech/doubtfire-astro/pull/9>                                                                                                                                                       |
| Minu Nediyapalackal Sunil     | Add detailed operations for units API (group set - group ID) on Ontrack documentation website                     | <https://github.com/thoth-tech/doubtfire-astro/pull/10>                                                                                                                                                      |
| Minu Nediyapalackal Sunil     | Add detailed operations for units API (task_definitions -tii_group_attachments ) on Ontrack documentation website | <https://github.com/thoth-tech/doubtfire-astro/pull/12>                                                                                                                                                      |
| Minu Nediyapalackal Sunil     | Document the operations units API - Tutorial Streams                                                              | <https://github.com/thoth-tech/doubtfire-astro/pull/10>                                                                                                                                                      |
| Sam Rolfe                     | Implement the backend requirements for the course entity.                                                         | <https://github.com/thoth-tech/doubtfire-api/pull/34>                                                                                                                                                        |
| Sam Rolfe                     | Implement the backend requirements for the course map entity.                                                     | <https://github.com/thoth-tech/doubtfire-api/pull/35>                                                                                                                                                        |
| Sam Rolfe                     | Implement the backend requirements for the course map unit entity.                                                | <https://github.com/thoth-tech/doubtfire-api/pull/35>                                                                                                                                                        |
| Sam Rolfe                     | Implement the backend requirements for the requirement set entity.                                                | <https://github.com/thoth-tech/doubtfire-api/pull/37>                                                                                                                                                        |
| Sam Rolfe                     | Implement the backend requirements for the specialization entity.                                                 |                                                                                                                                                                                                              |
| Sam Rolfe                     | Add Authentication to the Courseflow endpoints                                                                    |                                                                                                                                                                                                              |
| Sam Rolfe                     | Add button to Courseflow main component                                                                           | <https://github.com/thoth-tech/doubtfire-web/pull/227>                                                                                                                                                       |
| Sam Rolfe                     | Create diagram of coursemap page                                                                                  | <https://github.com/thoth-tech/doubtfire-astro/pull/11>                                                                                                                                                      |
| Sam Rolfe                     | Created coursemap base page                                                                                       | <https://github.com/thoth-tech/doubtfire-web/pull/233>                                                                                                                                                       |
| Sam Rolfe                     | Migration: grade-icon.coffee                                                                                      | <https://github.com/thoth-tech/doubtfire-web/pull/231>                                                                                                                                                       |
| Shen Tian                     | Add button to Courseflow main component                                                                           | <https://github.com/thoth-tech/doubtfire-web/pull/227>                                                                                                                                                       |
| Shen Tian                     | Created coursemap base page                                                                                       | <https://github.com/thoth-tech/doubtfire-web/pull/233>                                                                                                                                                       |
| Shen Tian                     | Migration: timeout.coffee                                                                                         | <https://github.com/doubtfire-lms/doubtfire-web/pull/868/commits/6a965ef9927837bd3e9e77d27b035473cd974215>                                                                                                   |
| Shyama Chandrashekaran Pillai | Document the below API pages in detail within the website - set 5                                                 | <https://github.com/thoth-tech/doubtfire-astro/pull/9>                                                                                                                                                       |
| Shyama Chandrashekaran Pillai | Add detailed operations for units API (group set - group ID) on Ontrack documentation website                     | <https://github.com/thoth-tech/doubtfire-astro/pull/10>                                                                                                                                                      |
| Shyama Chandrashekaran Pillai | Add detailed operations for units API (task_definitions -tii_group_attachments ) on Ontrack documentation website | <https://github.com/thoth-tech/doubtfire-astro/pull/12>                                                                                                                                                      |
| Shyama Chandrashekaran Pillai | Document the operations units API - Tutorial Streams                                                              | <https://github.com/thoth-tech/doubtfire-astro/pull/10>                                                                                                                                                      |
| Thuy Tien Hoa                 | Migration: grade-icon.coffee                                                                                      | <https://github.com/thoth-tech/doubtfire-web/pull/231>                                                                                                                                                       |
| Thuy Tien Hoa                 | Migration: timeout.coffee                                                                                         | <https://github.com/doubtfire-lms/doubtfire-web/pull/868/commits/6a965ef9927837bd3e9e77d27b035473cd974215>                                                                                                   |

The OnTrack team has made considerable progress toward achieving the trimester’s goals, focusing on
both immediate bug fixes and long-term enhancements. We are on track to complete the planned
deliverables, including significant backend and frontend updates, new feature implementations, and
documentation improvements. Our continued efforts will ensure a smooth transition to modern
technologies and an enhanced user experience for all stakeholders.

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

### Progress Update

Significant progress has been made this trimester across multiple projects and deliverables aimed at
enhancing the functionality, usability, and educational impact of SplashKit.

**Arcade Machine**

- The process for copying games to the arcade machines has been clearly defined, resulting in a
  streamlined approach for uploading and testing student games. This new process simplifies the
  workflow, reduces setup time, and ensures that games can be quickly and efficiently tested on the
  arcade machines.
- Several improvements have been made to the arcade build documentation. Broken links have been
  fixed, and the content has been updated to reflect the latest processes. These updates enhance the
  clarity and accuracy of the documentation, providing better support for users and ensuring that
  the setup and maintenance procedures are up to date.

**Game Development**

- A high-level implementation pattern guide has been developed to streamline the onboarding process
  for new team members. By standardising game development patterns, this guide ensures a cohesive
  approach to project development and facilitates a smoother transition for new developers joining
  the team.
- Critical bugs in games such as _Below the Surface_ and _Venture Adventure_ have been resolved,
  significantly improving their gameplay experience and overall stability. Addressing these issues
  has led to a more polished and reliable gaming experience for players.
- A comprehensive development plan for the 'Bee Game' has been created, outlining core mechanics and
  class structures. This plan serves as a roadmap for guiding the project from initial conception
  through to completion, providing a clear framework for development and ensuring that key aspects
  of the game are thoroughly planned and executed.

**SplashKit.io Website**

- The troubleshooting section of the SplashKit.io website has been updated and reorganised to
  enhance the clarity and accessibility of troubleshooting resources. These improvements make it
  easier for users to find solutions to common issues, ensuring a more efficient and user-friendly
  experience when seeking help.
- A comprehensive review and update of processes, policies, and FAQs have been conducted to ensure
  that the information on the SplashKit.io website is current and aligns with the latest SplashKit
  practices. This ensures that users have access to accurate and relevant information, reflecting
  the most recent updates and best practices.
- Significant work has also gone into integrating a “games showcase” on the website. This includes
  the development of a featured games slider on the main SplashKit page, an index page listing all
  SplashKit games, and individual pages providing detailed information about each game. These
  additions enhance the visibility and accessibility of games created with SplashKit, offering users
  a comprehensive view of the creative projects developed using SplashKit.

**SplashKit Tutorials**

- A formal process for reviewing tutorials has been established and implemented, featuring detailed
  checklists to verify code accuracy, ensure content clarity, and align tutorials with best
  practices and the latest SplashKit features. This includes coverage in C++, C#, and Python, as
  well as incorporating top-level statements in C#. This structured approach aims to enhance the
  quality and reliability of all SplashKit tutorials.
- Several tutorials, including “Getting Started with Servers,” “Routing with Servers,” and “How to
  Make a RESTful API Call,” have been thoroughly reviewed according to the new process. These
  reviews ensure that the content is accurate, up-to-date, and compliant with the latest standards
  in SplashKit development.
- Networking tutorials for connecting programs, along with a guide on network functions, have been
  created. These resources provide a foundation for developing various programs and games that can
  connect over a local network.
- Python support has been expanded by adding Python code blocks to various guides, such as the JSON
  tutorial series and the “Using Mouse Inputs” guide. This addition increases the accessibility of
  our tutorials for Python developers and aligns with our goal to support multiple programming
  languages.
- New Code Usage examples have been developed for the clear_screen and fill_triangle functions,
  providing users with practical and clear demonstrations of how to use these functions effectively
  in their projects.
- A suite of physics tutorials has been created to provide users with a foundational understanding
  of 2D vectors, including topics such as vector definition, arithmetic, gravity, and collisions.
  These tutorials are designed to equip users with essential knowledge for incorporating
  physics-based mechanics into their games, enhancing their overall development experience.

**SplashKit Expansion**

- Several bug fixes have been successfully implemented, addressing issues such as those in the
  move_sprite_to function and correcting typos across various functions. These fixes have improved
  the reliability and functionality of SplashKit, ensuring a smoother experience for users.
- The investigation into porting SwinGame functions has progressed, with several functions
  identified for implementation. This effort aims to integrate useful features from SwinGame into
  SplashKit, enhancing the toolkit's capabilities and providing additional functionality.
- The initial implementation of remote GPIO control has been completed, featuring cross-platform
  capabilities and the ability to manage multiple Raspberry Pi devices. This development expands
  SplashKit's functionality by enabling remote hardware control, broadening its applications in
  various projects.
- New unit tests have been created to cover essential SplashKit functionality, including working
  with Bitmaps, Sound Effects, and Music. These tests are designed to ensure the accuracy and
  stability of these features, contributing to a more robust and reliable development environment.

### Ongoing and Pending Tasks

**Arcade Machine**

- **Expansion of Documentation**: Further updates and refinements to the arcade build documentation
  are needed to cover additional user scenarios and configurations. Ensuring comprehensive guidance
  will support users in various setup and maintenance situations.

**Game Development**

- **Development of New Games**: Continued focus is required on developing and executing plans for
  new game projects beyond the 'Bee Game.' This includes advancing other game concepts and ensuring
  they are fully realized and integrated into the development pipeline.
- **User Feedback Integration**: Collecting and integrating feedback from users on existing games to
  address any remaining issues and enhance gameplay. This ongoing process will help refine and
  improve the overall player experience.

**SplashKit.io Website**

- **Long-term Content Development**: There is a need to continue developing and expanding content on
  the SplashKit.io website, including additional tutorials, guides, and updates. This ongoing effort
  will ensure the website remains a comprehensive and up-to-date resource for users.
- **User Experience Enhancements**: Further enhancements to the website’s usability and design are
  required. This includes addressing user feedback and evolving best practices to maintain a
  user-friendly and efficient site.

**SplashKit Tutorials**

- **Completion of Tutorial Series**: Work on developing and reviewing additional tutorials,
  particularly for advanced topics and the planned vector tutorial series. This includes ensuring
  that new and existing tutorials meet quality standards and effectively teach users.
- **Interactive Elements**: Explore and implement interactive elements or exercises within tutorials
  to enhance user engagement and learning outcomes. This will provide a more dynamic and effective
  educational experience.

**SplashKit Expansion**

- **Full Implementation of Ported Functions**: Complete the integration and implementation of
  SwinGame functions identified during the investigation. This involves thorough testing and
  ensuring these functions are fully operational within SplashKit.
- **Expansion of Remote GPIO Features**: Continue the development of remote GPIO control features,
  including additional hardware integrations and platform support. Ongoing testing and refinement
  are essential to fully realise the potential of these features.

### Team Members and Contributions

| **Full Name**             | **Planner Card Name**                                                                   | **Evidence**                                                                                                                                                                                                                                                      |
| ------------------------- | --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Brianna Laird             | Fix Broken Dev Container                                                                | <https://github.com/splashkit/splashkit.io-starlight/pull/7>                                                                                                                                                                                                      |
| Brianna Laird             | SIT102 Channel Suggestion Post                                                          |                                                                                                                                                                                                                                                                   |
| Brianna Laird             | Update and Re-organise Trouble Shooting Section                                         | <https://github.com/splashkit/splashkit.io-starlight/pull/10>                                                                                                                                                                                                     |
| Brianna Laird             | Add Python code blocks to "Using Mouse Inputs" guide                                    | <https://github.com/thoth-tech/splashkit.io-starlight/pull/139>                                                                                                                                                                                                   |
| Brianna Laird             | Add Tutorial Review Documentation                                                       | <https://github.com/thoth-tech/documentation/pull/529>                                                                                                                                                                                                            |
| Brianna Laird             | Splashkit tutorial - Documentation Update                                               | <https://github.com/thoth-tech/ThothTech-Documentation-Website/pull/89>                                                                                                                                                                                           |
| Brianna Laird             | Update Usage Examples to add Python code                                                | <https://github.com/thoth-tech/splashkit.io-starlight/pull/144>                                                                                                                                                                                                   |
| Brianna Laird             | Validate/Update Processes, Policies and FAQs                                            | <https://github.com/thoth-tech/ThothTech-Documentation-Website/pull/85>                                                                                                                                                                                           |
| Brianna Laird             | Create Code Usage example for:"clear_screen" function                                   | <https://github.com/thoth-tech/splashkit.io-starlight/pull/148>                                                                                                                                                                                                   |
| Brianna Laird             | Review "Getting Started with Servers" guide                                             | <https://github.com/thoth-tech/documentation/pull/531https://github.com/thoth-tech/splashkit.io-starlight/pull/145>                                                                                                                                               |
| Brianna Laird             | Review "How to make a RESTful API call" guide                                           | <https://github.com/thoth-tech/documentation/pull/533https://github.com/thoth-tech/splashkit.io-starlight/pull/147>                                                                                                                                               |
| Brianna Laird             | Review “Routing with Servers”                                                           | <https://github.com/thoth-tech/documentation/pull/532> <br><https://github.com/thoth-tech/splashkit.io-starlight/pull/146>                                                                                                                                        |
| Darren Marchiano Sunandar | Fix typo in vector magnitude squared documentation                                      | <https://github.com/thoth-tech/splashkit-core/pull/62>                                                                                                                                                                                                            |
| Hangyu Li                 | Create Code Usage example for:"clear_screen" function                                   | <https://github.com/thoth-tech/splashkit.io-starlight/pull/148>                                                                                                                                                                                                   |
| Hayley Rose Hughes        | Define process for copying games to Arcade Machine                                      | <https://github.com/thoth-tech/documentation/pull/522>                                                                                                                                                                                                            |
| Hayley Rose Hughes        | Fix typo in vector magnitude squared documentation                                      | <https://github.com/thoth-tech/splashkit-core/pull/62>                                                                                                                                                                                                            |
| Hayley Rose Hughes        | Initial implementation of remote GPIO control                                           | <https://github.com/thoth-tech/splashkit-core/pull/58>                                                                                                                                                                                                            |
| Hayley Rose Hughes        | Investigate bug in move_sprite_to                                                       | <https://github.com/thoth-tech/splashkit-core/pull/59>                                                                                                                                                                                                            |
| Hayley Rose Hughes        | Circle-Triangle Collision Detection Methods                                             | <https://github.com/thoth-tech/splashkit-core/pull/60>                                                                                                                                                                                                            |
| Hayley Rose Hughes        | Fix broken links in Arcade Build Doco                                                   | <https://github.com/thoth-tech/documentation/pull/523>                                                                                                                                                                                                            |
| Hayley Rose Hughes        | Updated Arcade Build Doco                                                               | <https://github.com/thoth-tech/documentation/pull/523>                                                                                                                                                                                                            |
| Jake Andrew Oxley         | Identify missing functionality from SwinGame                                            | <https://github.com/thoth-tech/documentation/pull/536>                                                                                                                                                                                                            |
| Jonathan James Tynan      | Define process for copying games to Arcade Machine                                      | <https://github.com/thoth-tech/documentation/pull/522>                                                                                                                                                                                                            |
| Jonathan James Tynan      | Initial implementation of remote GPIO control                                           | <https://github.com/thoth-tech/splashkit-core/pull/58>                                                                                                                                                                                                            |
| Jonathan James Tynan      | Tutorial Proposal - 2D Vectors                                                          | <https://github.com/thoth-tech/ThothTech-Documentation-Website/pull/87>                                                                                                                                                                                           |
| Jonathan James Tynan      | Validate/Update Processes, Policies and FAQs                                            | <https://github.com/thoth-tech/ThothTech-Documentation-Website/pull/85>                                                                                                                                                                                           |
| Jonathan James Tynan      | Circle-Triangle Collision Detection Methods                                             | <https://github.com/thoth-tech/splashkit-core/pull/60>                                                                                                                                                                                                            |
| Jonathan James Tynan      | Fix broken links in Arcade Build Doco                                                   | <https://github.com/thoth-tech/documentation/pull/523>                                                                                                                                                                                                            |
| Jonathan James Tynan      | Updated Arcade Build Doco                                                               | <https://github.com/thoth-tech/documentation/pull/523>                                                                                                                                                                                                            |
| Ka Chun Lam               | Project Bee - create player class                                                       | <https://github.com/zhusim222/Bee-game/pull/1>                                                                                                                                                                                                                    |
| Ka Chun Lam               | Project Bee - programming plan                                                          | <https://github.com/zhusim222/Bee-game/pull/4>                                                                                                                                                                                                                    |
| Ka Chun Lam               | project Bee - Obstacle class                                                            | <https://github.com/zhusim222/Bee-game/pull/2https://github.com/zhusim222/Bee-game/pull/3>                                                                                                                                                                        |
| Mark Heath                | Below The Surface - level 9 (FIGHT) has a collision issue next to the exit              | <https://github.com/thoth-tech/arcade-games/pull/225>                                                                                                                                                                                                             |
| Mark Heath                | Venture Adventure - fix bundle files                                                    | <https://github.com/thoth-tech/arcade-games/pull/219>                                                                                                                                                                                                             |
| Mark Heath                | Venture Adventure - fix level music                                                     | <https://github.com/thoth-tech/arcade-games/pull/222>                                                                                                                                                                                                             |
| Mark Heath                | Venture Adventure - fix level numbering scheme                                          |                                                                                                                                                                                                                                                                   |
| Mark Heath                | Venture Adventure - remove outdated credit                                              | <https://github.com/thoth-tech/arcade-games/pull/218>                                                                                                                                                                                                             |
| Mark Heath                | Venture Adventure - small refactor                                                      | <https://github.com/thoth-tech/arcade-games/pull/220https://github.com/thoth-tech/arcade-games/pull/221https://github.com/thoth-tech/arcade-games/pull/222https://github.com/thoth-tech/arcade-games/pull/223https://github.com/thoth-tech/arcade-games/pull/224> |
| Mark Heath                | All games - locally-compiled exe(s) are platform-specific                               | <https://github.com/thoth-tech/arcade-games/pull/226>                                                                                                                                                                                                             |
| Matthew James Harding     | Fix typo in vector magnitude squared documentation                                      | <https://github.com/thoth-tech/splashkit-core/pull/62>                                                                                                                                                                                                            |
| Matthew James Harding     | Investigate bug in move_sprite_to                                                       | <https://github.com/thoth-tech/splashkit-core/pull/59>                                                                                                                                                                                                            |
| Matthew James Harding     | Add bitmap, sound effect and music unit tests                                           | <https://github.com/splashkit/splashkit-core/pull/179>                                                                                                                                                                                                            |
| Matthew James Harding     | Circle-Triangle Collision Detection Methods                                             | <https://github.com/thoth-tech/splashkit-core/pull/60>                                                                                                                                                                                                            |
| Mounika Angadipeta        | Add C# code blocks to the 3 JSON guides                                                 | <https://github.com/thoth-tech/splashkit.io-starlight/pull/133>                                                                                                                                                                                                   |
| Mounika Angadipeta        | Add Python code blocks to "Using Mouse Inputs" guide                                    | <https://github.com/thoth-tech/splashkit.io-starlight/pull/139>                                                                                                                                                                                                   |
| Mounika Angadipeta        | Tutorial Proposal - 2D Vectors                                                          | <https://github.com/thoth-tech/ThothTech-Documentation-Website/pull/87>                                                                                                                                                                                           |
| Oliver Exell-Bruce        | Fix guides index page                                                                   | <https://github.com/thoth-tech/splashkit.io-starlight/pull/149/>                                                                                                                                                                                                  |
| Oscar Harris              | Create 1-2 page condensed, high level implementation pattern guide for rapid onboarding | <https://github.com/thoth-tech/arcade-games/pull/227>                                                                                                                                                                                                             |
| Sharvani Kandala          | Create Code Usage Examples for: "fill_triangle" function                                | <https://github.com/thoth-tech/splashkit.io-starlight/pull/143>                                                                                                                                                                                                   |
| Sharvani Kandala          | Review "How to make a RESTful API call" guide                                           | <https://github.com/thoth-tech/documentation/pull/533https://github.com/thoth-tech/splashkit.io-starlight/pull/147>                                                                                                                                               |
| Shaun Ratcliff            | Add C# code blocks to the 3 JSON guides                                                 | <https://github.com/thoth-tech/splashkit.io-starlight/pull/133>                                                                                                                                                                                                   |
| Shaun Ratcliff            | Splashkit tutorial - Documentation Update                                               | <https://github.com/thoth-tech/ThothTech-Documentation-Website/pull/89>                                                                                                                                                                                           |
| Shaun Ratcliff            | Tutorial Proposal - 2D Vectors                                                          | <https://github.com/thoth-tech/ThothTech-Documentation-Website/pull/87>                                                                                                                                                                                           |
| Shaun Ratcliff            | Validate/Update Processes, Policies and FAQs                                            | <https://github.com/thoth-tech/ThothTech-Documentation-Website/pull/85>                                                                                                                                                                                           |
| Shaun Ratcliff            | SplashKit Tutorial - 2D Vectors                                                         | <https://github.com/thoth-tech/splashkit.io-starlight/pull/134>                                                                                                                                                                                                   |
| Shaun Ratcliff            | Update Broken Splashkit.io Links                                                        | <https://github.com/thoth-tech/splashkit.io-starlight/pull/136>                                                                                                                                                                                                   |
| Shaun Ratcliff            | Games Showcase Page                                                                     | <https://github.com/thoth-tech/splashkit.io-starlight/pull/155>                                                                                                                                                                                                   |
| Thomas James Shanahan     | All games - locally-compiled exe(s) are platform-specific                               | <https://github.com/thoth-tech/arcade-games/pull/226>                                                                                                                                                                                                             |
| Thomas James Shanahan     | project Bee - create programming plan                                                   | <https://github.com/zhusim222/Bee-game/pull/4>                                                                                                                                                                                                                    |
| Will Saunders             | Define process for copying games to Arcade Machine                                      | <https://github.com/thoth-tech/documentation/pull/522>                                                                                                                                                                                                            |
| Will Saunders             | Initial implementation of remote GPIO control                                           | <https://github.com/thoth-tech/splashkit-core/pull/58>                                                                                                                                                                                                            |
| Will Saunders             | Investigate bug in move_sprite_to                                                       | <https://github.com/thoth-tech/splashkit-core/pull/59>                                                                                                                                                                                                            |
| Will Saunders             | Add bitmap, sound effect and music unit tests                                           | <https://github.com/splashkit/splashkit-core/pull/179>                                                                                                                                                                                                            |
| Will Saunders             | Update Splashkit Sprite tutorial                                                        | <https://github.com/thoth-tech/splashkit.io-starlight/pull/142>                                                                                                                                                                                                   |
| Will Saunders             | Fix broken links in Arcade Build Doco                                                   | <https://github.com/thoth-tech/documentation/pull/523>                                                                                                                                                                                                            |
| Will Saunders             | Updated Arcade Build Doco                                                               | <https://github.com/thoth-tech/documentation/pull/523>                                                                                                                                                                                                            |
| Yuyang Yang               | Add C# code blocks to the 3 JSON guides                                                 | <https://github.com/thoth-tech/splashkit.io-starlight/pull/133>                                                                                                                                                                                                   |
| Yuyang Yang               | Add Python code blocks to "Using Mouse Inputs" guide                                    | <https://github.com/thoth-tech/splashkit.io-starlight/pull/139>                                                                                                                                                                                                   |

The SplashKit team has made considerable progress this trimester, advancing our objectives with
notable improvements and ongoing enhancements. We have effectively addressed immediate issues, such
as bug fixes and documentation updates, while laying the groundwork for long-term development. Our
focus on refining tutorials, expanding website content, and integrating new features is driving us
towards achieving our deliverables. As we move forward, our efforts will continue to enhance
SplashKit’s functionality, support a broader user base, and ensure a seamless and robust development
environment for all users.                    