---
title: "OnTrack Planner Board"
sidebar:
  label: Planner Board
  order: 3
---

After reviewing the components in the doubtfire-web repository, the next step is to access the
OnTrack Planner Board to begin working on ongoing tickets. The planner board is used to manage and
track development tasks, including the migration process, feature additions, bug fixes, and other
project-related work.

## Steps to Access and Work on Tickets

### 1. Access the Planner Board

- Open the OnTrack Planner Board in your web browser.
- The board is typically hosted on a project management tool like Jira, Trello, or GitHub Projects.
  The link to the board should be provided in the project documentation or by the team.

<!-- TODO: Fix Alt Text below -->

![alt text](/image-10.png)

### 2. Navigate to the "Ongoing Tickets" Section

- On the planner board, locate the "Ongoing" or "In Progress" column, where all active tickets are
  listed.

### 3. Review Ticket Details

- Select a ticket assigned to you or one that matches your skill set.
- Each ticket will have the following details:
  - **Title**: Describes the task (e.g., "Migrate alignment-bar-chart component to TypeScript").
  - **Description**: Provides context, goals, and steps for the task.
  - **Acceptance Criteria**: Lists what needs to be completed for the ticket to be considered done.
  - **Priority**: Indicates the urgency (e.g., High, Medium, Low).
  - **Status**: Current progress (e.g., To Do, In Progress, Code Review).

### 4. Assign the Ticket

- If a ticket isn’t already assigned, assign it to yourself or notify the team lead.

### 5. Start Working on the Ticket

- Clone or pull the latest version of the repository associated with the ticket (e.g., doubtfire-web
  or doubtfire-api).
- Create a new branch for the ticket using a standard naming convention (e.g.,
  feature/migrate-alignment-bar-chart).
- Begin working on the task following the migration or development guidelines.

<!-- TODO: Fix Alt Text below -->

![alt text](/image-11.png)

## Best Practices for Ticket Workflow

- **Document Your Progress**: Add notes or comments to the ticket detailing your approach,
  challenges, and updates.
- **Collaborate with the Team**: If you encounter any blockers, reach out to your team via Slack,
  Teams, or other communication tools.
- **Follow Git Workflow**: Ensure you follow proper Git practices, such as rebasing, resolving
  conflicts, and submitting pull requests (PRs) for code review.
- **Submit for Review**: Once the task is complete, push your branch and create a pull request
  linked to the ticket. Notify the reviewers for feedback.

<!-- TODO: Fix Alt Text below -->

![alt text](/image-12.png)

<!-- TODO: Fix Alt Text below -->

![alt text](/image-13.png)

## To start work on a new feature

1. Make your changes in locally
2. Create a draft Pull Request and document the change you are working on. Doing this early will
   make sure that you get feedback on your work quickly.
3. Complete your work, pushing to your fork's feature branch. This will update your existing PR (no
   need to create new PRs)
4. Update the status of your PR removing the draft status, and flag someone in the Core team to
   review and incorporate your work.
5. Address any changes required. Pushing new commits to your branch to update the PR as needed.
6. Once your PR is merged you can delete your feature branch and repeat this process for new
   features...
