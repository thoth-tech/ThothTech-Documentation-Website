---
title: Thoth Tech – Company Report 2024 TRIMESTER 2
description: 11.2P Task, T2 2024
---

# Table of Contents

[1. Executive Summary](#executive-summary)

[2. Showcase Video](#showcase-video)

[3. Leadership Team](#leadership-team)

>[3.1 Company Board](#company-board)

>[3.2 Product Mentors](#product-mentors)

>[3.3 Student Leaders](#student-leads)

>[3.4 Leadership Responsibilties](#leadership-responsibilities)

[4. Company Structure](#company-structure)

[5. Project 1: OnTrack](#project-1-ontrack)

>[5.1 Project Overview](#project-overview)

>[5.2 User Manual](#user-manual)

>[5.3 Completed Deliverables](#completed-deliverables)

>[5.4 Roadmap](#roadmap)

>[5.5 Open Issues](#open-issues)

>[5.6 Lessons Learned](#lessons-learned)

>[5.7 Product Development Life Cycle](#product-development-life-cycle)

>>[5.7.1 New Tasks](#new-tasks)

>>[5.7.2 Definition of Done](#definition-of-done)

>>[5.7.3 Task Review](#task-review)

>>[5.7.4 Testing](#testing)

>>[5.7.5 Branching Strategy](#branching-strategy)

>[5.8 Product Architecture](#product-architecture)

>>[5.8.1 UML Diagram](#uml-diagram)

>>[5.8.2 Tech Stack](#tech-stack)

>[5.9 Source Code](#source-code)

>[5.10 Login Credentials](#login-credentials)

>[5.11 Other Relevant Information](#other-relevant-information)

>[5.12 Appendices](#appendices)

[6. Project 2: SplashKit](#project-2-splashkit)

>[6.1 Project Overview](#project-overview-1)

>[6.2 User Manual](#user-manual-1)

>[6.3 Completed Deliverables](#completed-deliverables-1)

>[6.4 Roadmap](#roadmap-1)

>[6.5 Open Issues](#open-issues-1)

>[6.6 Lessons Learned](#lessons-learned-1)

>[6.7 Product Development Life Cycle](#product-development-life-cycle-1)

>>[6.7.1 New Tasks](#new-tasks-1)

>>[6.7.2 Definition of Done](#definition-of-done-1)

>>[6.7.3 Task Review](#task-review-1)

>>[6.7.4 Testing](#testing-1)

>>[6.7.5 Branching Strategy](#branching-strategy-1)

>[6.8 Product Architecture](#product-architecture-1)

>>[6.8.1 UML Diagram](#uml-diagram-1)

>>[6.8.2 Tech Stack](#tech-stack-1)

>[6.9 Source Code](#source-code-1)

>[6.10 Login Credentials](#login-credentials-1)

>[6.11 Other Relevant Information](#other-relevant-information-1)

>[6.12 Appendices](#appendices-1)

# Executive Summary 

# Showcase Video

# Leadership Team

## Company Board 

**Name**

*Title*

Email

List multiple if applicable.

## Product Mentors

## Student Leads

## Leadership Responsibilities

# Company Structure

# Project 1: OnTrack

## Project Overview

OnTrack, also known as Doubtfire, is an innovative Learning Management System (LMS) tailored for skill-based course delivery. This platform facilitates the connection between tutors and students, primarily at Deakin University and other global institutions. The overarching goal of OnTrack is to enhance the educational experience by providing a structured, efficient, and interactive learning environment. This system aims to improve student engagement, learning outcomes, and the overall teaching and learning process, benefiting both students and educational staff. 

## User Manual

Give instructions for how someone should use your product or navigate
around your development environment. Include images, diagrams, or
anything that would help a first-time user to use your product
correctly.

Better yet, you could create short instructional videos using software
like [Loom](https://www.loom.com/) and include the video links in this
section. You may find this option is considerably easier than trying to
communicate your instructions through text! (Note: this is just a
suggestion, it’s not mandatory.) Here are some ideas of what to cover:

If your product currently requires a complex set of steps to activate,
include that.

If your product has a hardware component, explain how to activate and
sync the hardware with the software.

If your team has a user experience journey that they’ve mapped out for
when a user navigates your product, run through a demo of that.

## Completed Deliverables

This trimester, the following key deliverables were completed:
- Bug Fixes and Urgent Enhancements

  - Chat Markdown Rendering Bug: Successfully fixed an issue where markdown was not rendering properly in chat, enhancing the user experience for students and staff.
  - Documentation Enhancements: Completed and merged documentation updates for both general and specific API pages. This includes contributions from team members on various entities such as requirement sets and course entities, directly supporting the goal of comprehensive documentation for OnTrack's evolving features.

- Frontend Enhancements and Component Migrations: Several components have been successfully migrated to Angular 17 and TypeScript, including the comments-modal, group set manager, and unit-ilo-edit-modal. Additionally, enhancements were made to PDF handling and user interface elements like the grade-task-modal and grade-icon components, contributing to the ongoing frontend migration and user interface improvement objectives.
  - Ongoing Frontend Migration: The migration of legacy CoffeeScript components to TypeScript/Angular continues, with files such as timeout.coffee and grade-task-modal.coffee currently under peer review. This aligns with our aim to complete at least 10% of the existing frontend migration backlog this trimester.
  - Overlay Component Creation: Developed a new overlay component to provide additional information about units to users, enhancing the user interface and experience. This feature is currently under review.

- CourseFlow:

  - CourseMap Base Page Development: Developed the base page for CourseMap, laying the groundwork for further enhancements and integrations planned for the CourseFlow component.
  - Backend Requirements Implementation: Completed backend requirements for several critical entities, including the requirement set, course, and course map unit entities. These efforts are part of the overarching aim to enhance CourseFlow functionality and ensure robust backend support for new and existing features.
  - CourseFlow Enhancements: Several enhancements are under review, including adding authentication to endpoints and integrating new UI elements. These efforts are part of the continued development of the CourseFlow API and its related functionalities.

- JPLAG - jplag software plagiarism has been implemented as a containerised batch process. Frontend and backend additions have been made to allow plagiarism report downloads.
- Dev Container Image Downsizing - LaTex and MariaDB have been moved into their own containers; reducing rebuild time of the main container significantly
- Nginx - an nginx container has been created to utilise reverse proxying, allowing localhost:4200 and localhost:3000 to be accessed at localhost/ and localhost/api

- Ongoing and Pending Tasks:

  - Group Set Manager Migration: The migration of the group set manager component to the latest framework is in progress.
  - Unit Group Set Editor Migration: The migration of the unit-group-set-editor.coffee file continues to move forward, aligning with our frontend migration goals.
  - Tasks in Peer Review: Detailed documentation and API operations for units and task definitions, along with the migration of several legacy components, are currently under peer review. This work supports the ongoing documentation efforts and frontend migration initiatives.

| Name | Task Name | Task Attachment |
|---|---|---|
| Amos Saji | Migration: group set manager | https://github.com/thoth-tech/documentation/pull/549<br>https://github.com/thoth-tech/doubtfire-web/pull/244 |
| Amrith Jayadeep | Migration: group set selector | https://github.com/thoth-tech/documentation/pull/544/commits/6789b275af1deb663877b8953f229c5277582e59<br>https://github.com/thoth-tech/doubtfire-web/pull/239 |
| Anirudh Nellippilli Joshi | Documentation: grade-task-modal component review | https://github.com/thoth-tech/documentation/pull/525 |
| Anirudh Nellippilli Joshi | migrate file-uploader.coffee | https://github.com/thoth-tech/documentation/pull/535/files<br>https://github.com/thoth-tech/doubtfire-web/pull/246/commits/28a77cd0821ce9b66a43c47741cda35c39132fd2 |
| Anirudh Nellippilli Joshi | Migration: group set selector | https://github.com/thoth-tech/documentation/pull/544/commits/6789b275af1deb663877b8953f229c5277582e59<br>https://github.com/thoth-tech/doubtfire-web/pull/239 |
| Anirudh Nellippilli Joshi | Migration: group set manager | https://github.com/thoth-tech/documentation/pull/549<br>https://github.com/thoth-tech/doubtfire-web/pull/244 |
| Anirudh Nellippilli Joshi | Migration: csv-result-modal.coffee | https://github.com/thoth-tech/documentation/pull/524#issue-2441710229<br>https://github.com/thoth-tech/doubtfire-web/pull/248/commits/b0c23fa084e074feec9cfd4618d2e2ff9412f2c7 |
| Anirudh Nellippilli Joshi | Onboarding Juniors Guidence | https://github.com/thoth-tech/documentation/pull/551 |
| Atharv Sandip Bhandare | Migration: comments-modal | https://github.com/doubtfire-lms/doubtfire-web/pull/869<br>https://github.com/thoth-tech/documentation/pull/519<br>https://github.com/thoth-tech/doubtfire-web/pull/218 |
| Atharv Sandip Bhandare | Write documentation for JPLAG | https://github.com/thoth-tech/documentation/pull/528<br>https://www.github.com/JackSCarroll/documentation/blob/JplagDocs/docs/OnTrack/JPlag/Jplag-Feasibility-Document.md |
| Atharv Sandip Bhandare | Migration: Component task-ilo-alignment-modal.coffee |  |
| Atharv Sandip Bhandare | Add user UI does not allow user creation | https://github.com/thoth-tech/documentation/pull/556<br>https://github.com/thoth-tech/doubtfire-web/pull/254 |
| Atharv Sandip Bhandare | Migration: unit-staff-editor.coffee | https://github.com/thoth-tech/documentation/pull/543<br>https://github.com/thoth-tech/doubtfire-web/pull/235 |
| Atharv Sandip Bhandare | JPLAG UI documentation | https://github.com/thoth-tech/documentation/pull/555 |
| Bruce Wang | Migration: comments-modal | https://github.com/doubtfire-lms/doubtfire-web/pull/869<br>https://github.com/thoth-tech/documentation/pull/519<br>https://github.com/thoth-tech/doubtfire-web/pull/218 |
| Bruce Wang | Documentation: grade-task-modal component review | https://github.com/thoth-tech/documentation/pull/525 |
| Bruce Wang | migrate file-uploader.coffee | https://github.com/thoth-tech/documentation/pull/535/files<br>https://github.com/thoth-tech/doubtfire-web/pull/246/commits/28a77cd0821ce9b66a43c47741cda35c39132fd2 |
| Bruce Wang | Migration: grade-icon.coffee | https://github.com/thoth-tech/doubtfire-web/pull/231 |
| Bruce Wang | Migrate analytics.coffee | https://github.com/thoth-tech/doubtfire-web/pull/256 |
| Bruce Wang | Migrate viewer.coffee | https://github.com/thoth-tech/doubtfire-web/pull/251 |
| Bruce Wang | Migration: timeout.coffee | https://github.com/doubtfire-lms/doubtfire-web/pull/868/commits/6a965ef9927837bd3e9e77d27b035473cd974215<br>https://github.com/thoth-tech/doubtfire-web/pull/230 |
| Bruce Wang | Migration: unauthorised.coffee | https://github.com/thoth-tech/doubtfire-web/pull/257 |
| Bruce Wang | Migration: unit-staff-editor.coffee | https://github.com/thoth-tech/documentation/pull/543<br>https://github.com/thoth-tech/doubtfire-web/pull/235 |
| Bruce Wang | Migration: csv-result-modal.coffee | https://github.com/thoth-tech/documentation/pull/524#issue-2441710229<br>https://github.com/thoth-tech/doubtfire-web/pull/248/commits/b0c23fa084e074feec9cfd4618d2e2ff9412f2c7 |
| Bruce Wang | Onboarding Juniors Guidence | https://github.com/thoth-tech/documentation/pull/551 |
| Eliya Geerlings | Migration: comments-modal | https://github.com/doubtfire-lms/doubtfire-web/pull/869<br>https://github.com/thoth-tech/documentation/pull/519<br>https://github.com/thoth-tech/doubtfire-web/pull/218 |
| Eliya Geerlings | Autoload PDFs on page 2 when viewing student submissions | https://github.com/thoth-tech/doubtfire-web/pull/232 |
| Eliya Geerlings | Fix jupyter notebook latex rake test | https://github.com/doubtfire-lms/doubtfire-api/pull/444 |
| Eliya Geerlings | Fix up existing confirmation-modal migration | https://github.com/doubtfire-lms/doubtfire-web/pull/870 |
| Eliya Geerlings | Latex docker downsizing: Creation of feasibility document | https://github.com/thoth-tech/documentation/pull/534 |
| Eliya Geerlings | Latex docker downsizing: Implementation | https://github.com/thoth-tech/doubtfire-api/pull/38<br>https://github.com/thoth-tech/doubtfire-deploy/pull/13 |
| Eliya Geerlings | Persistent PDF zoom levels when selecting between different task submissions | https://github.com/thoth-tech/doubtfire-web/pull/228 |
| Eliya Geerlings | Migration: unit-staff-editor.coffee | https://github.com/thoth-tech/documentation/pull/543<br>https://github.com/thoth-tech/doubtfire-web/pull/235 |
| Ivan Justin | Latex docker downsizing: Creation of feasibility document | https://github.com/thoth-tech/documentation/pull/534 |
| Ivan Justin | Chat markdown not rendering properly bug | https://github.com/thoth-tech/doubtfire-web/pull/250 |
| Ivan Justin | Migration: Unit-ilo-edit-modal.coffee | https://github.com/thoth-tech/documentation/pull/526<br>https://github.com/thoth-tech/doubtfire-web/pull/226 |
| Jack Shinners Carroll | Write documentation for JPLAG | https://github.com/thoth-tech/documentation/pull/528<br>https://www.github.com/JackSCarroll/documentation/blob/JplagDocs/docs/OnTrack/JPlag/Jplag-Feasibility-Document.md |
| Jack Shinners Carroll | Documentation: grade-task-modal component review | https://github.com/thoth-tech/documentation/pull/525 |
| Jack Shinners Carroll | Latex docker downsizing: Creation of feasibility document | https://github.com/thoth-tech/documentation/pull/534 |
| Jack Shinners Carroll | Latex docker downsizing: Implementation | https://github.com/thoth-tech/doubtfire-api/pull/38<br>https://github.com/thoth-tech/doubtfire-deploy/pull/13 |
| Jack Shinners Carroll | Migrate analytics.coffee | https://github.com/thoth-tech/doubtfire-web/pull/256 |
| Jack Shinners Carroll | Migration: unit-staff-editor.coffee | https://github.com/thoth-tech/documentation/pull/543<br>https://github.com/thoth-tech/doubtfire-web/pull/235 |
| Jack Shinners Carroll | Add JPLAG frontend | https://github.com/doubtfire-lms/doubtfire-web/pull/873 |
| Jack Shinners Carroll | Alter JPLAG api code | https://github.com/doubtfire-lms/doubtfire-api/pull/447 |
| Jack Shinners Carroll | Create JPLAG Container | https://github.com/doubtfire-lms/doubtfire-deploy/pull/28 |
| Jack Shinners Carroll | JPLAG UI documentation | https://github.com/thoth-tech/documentation/pull/555 |
| Jake Mansfield | Document the below API pages in detail within the website - set 5 | https://github.com/thoth-tech/doubtfire-astro/pull/9 |
| Jake Mansfield | Implement the backend requirements for the course entity. | https://github.com/thoth-tech/doubtfire-api/pull/34 |
| Jake Mansfield | Implement the backend requirements for the course map entity. | https://github.com/thoth-tech/doubtfire-api/pull/35 |
| Jake Mansfield | Implement the backend requirements for the course map unit entity. | https://github.com/thoth-tech/doubtfire-api/pull/35 |
| Jake Mansfield | Implement the backend requirements for the requirement set entity. | https://github.com/thoth-tech/doubtfire-api/pull/37 |
| Jake Mansfield | Implement the backend requirements for the specialization entity. |  |
| Jake Mansfield | Add detailed operations for units API (task_definitions -tii_group_attachments ) on Ontrack documentation website | https://github.com/thoth-tech/doubtfire-astro/pull/12 |
| Jake Mansfield | Add Authentication to the Courseflow endpoints |  |
| Jake Mansfield | Add button to Courseflow main component | https://github.com/thoth-tech/doubtfire-web/pull/227 |
| Jake Mansfield | Created coursemap base page | https://github.com/thoth-tech/doubtfire-web/pull/233 |
| Jake Mansfield | Add detailed operations for units API (task_definitions) on Ontrack documentation website | https://github.com/thoth-tech/doubtfire-astro/pull/12 |
| Jake Mansfield | Add detailed operations for units API (group set - group ID) on Ontrack documentation website | https://github.com/thoth-tech/doubtfire-astro/pull/10 |
| Jake Mansfield | Add detailed operations for units API (group set - group csv) on Ontrack documentation website | https://github.com/thoth-tech/doubtfire-astro/pull/10 |
| Jake Mansfield | Add detailed operations for units API (task_definitions - task_assessment_resources ) on Ontrack documentation website | https://github.com/thoth-tech/doubtfire-astro/pull/13 |
| Jake Mansfield | Document the operations units API - Tutorial Streams | https://github.com/thoth-tech/doubtfire-astro/pull/10 |
| Jake Mansfield | Ensure Unit Definition model satisfies all requirements (Phase 2) |  |
| Jake Mansfield | Create appropriate testing files for the Unit Definition entity (Phase 1) | https://github.com/thoth-tech/doubtfire-api/pull/42 |
| Jake Mansfield | Create dummy data for a specific course for the front end to use (Phase 3) | https://github.com/thoth-tech/doubtfire-api/pull/43 |
| Jake Mansfield | Implement the backend requirements for the Unit Definition entity (phase 1) | https://github.com/thoth-tech/doubtfire-api/pull/42 |
| Jake Mansfield | Make a Plan for Courseflow for T2 |  |
| Jake Mansfield | Migrate analytics.coffee | https://github.com/thoth-tech/doubtfire-web/pull/256 |
| Jake Mansfield | Migrate the existing Unit table to be compatible with Unit Definition (Phase 4) | https://github.com/thoth-tech/doubtfire-api/pull/41 |
| Jake Mansfield | Migration: timeout.coffee | https://github.com/doubtfire-lms/doubtfire-web/pull/868/commits/6a965ef9927837bd3e9e77d27b035473cd974215<br>https://github.com/thoth-tech/doubtfire-web/pull/230 |
| Jake Mansfield | Courseflow Documentation Requirement Analysis | https://github.com/thoth-tech/doubtfire-astro/pull/14 |
| Jake Mansfield | Onboarding Juniors Guidence | https://github.com/thoth-tech/documentation/pull/551 |
| Minu Nediyapalackal Sunil | Document the below API pages in detail within the website - set 5 | https://github.com/thoth-tech/doubtfire-astro/pull/9 |
| Minu Nediyapalackal Sunil | Add detailed operations for units API (task_definitions -tii_group_attachments ) on Ontrack documentation website | https://github.com/thoth-tech/doubtfire-astro/pull/12 |
| Minu Nediyapalackal Sunil | Add detailed operations for units API (task_definitions) on Ontrack documentation website | https://github.com/thoth-tech/doubtfire-astro/pull/12 |
| Minu Nediyapalackal Sunil | Create diagram of coursemap page | https://github.com/thoth-tech/doubtfire-astro/pull/11 |
| Minu Nediyapalackal Sunil | Add detailed operations for units API (group set - group ID) on Ontrack documentation website | https://github.com/thoth-tech/doubtfire-astro/pull/10 |
| Minu Nediyapalackal Sunil | Add detailed operations for units API (group set - group csv) on Ontrack documentation website | https://github.com/thoth-tech/doubtfire-astro/pull/10 |
| Minu Nediyapalackal Sunil | Add detailed operations for units API (task_definitions - task_assessment_resources ) on Ontrack documentation website | https://github.com/thoth-tech/doubtfire-astro/pull/13 |
| Minu Nediyapalackal Sunil | Document the operations units API - Tutorial Streams | https://github.com/thoth-tech/doubtfire-astro/pull/10 |
| Minu Nediyapalackal Sunil | Pull the API docs from last trimester into the new folder structure | https://github.com/thoth-tech/doubtfire-astro/pull/15 |
| Minu Nediyapalackal Sunil | Courseflow Documentation Requirement Analysis | https://github.com/thoth-tech/doubtfire-astro/pull/14 |
| Muhammad Danial | Migration: Component task-ilo-alignment-modal.coffee |  |
| Sam Rolfe | Implement the backend requirements for the course entity. | https://github.com/thoth-tech/doubtfire-api/pull/34 |
| Sam Rolfe | Implement the backend requirements for the course map entity. | https://github.com/thoth-tech/doubtfire-api/pull/35 |
| Sam Rolfe | Implement the backend requirements for the course map unit entity. | https://github.com/thoth-tech/doubtfire-api/pull/35 |
| Sam Rolfe | Implement the backend requirements for the requirement set entity. | https://github.com/thoth-tech/doubtfire-api/pull/37 |
| Sam Rolfe | Implement the backend requirements for the specialization entity. |  |
| Sam Rolfe | Add Authentication to the Courseflow endpoints |  |
| Sam Rolfe | Add button to Courseflow main component | https://github.com/thoth-tech/doubtfire-web/pull/227 |
| Sam Rolfe | Created coursemap base page | https://github.com/thoth-tech/doubtfire-web/pull/233 |
| Sam Rolfe | Create a list of tasks for CourseMap FE |  |
| Sam Rolfe | Create diagram of coursemap page | https://github.com/thoth-tech/doubtfire-astro/pull/11 |
| Sam Rolfe | Ensure Unit Definition model satisfies all requirements (Phase 2) |  |
| Sam Rolfe | Migration: grade-icon.coffee | https://github.com/thoth-tech/doubtfire-web/pull/231 |
| Sam Rolfe | Add ability to add elective units to the unit pool (phase 2) | https://github.com/thoth-tech/doubtfire-web/pull/236 |
| Sam Rolfe | Create appropriate testing files for the Unit Definition entity (Phase 1) | https://github.com/thoth-tech/doubtfire-api/pull/42 |
| Sam Rolfe | Create dummy data for a specific course for the front end to use (Phase 3) | https://github.com/thoth-tech/doubtfire-api/pull/43 |
| Sam Rolfe | Create services and models for courseflow back end components. | https://github.com/thoth-tech/doubtfire-web/pull/252 |
| Sam Rolfe | Implement the backend requirements for the Unit Definition entity (phase 1) | https://github.com/thoth-tech/doubtfire-api/pull/42 |
| Sam Rolfe | Migrate the existing Unit table to be compatible with Unit Definition (Phase 4) | https://github.com/thoth-tech/doubtfire-api/pull/41 |
| Sam Rolfe | Populate remaining units container with relevant units from course (phase 2) | https://github.com/thoth-tech/doubtfire-web/pull/253 |
| Sam Rolfe | Courseflow Documentation Requirement Analysis | https://github.com/thoth-tech/doubtfire-astro/pull/14 |
| Shen Tian | Add button to Courseflow main component | https://github.com/thoth-tech/doubtfire-web/pull/227 |
| Shen Tian | Created coursemap base page | https://github.com/thoth-tech/doubtfire-web/pull/233 |
| Shen Tian | Create services and models for courseflow back end components. | https://github.com/thoth-tech/doubtfire-web/pull/252 |
| Shen Tian | Migrate analytics.coffee | https://github.com/thoth-tech/doubtfire-web/pull/256 |
| Shen Tian | Migration: timeout.coffee | https://github.com/doubtfire-lms/doubtfire-web/pull/868/commits/6a965ef9927837bd3e9e77d27b035473cd974215<br>https://github.com/thoth-tech/doubtfire-web/pull/230 |
| Shen Tian | Populate remaining units container with relevant units from course (phase 2) | https://github.com/thoth-tech/doubtfire-web/pull/253 |
| Shyama Chandrashekaran Pillai | Document the below API pages in detail within the website - set 5 | https://github.com/thoth-tech/doubtfire-astro/pull/9 |
| Shyama Chandrashekaran Pillai | Add detailed operations for units API (task_definitions -tii_group_attachments ) on Ontrack documentation website | https://github.com/thoth-tech/doubtfire-astro/pull/12 |
| Shyama Chandrashekaran Pillai | Add detailed operations for units API (task_definitions) on Ontrack documentation website | https://github.com/thoth-tech/doubtfire-astro/pull/12 |
| Shyama Chandrashekaran Pillai | Add detailed operations for units API (group set - group ID) on Ontrack documentation website | https://github.com/thoth-tech/doubtfire-astro/pull/10 |
| Shyama Chandrashekaran Pillai | Add detailed operations for units API (group set - group csv) on Ontrack documentation website | https://github.com/thoth-tech/doubtfire-astro/pull/10 |
| Shyama Chandrashekaran Pillai | Add detailed operations for units API (task_definitions - task_assessment_resources ) on Ontrack documentation website | https://github.com/thoth-tech/doubtfire-astro/pull/13 |
| Shyama Chandrashekaran Pillai | Document the operations units API - Tutorial Streams | https://github.com/thoth-tech/doubtfire-astro/pull/10 |
| Shyama Chandrashekaran Pillai | Pull the API docs from last trimester into the new folder structure | https://github.com/thoth-tech/doubtfire-astro/pull/15 |
| Thuy Tien Hoa | migrate file-uploader.coffee | https://github.com/thoth-tech/documentation/pull/535/files<br>https://github.com/thoth-tech/doubtfire-web/pull/246/commits/28a77cd0821ce9b66a43c47741cda35c39132fd2 |
| Thuy Tien Hoa | Migration: Component task-ilo-alignment-modal.coffee |  |
| Thuy Tien Hoa | Migration: grade-icon.coffee | https://github.com/thoth-tech/doubtfire-web/pull/231 |
| Thuy Tien Hoa | Add ability to add elective units to the unit pool (phase 2) | https://github.com/thoth-tech/doubtfire-web/pull/236 |
| Thuy Tien Hoa | Migrate viewer.coffee | https://github.com/thoth-tech/doubtfire-web/pull/251 |


## Roadmap

Provide a list of features and/or deliverables that are planned to be
completed in the project’s future (E.g., next trimester or two
trimesters in the future).

Please also include features and/or deliverables that are in progress
but not yet complete. The state of each incomplete work item should be
briefly described.

This section should pair up perfectly with your Roadmap on Trello. Make
sure both this section and your Trello Roadmap are updated upon handing
over the project.

## Open Issues

List all of the issues and challenges that the team is still facing, and
any progress that has been made so far to address them.

The purpose of this section is to flag things that may interfere with
the future teams’s ability to work on the project, and to give advice as
to how these issues could be fixed in future.

Here are some examples of Open Issues:

- Software compatibility issues that arise when members of the team use
  different version of software.

- An unclear process for reviewing completed tasks on Trello, leading to
  a backlog of work that is sitting somewhere between unfinished and
  finished.

- An essential team member had to leave the team with no notice, and
  there is currently a skill void in their place.

## Lessons Learned

List key lessons learned from the project this Trimester and what you
recommend future teams should do differently. You must also explain why
you believe this to be the case.

In particular, try to think about processes or technology that you would
recommend be changed in the future; things that an uniformed team may
mistake for a good idea at first, but later learn to be ineffective.

For example, maybe your team had challenges communicating their progress
during panel presentations, but towards the end of the Trimester, you
developed an effective method for conveying progress accurately. This
would be a great thing to talk about.

## Product Development Life Cycle

This section should explain how your team undertakes work. It is an
attempt to codify your processes so that they can be understood and
followed by new members.

As a team, you may not have clearly defined your Product Development
Life Cycle, and that’s okay! This is an excellent opportunity to explain
the work methods, processes and habits that your team has been
developing intuitively over the course of the Trimester.

### New Tasks

How are new tasks created?

How does your team form new ideas about work that needs to be done and
turn those ideas into distinct, actionable tasks?

For example, maybe your team meets at the start of each week, reviews
your progress in your current sprint, makes a big long list of
everything to be done, and then converts that list into a series of
cards on Trello. This process would be something you talk about in this
section.

### Definition of Done

How does the team know when a task is done?

What are criteria for a successfully completed task?

This may seem obvious, but it in a software development project having a
definition of done can ensure a certain standard of work that holds all
team members accountable. For example, messy, clunky code that “just
works” is very different to clean, well-commented code that works AND is
easy to understand. Which would you prefer to be your team’s definition
of done?

### Task Review

Who reviews a task once it’s been marked as done?

How does the team ensure that all work is looked over before it’s
contributed to the main repository or working prototype?

If you don’t currently have a system for reviewing tasks, make sure to
flag this for next trimester’s team to work on as soon as they begin.

### Testing

How do you test your product to see if it does what it was originally
planned to do?

If your product isn’t heavily comprised of software, how can you build
in testing to your team’s product development life cycle to ensure that
“stuff works as it should”?

### Branching Strategy

How does your team currently use GitHub repository?

What rules for commits and pull-requests have been put in place so far?

How should new members use GitHub repository in a way that doesn’t
result in all commits being dumped in a messy Master branch?

Again, if your team hasn’t formally discussed a branching strategy, this
a great opportunity to describe what your current system is and how it
could be improved going forward.

For example, if you currently have all members of the team commit
directly to the Master branch, can you recommend any tutorials for the
future team to review that might lead to a cleaner, more organised and
more efficient repository?

## Product Architecture

### UML Diagram

Provide a high-level map of the project showing all of its components
and how they relate to each other.

An example of this is a UML diagram. Don’t feel that you need to follow
any particular UML paradigm, so long as your diagram is informative and
easy to read.

Resources like [Lucidchart](https://www.lucidchart.com/) and
[Draw.io](https://app.diagrams.net/) are incredibly useful for this.

### Tech Stack

List all of the software and hardware utilised in this project. For each
tool, give a short description and explain why it was chosen.

## Source Code

All source code should be found on your team’s GitHub repository, unless
your project has unique constraints that require you to store your code
elsewhere. This includes any resources (e.g., wireframes, designs) that
need to be transferred over to the new team as well.

Please provide all of the necessary instructions to accessing your
source code. This includes URLs of online hosted repositories, links to
any software dependencies, database components, or external libraries.

If your code is hosted on a server external to Deakin, make sure to also
transfer digital copies of your code over to your client and the next
team as a backup.

## Login Credentials

Please provide all credentials (usernames and passwords) for any of the
resources, websites, or platforms being utilised for this project.
Please make sure that none of these credentials share passwords or
usernames with any of your team’s private credentials.

## Other Relevant Information

This section is an invitation to add any additional information that you
think will help to onboard new members. If you choose not to add any
extra sections to this document, this section should be deleted.

Please edit this entire document as you see fit. If you think adding 5
extra sections that aren’t listed here will help to communicate the
nuances of your project to future members, go ahead! We want you to take
full ownership of your handover and this document.

## Appendices

Include all relevant artefacts delivered during the course of the
project. Anything that will paint a clearer picture of your team’s
progress this trimester, the things that informed decisions, and the
evolution of your product.

Please also include a link to your team’s showcase video.

# Project 2: SplashKit

## Project Overview

Give an overview or ‘executive summary’ of the project, including any
necessary high-level information for someone reading about your work for
the first time. The following questions should help guide your thinking.

What is the project about?

What problem is the project solve?

What are the aims of the project?

What are the deliverables?

## User Manual

Give instructions for how someone should use your product or navigate
around your development environment. Include images, diagrams, or
anything that would help a first-time user to use your product
correctly.

Better yet, you could create short instructional videos using software
like [Loom](https://www.loom.com/) and include the video links in this
section. You may find this option is considerably easier than trying to
communicate your instructions through text! (Note: this is just a
suggestion, it’s not mandatory.) Here are some ideas of what to cover:

If your product currently requires a complex set of steps to activate,
include that.

If your product has a hardware component, explain how to activate and
sync the hardware with the software.

If your team has a user experience journey that they’ve mapped out for
when a user navigates your product, run through a demo of that.

## Completed Deliverables

Provide a list of product features and/or deliverables, including a
brief description, that have been completed this trimester. Please
relate these deliverables to their corresponding Trello cards if this is
possible.

Only include features and/or deliverables that are fully complete –
incomplete work is to be listed in section 4. Roadmap.

Make sure to explicitly highlight which features and/or deliverables
where completed this Trimester and which team member(s) were primarily
responsible for their completion.

Also, please indicate where each of the completed deliverables can be
found (E.g., MS Teams, GitHub repository) and make sure to include a URL
link to the resource.

## Roadmap

Provide a list of features and/or deliverables that are planned to be
completed in the project’s future (E.g., next trimester or two
trimesters in the future).

Please also include features and/or deliverables that are in progress
but not yet complete. The state of each incomplete work item should be
briefly described.

This section should pair up perfectly with your Roadmap on Trello. Make
sure both this section and your Trello Roadmap are updated upon handing
over the project.

## Open Issues

List all of the issues and challenges that the team is still facing, and
any progress that has been made so far to address them.

The purpose of this section is to flag things that may interfere with
the future teams’s ability to work on the project, and to give advice as
to how these issues could be fixed in future.

Here are some examples of Open Issues:

- Software compatibility issues that arise when members of the team use
  different version of software.

- An unclear process for reviewing completed tasks on Trello, leading to
  a backlog of work that is sitting somewhere between unfinished and
  finished.

- An essential team member had to leave the team with no notice, and
  there is currently a skill void in their place.

## Lessons Learned

List key lessons learned from the project this Trimester and what you
recommend future teams should do differently. You must also explain why
you believe this to be the case.

In particular, try to think about processes or technology that you would
recommend be changed in the future; things that an uniformed team may
mistake for a good idea at first, but later learn to be ineffective.

For example, maybe your team had challenges communicating their progress
during panel presentations, but towards the end of the Trimester, you
developed an effective method for conveying progress accurately. This
would be a great thing to talk about.

## Product Development Life Cycle

This section should explain how your team undertakes work. It is an
attempt to codify your processes so that they can be understood and
followed by new members.

As a team, you may not have clearly defined your Product Development
Life Cycle, and that’s okay! This is an excellent opportunity to explain
the work methods, processes and habits that your team has been
developing intuitively over the course of the Trimester.

### New Tasks

How are new tasks created?

How does your team form new ideas about work that needs to be done and
turn those ideas into distinct, actionable tasks?

For example, maybe your team meets at the start of each week, reviews
your progress in your current sprint, makes a big long list of
everything to be done, and then converts that list into a series of
cards on Trello. This process would be something you talk about in this
section.

### Definition of Done

How does the team know when a task is done?

What are criteria for a successfully completed task?

This may seem obvious, but it in a software development project having a
definition of done can ensure a certain standard of work that holds all
team members accountable. For example, messy, clunky code that “just
works” is very different to clean, well-commented code that works AND is
easy to understand. Which would you prefer to be your team’s definition
of done?

### Task Review

Who reviews a task once it’s been marked as done?

How does the team ensure that all work is looked over before it’s
contributed to the main repository or working prototype?

If you don’t currently have a system for reviewing tasks, make sure to
flag this for next trimester’s team to work on as soon as they begin.

### Testing

How do you test your product to see if it does what it was originally
planned to do?

If your product isn’t heavily comprised of software, how can you build
in testing to your team’s product development life cycle to ensure that
“stuff works as it should”?

### Branching Strategy

How does your team currently use GitHub repository?

What rules for commits and pull-requests have been put in place so far?

How should new members use GitHub repository in a way that doesn’t
result in all commits being dumped in a messy Master branch?

Again, if your team hasn’t formally discussed a branching strategy, this
a great opportunity to describe what your current system is and how it
could be improved going forward.

For example, if you currently have all members of the team commit
directly to the Master branch, can you recommend any tutorials for the
future team to review that might lead to a cleaner, more organised and
more efficient repository?

## Product Architecture

### UML Diagram

Provide a high-level map of the project showing all of its components
and how they relate to each other.

An example of this is a UML diagram. Don’t feel that you need to follow
any particular UML paradigm, so long as your diagram is informative and
easy to read.

Resources like [Lucidchart](https://www.lucidchart.com/) and
[Draw.io](https://app.diagrams.net/) are incredibly useful for this.

### Tech Stack

List all of the software and hardware utilised in this project. For each
tool, give a short description and explain why it was chosen.

## Source Code

All source code should be found on your team’s GitHub repository, unless
your project has unique constraints that require you to store your code
elsewhere. This includes any resources (e.g., wireframes, designs) that
need to be transferred over to the new team as well.

Please provide all of the necessary instructions to accessing your
source code. This includes URLs of online hosted repositories, links to
any software dependencies, database components, or external libraries.

If your code is hosted on a server external to Deakin, make sure to also
transfer digital copies of your code over to your client and the next
team as a backup.

## Login Credentials

Please provide all credentials (usernames and passwords) for any of the
resources, websites, or platforms being utilised for this project.
Please make sure that none of these credentials share passwords or
usernames with any of your team’s private credentials.

## Other Relevant Information

This section is an invitation to add any additional information that you
think will help to onboard new members. If you choose not to add any
extra sections to this document, this section should be deleted.

Please edit this entire document as you see fit. If you think adding 5
extra sections that aren’t listed here will help to communicate the
nuances of your project to future members, go ahead! We want you to take
full ownership of your handover and this document.

## Appendices

Include all relevant artefacts delivered during the course of the
project. Anything that will paint a clearer picture of your team’s
progress this trimester, the things that informed decisions, and the
evolution of your product.

Please also include a link to your team’s showcase video.
