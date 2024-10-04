---
title: A Guide to Doing Peer Reviews
description: A guide on how to do a peer review within the SplashKit tutorials team.
sidebar:
  label: Peer Review Guide
  order: 3
---

This guide will help you through the process of performing a peer review for SplashKit tutorials.

## How to Perform a Peer Review

Follow these steps to review a pull request (PR) in the SplashKit tutorials repository.

### 1. Check for Upstream Branches

First, verify if the upstream branches are already added to your local repository.

```shell
git remote -v
```

### 2. Add Upstream Branches (if not present)

If the upstream branches are not added, you can add them using the following command. Replace
`<repo-name>` with the actual repository name.

```shell
git remote add upstream https://github.com/thoth-tech/<repo-name>.git
```

#### Example with `splashkit.io-starlight` Repository

```shell
git remote add upstream https://github.com/thoth-tech/splashkit.io-starlight.git
```

### 3. Verify Upstream Branches

Verify that the upstream branches have been added successfully.

```shell
git remote -v
```

### 4. Pull the PR into a New Branch

To review a pull request, you need to fetch it into a new branch. Check the ID/number of the PR you
want to review. Use the following command to fetch the PR, replacing `ID` with the PR number and
`PR-branch-name` with a name you want to use for this review.

```shell
git fetch upstream pull/ID/head:PR-branch-name
```

#### Example: If Testing PR#7 that Adds "xyz" Feature

```shell
git fetch upstream pull/7/head:test-feature-xyz
```

### 5. Checkout the New Branch

Switch to the new PR testing branch.

```shell
git checkout PR-branch-name
```

### 6. Review the Code

Now that you have the PR branch checked out, you can review the code. Look for the following
aspects:

- **Code Quality**: Ensure the code follows the project's coding standards and guidelines.
- **Functionality**: Verify that the new feature or bug fix works as intended.
- **Testing**: Check if there are adequate tests and if they pass successfully.
- **Documentation**: Ensure that any new features or changes are well-documented.

#### Refer back to the checks in the pull request template as also shown below to ensure you have covered all the necessary aspects.

```markdown
## Type of change

- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as
      expected)
- [ ] Documentation (update or new)

## How Has This Been Tested?

Please describe the tests that you ran to verify your changes. Provide instructions so we can
reproduce. Please also list any relevant details for your test configuration.

- [ ] Tested in latest Chrome
- [ ] Tested in latest Firefox
- [ ] npm run build
- [ ] npm run preview

## Checklist

### If involving code

- [ ] My code follows the style guidelines of this project
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings

### If modified config files

- [ ] I have checked the following files for changes:
  - [ ] package.json
  - [ ] astro.config.mjs
  - [ ] netlify.toml
  - [ ] docker-compose.yml
  - [ ] custom.css

## Folders and Files Added/Modified

Please list the folders and files added/modified with this pull request.

- Added:
  - [ ] folder/folder
  - [ ] folder/folder
- Modified:
  - [ ] folder/file
  - [ ] folder/file
```

### 7. Test the Changes

Run the project locally to test the changes introduced by the PR. Make sure everything works as
expected and there are no new bugs introduced.

### 8. Provide Feedback

After reviewing and testing, provide constructive feedback on the PR. You can add comments directly
on the PR in GitHub. Mention any required changes or improvements.

### 9. Approve or Request Changes

Based on your review, either approve the PR or request changes. If everything looks good and works
as expected, you can approve the PR. If there are issues, request changes and provide detailed
feedback.
