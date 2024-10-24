---
title: How to Create a Pull Request
description: This is a step-by-step guide on how to create a pull request for SplashKit tutorials.
sidebar:
  label: Pull Request Guide
  order: 3
---

## How to Create a Pull Request

Follow these steps to create a pull request for the SplashKit tutorials repository.

### 1. Check for Upstream Branches

First, check if the upstream branches are already added to your local repository.

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

## Creating a Pull Request

To create a pull request, there are a few options available. You can use the GitHub website or the
[GitHub Pull Requests](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github)
extension in vscode.

### Using GitHub Website

#### 1. Open GitHub to Review the Pull Request

Open GitHub and navigate to the repository where you want to create a pull request. Click on the
"Pull requests" tab and then click on the "New pull request" button.

![pull request](./images/pull-request-fig1.png)

#### 2. Change to the Correct Repository

To ensure your pull request is directed to the correct repository, change the settings at the top of
the page.

- **Base Repository**: Set this to `thoth-tech/splashkit.io-starlight`.
- **Base Branch**: Set this to `main`.

![pull request](./images/pull-request-fig2.png)

![pull request](./images/pull-request-fig3.png)

#### 3. Add Pull Request Template

Use the pull request template to provide detailed information about your request. Make sure to fill
out all necessary fields and complete any required checks.

![pull request](./images/pull-request-fig4.png)

#### 4. Submit Your Pull Request

After filling out the template and completing all required checks, submit your pull request for
review.

### Using GitHub Pull Requests Extension in vscode

The steps here remain mostly the same as the prior steps, but you can do it all within vscode.
Head to the extension within the sidebar and click on the `Create Pull Request` button. This will
give you the option to select the branch you want to create the pull request from and the branch
you want to merge into. Follow the same steps as above to fill out the template and submit the pull
request.

![pull request](./images/prinvscode.gif)

### Next Steps

Once the pull request is submitted, move the associated Planner card to the "First Peer Review" column
and share the pull request and card in the group chat. well done! Now, keep an eye out for feedback
from your peer reviewer.

- [Pull Request Template](/products/splashkit/splashkit-website/onboarding/04-pull-request-template):
  The template for creating a pull request for SplashKit tutorials.
- [Peer Review Guide](/products/splashkit/splashkit-website/onboarding/05-peer-review): The guide
  on how to do a peer review within the SplashKit tutorials team.
