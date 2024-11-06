---
title: "splashkit.io GitHub Guide"
sidebar:
  label: "2. splashkit.io GitHub Guide"
  order: 2
draft: true
---

## Set up a Working Environment for SplashKit

Here's a step-by-step guide on how to set up a working environment for SplashKit with GitHub, VS
Code and NodeJS.

### 1. Install GIT

Git is essential for version control, allowing you to clone repositories, commit changes, and
collaborate. Before you start, ensure you have Git installed on your system.

- Windows: Download Git from [here](https://git-scm.com/download/win) and run the installer `.exe`
  file.
- macOS: Git should already be installed, but you can install it with [homebrew](https://brew.sh/)
  using the following command in your terminal:

  ```shell
  brew install git
  ```

- Linux: Install using the package manager. For example, on Ubuntu or Debian, run the following
  command:

  ```shell
  sudo apt-get install git
  ```

After installation, verify the installation with:

```shell
git --version
```

### 2. Download and Install VS Code

- Download VS Code: Visit the official
  [VS Code download page](https://code.visualstudio.com/download) and select the appropriate
  installer for your operating system (Windows, macOS, or Linux).

- Install VS Code:

  - Windows: Run the downloaded `.exe` file and follow the installation wizard.
  - macOS: Open the `.dmg` file and drag the Visual Studio Code icon to the Applications folder.
  - Linux: Install using the appropriate package manager or by downloading the `.deb` or `.rpm`
    package from the website.

- Launch VS Code: Once installed, launch Visual Studio Code.

### 3. Download and Install Node.js

- Download Node.js: Go to the official
  [Node.js website](https://nodejs.org/en/download/package-manager) and download the LTS version for
  your operating system.
- Install Node.js:

  - Windows: Run the downloaded `.msi` file and follow the installation wizard.
  - macOS: Open the `.pkg` file and follow the instructions.
  - Linux: You can use a package manager or install it via NodeSource.

- Verify Installation: Open a terminal (or command prompt) and check if Node.js is installed
  correctly by running the following command:

  ```shell
  node -v
  ```

  This should return the version number of Node.js.

  Also, verify the installation of npm (Node Package Manager) by running the following command:

  ```shell
  npm -v
  ```

  This should return the version of npm installed.

### 4. Fork a GitHub Repository

- Log in to GitHub: Go to [GitHub](https://github.com/) and log in with your details.

- Find the Repository:

  Navigate to the
  [splashkit.io-starlight repository](https://github.com/thoth-tech/splashkit.io-starlight).

- Fork the Repo: Click the "Fork" button at the top right of the repository page and create a new
  fork of the repository.

This will create a copy of the repository under your GitHub account.

### 5. Clone the Forked Repository

- Copy the URL: Go to your forked repository, click on the green "Code" button, and copy the
  repository URL (`https://github.com/thoth-tech/splashkit.io-starlight.git`).

- Launch VS Code.

- Clone the Repository: In the terminal, run the following command and Replace `<repository-url>`
  with the URL you copied earlier:

  ```shell
  git clone <repository-url>
  ```

Alternatively, you can select clone repository option from the start menu of VS Code. This will
clone the repository to your local machine.

### 6. Install Extensions for VS Code

- Node.js Extension: Install the Node.js extension in VS Code for better integration:

  - Open VS Code and go to the Extensions sidebar.
  - Search for "Node.js Extension Pack" and install it.

- GitHub Extension: This allows you to interact with GitHub directly from VS Code.:

  - In the Extensions sidebar, search for "GitHub Pull Requests and Issues" and install it.

### 7. Install Dependencies

- Once the project is cloned, navigate to the Project Directory: In the terminal, change into the
  cloned project directory:

  ```shell
  cd <project-directory>
  ```

  Replace `<project-directory>` with your actual folder name.

- Install Node Dependencies:

  ```shell
  npm install
  ```

This will install all the necessary packages listed in the `package.json` file.

### 8. Create a Branch for Your Work

Branching allows you to work on specific features or changes without affecting the main project.

- Check Current Branch:

  ```shell
    git branch
  ```

  This will show you the current branch (usually main or master)

- Create a New Branch:

  ```shell
    git checkout -b `<branch-name>`
  ```

  Replace `<branch-name>` with something meaningful, like `<feature/add-header>`.

### 9. Make Changes and Test

Open the files in VS Code, make your changes, and test them locally by running or building your
project. You can use the integrated terminal in VS Code to run commands, compile the code, or start
the local server.

### 10. Commit and Push Changes to GitHub

After you've made changes, save the files and commit them to your local repository.

- Check the Status of Your Changes:

  ```shell
    git status
  ```

  This will show the current state of your working directory, including staged, unstaged, and
  untracked files.

- Stage your changes for commit:

  ```shell
  git add .
  ```

- Commit Changes: Once your changes are staged, commit them with a meaningful message:

  ```shell
  git commit -m "Added my new feature"
  ```

- Pull Any Remote Changes: Before pushing, ensure your local repository is up-to-date with the
  latest changes from the main branch:

  ```shell
  git pull origin main
  ```

- Push the changes to your forked repository:

  ```shell
    git push origin <branch-name>
  ```

  Replace `<branch-name>` with the name of your branch.

### 11. Create a Pull Request (PR)

After pushing your changes, you can create a Pull Request to propose your changes to the original
repository.

- Navigate to your forked repository on GitHub.
- Create a Pull Request: There should be an option to "Compare & pull request." Click it, review
  your changes, and submit the pull request.

Please refer to the
[Pull Request Guide](/products/splashkit/splashkit-website/onboarding/03-pull-request/) for more
information on creating a pull request.
