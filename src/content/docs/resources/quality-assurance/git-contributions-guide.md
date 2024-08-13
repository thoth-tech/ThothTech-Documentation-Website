---
title: Git Contribution Guide
sidebar:
  label: Git Contribution Guide
---

## Contents

- [Contributing to Repositories: How To](#contributing-to-repositories-how-to)
- [Branching Guidelines](#branching-guidelines)
- [Commit Guidelines](#commit-guidelines)
- [Code Review Guidelines](#code-review-guidelines)
- [Git Workflow Summary](#git-workflow-summary)

## Contributing to Repositories: How To

Repositories are where existing Thoth Tech code is stored, and where new code contributions, once
tested and approved, will ultimately be merged.

To begin working on your project, follow these steps:

### If you have yet to cloned the repository to your local machine

- **Clone the Repository**: Clone your project's relevant Thoth Tech repository to your local
  machine:
  ```bash
  git clone <repository-url>
  ```
- **Navigate to the created project folder**. You will be on the default branch (main/master).

### If you have already cloned the repository to your local machine

- **Update Your Local Copy**: Ensure you are on the main/master branch and pull the latest changes
  from the origin:

  ```bash
  git checkout main
  git pull origin main
  ```

_Then:_

- **Create a New Branch:** Create a new branch for your changes as per the
  [Branching Guidelines](#branching-guidelines):

  ```bash
  git checkout -b <branch-name>
  ```

- **Make Your Changes:** Implement your code changes on the newly created branch.
- **Commit Your Changes:** Commit your changes using the format provided in the
  [Commit Guidelines](#commit-guidelines).

  ```bash
  git add .
  git commit -m "Descriptive commit message"
  ```

- **Push Your Branch:** Push your branch to the origin.

  ```bash
  git push origin <branch-name>
  ```

- **Create a Draft Pull Request:** Create a [Draft Pull Request](#draft-pull-request) to merge your
  branch into the main Thoth Tech branch for your repository. Add
  [Required Approvals](#required-approvals) (note: it will be blocked from merging while in draft
  form). Comment on the progress and any feedback sought.

- **Continue Development:** Keep making changes on your local branch, committing and pushing until
  you are satisfied that the code meets all tests, acceptance criteria, and is ready for merging.

- **Publish Your Pull Request:** Change the status of your Pull Request to "Ready for Review" to
  finalise it.

For an example sequence of git commands used in this process, refer to the
[Git Workflow Summary](#git-workflow-summary).

## Branching Guidelines

No commits should be made directly to the default branch (usually main/master/develop). Instead,
branches should be created off the default branch to encompass any changes.

Branch names must be descriptive and include a reference to the task or subtask number the work
relates to, following this format:

| Branch Naming Format                                   | Use                                            |
| ------------------------------------------------------ | ---------------------------------------------- |
| `feature/<project_task_or_subtask_number_description>` | New product feature/function                   |
| `fix/<project_task_or_subtask_number_description>`     | For a fix                                      |
| `doc/<project_task_or_subtask_number_description>`     | Non-feature-related document additions/changes |

### Example

For the Voice Verification project (with tasks reflected in Planner task cards):

**Product: Voice Verification**

_Tasks:_

1. _Voice Registration_

   1.1. _Receive Voice Input_

   1.2. _Store Voice Input_

2. _Voice Matching_

3. _task..._

   3.1 _subtask..._

A programmer starting work on the Voice Verification component subtask 1.2 should use a branch
named: `feature/voice-verification-1.2-store-voice-input`.

This branch can be created and checked out using the git command:

```bash
git checkout -b feature/voice-verification-1.2-store-voice-input
```

## Commit Guidelines

Thoth Tech follows the Git commit message format required by the Doubtfire LMS (see
[doubtfire-lms's CONTRIBUTING.md](https://github.com/doubtfire-lms/doubtfire-deploy/blob/development/CONTRIBUTING.md#commit-message-format)),
which this section mirrors. This format makes for an easier-to-read and more useful commit history.

### Message Format

Each commit message consists of a header, a body, and a footer.

```plaintext
<header>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

- The **header** is mandatory and must conform to the Commit Message Header format.
- The **body** is recommended for all commits. When present, it must be at least 20 characters long
  and conform to the Commit Message Body format.
- The **footer** is optional. The Commit Message Footer format describes the purpose and structure
  of the footer.

Each line of the commit message should be 100 characters or fewer.

```plaintext
Commit Message Header
<type>(<scope>): <short summary>
  │       │             │
  │       │             └─⫸ Summary in present tense. Not capitalised. No period at the end.
  │       │
  │       └─⫸ Commit Scope (optional): animations|common|style|forms|http|router|service-worker|
  │                                     upgrade|changelog|dev-infra|docs-infra|migrations|
  │
  └─⫸ Commit Type: build|ci|docs|feat|fix|perf|refactor|test
```

## Commit Message Guidelines

The `<type>` and `<summary>` fields are mandatory, and the (`<scope>`) field is optional.

The `<type>` must be one of the following:

- **build** : Changes that affect the build system or external dependencies (example scopes: gulp,
  broccoli, npm)
- **ci** : Changes to our CI configuration files and scripts (example scopes: Circle, BrowserStack,
  SauceLabs)
- **docs** : Documentation-only changes
- **feat** : A new feature
- **fix** : A bug fix
- **perf** : A code change that improves performance
- **refactor** : A code change that neither fixes a bug nor adds a feature
- **test** : Adding missing tests or correcting existing tests

Doubtfire-LMS recommends Chris Beam's post on
[How to Write Good Commit Messages](http://chris.beams.io/posts/git-commit/) to improve your commit
message writing.

### Additional Guidelines

- **Use the imperative mood in your commit message subject line**:

  - "Fix a bug" and **not** "Fixed a bug"
  - "Change the behavior of Y" and **not** "Changed the behavior of Y"
  - "Add new API methods" and **not** "Added new API methods"

- **Keep the subject line (top line) concise**; keep it **within 50 characters**.
- **Use the body** (lines after the top line) to explain why and what and _not_ how; keep it
  **within 72 characters**.

### But how can I write new lines if I'm using `git commit -m "Message"`?

Don't use the `-m` switch. Use a text editor to write your commit message instead.

If you are using the command line to write your commits, it is useful to set your git editor to make
writing a commit body easier. You can use the following command to set your editor to Visual Studio
Code, `nano`, `emacs`, `vim`, `atom`:

```shell
git config --global core.editor "code --wait"  # For Visual Studio Code
git config --global core.editor "nano"         # For nano
git config --global core.editor "emacs"        # For emacs
git config --global core.editor "vim"          # For vim
git config --global core.editor "atom --wait"  # For atom
```

## Code Review Guidelines

You are strongly encouraged to get your code reviewed by a reviewer as soon as there is any code to
review. This provides a second opinion on the chosen solution and implementation, and adds an extra
pair of eyes for spotting bugs, logic problems, or uncovered edge cases.

### Draft Pull Request

Draft Pull Requests (PRs) allow for early feedback on work in progress. The developer creating the
PR should:

- Indicate their progress in the description.
- Specify any particular aspects they are seeking feedback on.
- Update the description and change the status to "ready to review" when the PR is complete.

**Example of a draft Pull Request description**:

**Progress**

- Implemented feature X.
- Added initial tests.

**Feedback Requested**

- Review the implementation for potential performance issues.
- Suggestions on code structure and readability are welcome.

Pull requests are created from the GitHub website. For more details, see GitHub's
[Introducing Draft Pull Requests](https://github.blog/2019-02-14-introducing-draft-pull-requests/)
blog.

### Required Approvals

To ensure high code quality and maintain standards, pull requests require **a minimum of two
approvals** before merging. This process helps catch issues early and leverages diverse expertise.

**Approval Process**:

- **Initial Review**: Typically, a reviewer from your team handles the first review. This person
  should be familiar with the codebase and project requirements.
- **Domain Experts**: If needed, a domain expert from a different team may provide the second
  review. This is especially useful for specialised areas like performance optimisation or security.

**Considerations**:

- **Team Size**: The number of required approvals might be adjusted based on your team’s size and
  dynamics. For larger teams, additional reviews might be necessary.
- **Approval Criteria**: Reviews should address:
  - Code functionality and correctness
  - Adherence to coding standards and best practices
  - Overall quality and maintainability

**Configuring Approvals**: Configure the required approvals through the
[branch protection rule](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule).
All leads should have the ability to set this up when creating a new GitHub repository. For detailed
instructions, refer to this
[guide](https://github.com/thoth-tech/handbook/blob/main/docs/learning/useful-resources/setup-new-github-repository.md).

**Example Scenario**: If a critical bug fix is being merged, you might require more approvals to
ensure that it’s thoroughly vetted. Conversely, minor updates might only need the minimum number of
approvals.

By following these guidelines, we maintain code quality and foster collaboration across teams.

## Git Workflow Summary

### Start a New Piece of Work

1. **Sync Repository and Set Up Your Branch**:

   - Ensure your local repository is up-to-date by pulling the latest changes from the remote
     repository.
   - Create a new branch for your feature or task. Follow the
     [branching guidelines](#branching-guidelines) for naming conventions. For example, if working
     on a feature for voice verification, your branch might be named
     `feature/voice-verification-1.2-store-voice-input`.

   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/voice-verification-1.2-store-voice-input
   ```

##### Explanation

- `git checkout main`: Switch to the main branch.
- `git pull origin main`: Update your local main branch with the latest changes from the remote
  repository.
- `git checkout -b <branch-name>`: Create and switch to a new branch for your work.

2. **Make Changes, Commit, and Push**:

   - **Make Changes**: Implement your feature or fix in the new branch. Ensure your changes are
     tested and meet the project requirements.

   - **Commit Your Changes**: Add and commit your changes using the format specified in the
     [commit guidelines](#commit-guidelines). This helps maintain a clear and organised commit
     history.

     ```bash
     git add .
     git commit -m "feat(<scope>): <short summary>"
     ```

##### Explanation

- `git add .`: Stages all modified files for commit. Make sure to review which files are staged
  before committing.
- `git commit -m "feat(<scope>): <short summary>"`: Commits your changes with a message that briefly
  describes the update. The `<scope>` is optional and indicates the part of the project affected.

  - **Push to Origin**: Push your branch to the remote repository. This makes your changes available
    for review and integration.

    ```bash
    git push -u origin feature/voice-verification-1.2-store-voice-input
    ```

##### Explanation

- `git push -u origin <branch-name>`: Pushes your branch to the remote repository and sets the
  upstream branch for future pushes. Replace `<branch-name>` with the name of your branch, such as
  `feature/voice-verification-1.2-store-voice-input`.

3. **Submit a Draft Pull Request**:
   - Remember to submit a [draft pull request](#draft-pull-request) via GitHub to allow for code
     review. This provides an opportunity for others to review your changes and provide feedback
     before they are merged into the main branch.

##### Explanation

- **Draft Pull Request**: Allows for early feedback on your work before it's considered final. It's
  useful for discussing implementation details and catching potential issues early.
- **Mark as Ready to Review**: Once you are satisfied with the changes and have addressed any
  feedback, update the pull request status to "ready for review" to initiate the final review and
  merging process.

### Continue a Piece of Work

1. **Switch to the Existing Branch**: If the branch already exists in the remote repository, switch
   to it using the following command:

   ```bash
   git checkout feature/voice-verification-1.2-store-voice-input
   ```

##### Explanation

- **`git checkout <branch-name>`**: This command switches your working directory to the specified
  branch. Make sure to replace `<branch-name>` with the name of your branch.

- If the branch does not exist in your local repository but does exist remotely, you can create a
  local copy with:

  ```bash
  git checkout -b feature/voice-verification-1.2-store-voice-input origin/feature/voice-verification-1.2-store-voice-input
  ```

2. **Pull in Any New Code from the Default Branch**: Update your local branch with the latest
   changes from the default branch (main) using the following command:

   ```bash
   git pull origin main
   ```

##### Explanation

- **`git pull origin main`**: This command fetches the latest changes from the main branch of the
  remote repository (origin) and merges them into your current branch. This ensures that your branch
  includes any updates that may have been made to the main branch since you last synchronised with
  it.

3. **Resolve Any Merge Conflicts**:

   If there are merge conflicts between your branch and the `main` branch, Git will notify you.
   Follow these steps to resolve them:

   - **Identify Conflicts**: Conflicted files will be marked with conflict markers (`<<<<<<`,
     `======`, `>>>>>>`) within the files.
   - **Open the Conflicted Files**: Use your code editor to open each conflicted file. Review the
     changes and decide how to integrate them.

   - **Edit the Files**: Manually edit the conflicted sections to resolve the conflicts. Remove the
     conflict markers and ensure the file contents are as you want them.

   - **Mark as Resolved**: After resolving conflicts, mark the files as resolved:

     ```bash
     git add <file-name>
     ```

   - **Commit the Merge**: Commit the resolved merge:

     ```bash
     git commit -m "Resolve merge conflicts"
     ```

##### Explanation

- Resolving merge conflicts involves manually addressing sections of code where changes from
  different branches overlap. Conflicted areas are marked by Git, and you must decide how to
  integrate the changes. After resolving the conflicts, you need to add and commit the changes to
  finalise the merge process.

4. **Continue to Step 2 in [Start a New Piece of Work](#start-a-new-piece-of-work) Flow**:

   After resolving any merge conflicts, proceed with the next steps as outlined in
   [Start a New Piece of Work](#start-a-new-piece-of-work). This typically involves making
   additional changes, committing them, and pushing to the remote repository.

##### Explanation

By following the workflow outlined in [Start a New Piece of Work](#start-a-new-piece-of-work), you
ensure that your process remains consistent with the initial setup. This helps maintain uniformity
in how work is handled and reviewed, ensuring all steps are followed correctly.

### Collaborate on an Existing Branch

Ideally, developers should avoid working on the same code concurrently, as this can create merge
conflicts and reduce efficiency. If possible, break down tasks into smaller, independent pieces to
allow developers to work separately. However, if you must collaborate on a feature branch:

1. **Pull Changes from the Remote Branch**:

   Before starting your work, ensure you have the latest updates from the remote branch to avoid
   conflicts and work with the most recent changes.

   ```bash
   git pull origin feature/voice-verification-1.2-store-voice-input
   ```

##### Explanation

**'git pull origin _branch-name_'**: This command fetches and integrates changes from the specified
branch in the remote repository into your current local branch. Replace _`branch-name`_ with the
name of your branch. By pulling the latest changes, you synchronise your local branch with the
remote repository, reducing the likelihood of conflicts when you push your own changes.

2. **Resolve Any Merge Conflicts**:

   If there are merge conflicts between your branch and the `main` branch, Git will notify you.
   Follow these steps to resolve them:

   - **Identify Conflicts**: Conflicted files will be marked with conflict markers (`<<<<<<`,
     `======`, `>>>>>>`) within the files.
   - **Open the Conflicted Files**: Use your code editor to open each conflicted file. Review the
     changes and decide how to integrate them.

   - **Edit the Files**: Manually edit the conflicted sections to resolve the conflicts. Remove the
     conflict markers and ensure the file contents are as you want them.

   - **Mark as Resolved**: After resolving conflicts, mark the files as resolved:

     ```bash
     git add <file-name>
     ```

   - **Commit the Merge**: Commit the resolved merge:

     ```bash
     git commit -m "Resolve merge conflicts"
     ```

3. **Continue to Step 2 in [Start a New Piece of Work](#start-a-new-piece-of-work) Flow**:

   After resolving any merge conflicts, proceed with the next steps as outlined in
   [Start a New Piece of Work](#start-a-new-piece-of-work). This typically involves making
   additional changes, committing them, and pushing to the remote repository.

##### Explanation

By following the workflow outlined in [Start a New Piece of Work](#start-a-new-piece-of-work), you
ensure that your process remains consistent with the initial setup. T

**Avoid using `force-push` and `rebase` on shared branches.**

- **Force-push (`git push --force`)**: This can overwrite commits in the remote branch, which may
  undo other contributors' work and create difficult-to-resolve merge conflicts.

- **Rebase (`git rebase`)**: While rebase is useful for maintaining a clean commit history, using it
  on shared branches can rewrite commit history, leading to conflicts and confusion for other
  collaborators.

To maintain a smooth workflow, use `merge` to integrate changes from the remote branch instead of
`rebase`, and avoid `force-push` to preserve the integrity of the shared branch history.
