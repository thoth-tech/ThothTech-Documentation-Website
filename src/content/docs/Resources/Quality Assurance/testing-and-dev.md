---
title: Testing and Development
sidebar:
  label: Testing and Development
---

### Contents

- [Feature Development: Where Do I Start?](#feature-development-where-do-i-start)
- [Epics and User Stories](#epics-and-user-stories)
  - [Epics](#epics)
  - [User Stories](#user-stories)
- [Software Requirements Specification Document](#software-requirements-specification-document)
- [Testing and Development](#testing-and-development)
  - [Testing Templates](#testing-templates)
  - [Making a Test Plan](#making-a-test-plan)
  - [Test Strategy](#test-strategy)
  - [Testing Tools](#testing-tools)
- [Test Driven Development](#test-driven-development)
  - [Determining Appropriate Tests](#determining-appropriate-tests)
  - [Writing a Failing Test Case](#writing-a-failing-test-case)
  - [Writing Code to Pass Your Test](#writing-code-to-pass-your-test)
  - [Refactoring Code](#refactoring-code)

You might be wondering, before jumping into coding and planning tests for a new feature, _where do
you begin_?

## Feature Development: Where Do I Start?

- Clearly articulate the problem and the need for changes.
- Create [epics](#epics) for each feature planned for development.
- Identify [user stories](#user-stories) associated with the feature.
- Consider how best to mitigate risks or explore alternate solutions.
- Determine functional and non-functional requirements.
- Define acceptance criteria:
  - What are the metrics for success?
  - What's in or out of scope?
- Document your purpose and requirements within your
  [Software Requirements Specification](#software-requirements-specification-document) document.
- Plan your testing by defining your Test Strategy and Test Plan:
  - Using your specifications, outline the expected behavior for different use case scenarios; these
    will be tested in your [Test Plan](#making-a-test-plan).
  - Determine _how_ you will test your scenarios and describe this in your
    [Test Strategy](#test-strategy).

## Epics and User Stories

### Epics

Epics describe a large body of work that will be broken down into smaller tasks, called user
stories. They provide a higher-level view of user requests or needs, helping with larger aims,
value, organization, and hierarchy. Epics will be divided into smaller, more manageable tasks ("user
stories") for team members.

### User Stories

User Stories are user-centric statements often formatted as:

**"As a [persona], I [want to], [so that]"**

This describes a _persona + need + purpose_.

- **[persona]** – Describes the person for whom we are building this feature. It is more than just a
  role or job title; it includes understanding who they are, how they work, think, and feel.
- **[wants to]** – Describes the user's _intent_ (what they want to achieve) rather than the feature
  itself. Avoid detailing implementation specifics here.
- **[so that]** – Explains the motivation behind the user's desire and the overall benefit from achieving
  it.

User stories use non-technical language to provide context and an understanding of what needs to be
built and why. They focus on user needs, are discrete, and manageable for team members in an Agile
environment.

Benefits include:

- Keeps focus on the user, solving real-world problems in user-centric ways.
- Enables collaboration by defining end goals and facilitating teamwork.
- Drives creative solutions by focusing on end-user needs rather than implementation details.

In Agile methodology, during a sprint or iteration, the team selects which user stories to address,
discusses requirements, and updates stories with agreed requirements. Tasks and subtasks are tracked
and assigned using the relevant project management tool, with future user stories remaining in the
backlog.

When defining user stories, consider:

- Definition of "done": How will we know when a task/story is complete?
- Tasks or subtasks: What steps need to be completed and by whom?
- User personas: Who is the user? Are there multiple users (consider creating user stories for
  each)?
- Ordered steps: For larger processes, write a story for _each step_.
- Time: Consider how long a story might take; if it's more than one sprint or appears complex, break
  it down into smaller stories or an epic.

Further background on user stories can be found at
[Atlassian’s User Stories Guide](https://www.atlassian.com/agile/project-management/user-stories).

## Software Requirements Specification Document

A Software Requirements Specification (SRS) document outlines expectations for your product, its
performance, and required functionality. An SRS includes the following components:

---

- **Introduction**:
  - **Product Purpose**: Define the purpose of the SRS.
  - **Intended Audience**: Who are the expected readers (testers, developers, leadership team) of
    the SRS document?
  - **Intended Use**: How are these readers expected to use the SRS document?
  - **Scope**: What are the goals and objectives for this product? What should the product do (and
    what should it _not_ do)?
  - **Definitions and Acronyms**: Describe relevant terms, definitions, and acronyms needed to
    understand the document.

---

- **Overall Description**: Describes your product and what you are going to build. Indicate whether
  it is a new product or an enhancement/add-on to an existing product, who it is for, and its value.
  This section explains the general background and factors affecting requirements (rather than the
  specific requirements themselves).
  - **User Needs**: Who will use your product feature and how? What needs do your end users have
    that you need to address?
  - **Assumptions and Dependencies**: List any assumptions made (what are we assuming to be true) or
    dependencies for your product/feature.

---

- **System Features and Requirements**:
  - **Functional Requirements**: Essential requirements that provide functionality, often described
    with "The system shall..." statements.
  - **External Interface Requirements**: Specific requirements for how your product interfaces with
    other components, including user, hardware, software, and communications interfaces.
  - **System Features**: Types of functional requirements needed for system operation.
  - **Nonfunctional Requirements**: Requirements related to performance, safety, security, and
    quality.

---

Further references include Perforce's
[How to Write an SRS Document](https://www.perforce.com/blog/alm/how-write-software-requirements-specification-srs-document)
and IEEE’s
[Recommended Practice for Software Requirements Specifications](https://drive.google.com/file/d/1G1vQq-RjnbEmTTzItIUarWuMnbqZchlx/view).

_After completing the SRS, obtain approval from key stakeholders. Ensure everyone reviews the latest
version of the document._

## Testing and Development

Testing should be integrated into the software development process. Thoth-Tech advocates for a
[Test Driven Development](#test-driven-development) (TDD) approach. All coding projects should
consider and document their [Test Plan](#making-a-test-plan) and [Test Strategy](#test-strategy) as
project deliverables.

### Testing Templates

- [Test Plan Template](/resources/quality-assurance/templates/test-plan-template)
- [Test Strategy Template](/resources/quality-assurance/templates/test-strategy-template)

### Making a Test Plan

For each product/feature, using the specifications, outline the expected behavior for different use
case scenarios. A collaborative approach ensures defining the right problem and solution. These
scenarios will be detailed in a Test Plan, recording each scenario to be tested, the expected
outcome, and the actual outcome of tests. A simple Markdown
[Test Plan Template](/resources/quality-assurance/templates/test-plan-template) is available.

### Test Strategy

Consider _how_ you will test your scenarios, including what [testing tools](#testing-tools) you will
use, platforms for tests, release processes, and deliverables. This should be part of your Test
Strategy – a document to be produced as part of the QA process. Other documents may include a Test
Plan and Bug Reports.

While manual testing might be conducted initially, transitioning to automated tests enhances
efficiency, code check ease, and is preferred for integrating test automation into the deployment
pipeline. Testing automation should be part of your strategy.

### Testing Tools

Various tools may be used for testing tasks, depending on the technology stack. Common tools
include:

- **Testing Frameworks**: Tools for automated testing, such as JUnit, TestNG, Mocha, Jasmine, etc.
- **Test Automation Tools**: Tools like Selenium, Cypress, or Playwright for web application
  testing.
- **Continuous Integration Tools**: Jenkins, GitHub Actions, Travis CI for integrating automated
  tests into the deployment pipeline.
- **Bug Tracking Tools**: JIRA, Bugzilla, or GitHub Issues for tracking and managing defects.

## Test Driven Development

### Determining Appropriate Tests

Before coding, identify what you are trying to achieve and how you will test it. Determine the
requirements you need to meet and plan your tests accordingly.

### Writing a Failing Test Case

Create a test case that will initially fail. This test case should cover the specific functionality
you are adding or changing and reflect the expected behavior that the code needs to exhibit.

### Writing Code to Pass Your Test

Implement the code necessary to pass your failing test case. Ensure the implementation focuses
solely on making the test pass, avoiding unnecessary complexity or features.

### Refactoring Code

After your test case passes, refactor your code to improve its structure and readability while
ensuring it still passes all tests. This involves cleaning up the code, removing redundancy, and
enhancing efficiency.
