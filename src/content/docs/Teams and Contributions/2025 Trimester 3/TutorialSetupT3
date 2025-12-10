

OnTrack Development Setup Guide - 2025T3
Step-by-Step Tutorial
## ===================================

## 2. INSTALLING DOCKER DESKTOP

Docker Desktop is essential for running the OnTrack development container.
## Steps:
- Download Docker Desktop from docker.com

- For Windows users:
- Docker Desktop installation includes Windows Subsystem for Linux (WSL2)
- If WSL2 isn't automatically installed, follow the setup wizard
- Docker Desktop installs WSL (aka whistle) as part of the process

- Complete the installation and restart your computer if prompted

- Start Docker Desktop - ensure it's running before proceeding

- Verify installation by opening a terminal and running:
docker --version

IMPORTANT: Keep Docker Desktop running throughout the development process.

## ===================================

## 3. FORKING THE REQUIRED REPOSITORIES

OnTrack consists of three main repositories that need to be forked from Doubtfire LMS:
## Required Repositories:
a) doubtfire-deploy
- Contains docker-compose configuration
- Main deployment setup

b) doubtfire-api
- Backend API (Ruby on Rails)
- Contains the Ruby application code

c) doubtfire-web
- Frontend application (Angular)
- Contains the user interface

Optional (for testing):
d) doubtfire-lti (for LTI integration testing)
How to Fork:
- Navigate to the Thoth Tech repository store on
GitHub: https://github.com/thoth-tech/

- For each repository (deploy, api, web):
a. Go to the repository page
b. Ensure you're on the 'development' branch initially
c. Click the 'Fork' button in the top-right
d. Keep all default settings
e. UNCHECK 'Copy the main branch only' if you see it
f. Click 'Create fork'

- GitHub will create your own copy of the repository

- Your forked repositories will appear at:
https://github.com/YOUR_USERNAME/doubtfire-deploy
https://github.com/YOUR_USERNAME/doubtfire-api
https://github.com/YOUR_USERNAME/doubtfire-web

## ===================================

## 4. PULLING THE DOCKER IMAGE

Before starting development, pull the required Docker image from Docker Hub.
The Docker image contains all dependencies for OnTrack development.
## Steps:

- Open Docker Desktop terminal (recommended for Windows users)
- In Docker Desktop, click the terminal icon at the bottom
- This ensures proper line endings on Windows

- Run the following command:
docker pull lmsdoubtfire/formatif-dev-container:10.0.0-14

Note: The version number (10.0.0-14) comes from the docker-compose.yaml file
in the doubtfire-deploy repository

- This will download all dependencies - it may take several minutes

- Verify the image was pulled:
docker images
You should see: lmsdoubtfire/doubtfire-dev-container:10.0.0-14
Where to find the image version:
- Open doubtfire-deploy/docker-compose.yaml
- Look under 'services' > 'image'
- The format is: lmsdoubtfire/doubtfire-dev-container:[version]

## ===================================

## 5. CLONING REPOSITORIES LOCALLY

Now clone your forked repositories to your local machine.
## Steps:
- Open your terminal (PowerShell on Windows, Terminal on Mac/Linux)

- Navigate to your preferred directory:
cd ~ (goes to home directory)
or
cd C:\Users\YOUR_USERNAME\Documents\Projects

- Clone doubtfire-deploy first:
a. Go to your forked doubtfire-deploy on GitHub
b. Click the green 'Code' button
c. Copy the HTTPS URL (or SSH if you've set it up)
d. In terminal, run:
git clone https://github.com/YOUR_USERNAME/doubtfire-deploy.git

- Navigate into the directory:
cd doubtfire-deploy

- Clone doubtfire-api:
git clone https://github.com/YOUR_USERNAME/doubtfire-api.git

- Clone doubtfire-web:

git clone https://github.com/YOUR_USERNAME/doubtfire-web.git

- (Optional) Clone doubtfire-lti if you're testing LTI:
git clone https://github.com/YOUR_USERNAME/doubtfire-lti.git

- Verify your structure:
You should now have:
doubtfire-deploy/
├── doubtfire-api/
├── doubtfire-web/
└── doubtfire-lti/ (optional)

## ===================================

## 6. SETTING UP GIT REMOTES

Git remotes allow you to sync with both your fork (origin) and the ThothTech repository
## (upstream).

## Understanding Remotes:
- origin: Your forked repository on GitHub
- upstream: ThothTech's repository (downstream from Doubtfire LMS)
Steps for doubtfire-deploy:
- Check current remotes:
git remote -v

You'll see only 'origin' pointing to your fork

- Add ThothTech as upstream:
git remote add upstream https://github.com/thothtech/doubtfire-deploy.git

## 3. Verify:
git remote -v

You should now see:
origin https://github.com/YOUR_USERNAME/doubtfire-deploy.git
upstream https://github.com/thothtech/doubtfire-deploy.git

Repeat for doubtfire-api:

- Navigate to API directory:
cd doubtfire-api

- Add upstream remote:
git remote add upstream https://github.com/thothtech/doubtfire-api.git

## 3. Verify:
git remote -v

Repeat for doubtfire-web:

- Navigate to web directory:
cd ../doubtfire-web

- Add upstream remote:
git remote add upstream https://github.com/thothtech/doubtfire-web.git

## 3. Verify:
git remote -v

- Return to parent directory:
cd ..

## ===================================

## 7. SWITCHING TO THE CORRECT BRANCH

IMPORTANT: You must work on the 10.0.x branch, not the main or development branch.
For doubtfire-deploy:
- Check current branch:
git branch

You'll likely be on 'main' (version 6) - this is NOT what we want

- Switch to 10.0.x branch:
git checkout 10.0.x

- Pull latest changes:
git pull

- Check git status:
git status

Should show: "Your branch is up to date with origin/10.0.x"

For doubtfire-api:

- Navigate to API:
cd doubtfire-api

- Switch branch:
git checkout 10.0.x

- Pull latest:
git pull

## 4. Verify:
git status

For doubtfire-web:

- Navigate to web:
cd ../doubtfire-web

- Switch branch:
git checkout 10.0.x

- Pull latest:
git pull

## 4. Verify:
git status

- Return to deploy directory:
cd ..

- Fetch all latest changes (optional but recommended):
git fetch

## Verify All Branches:

Run this command in doubtfire-deploy:
git status

You should see 3 submodules if you included LTI:
- doubtfire-api/
- doubtfire-web/
- doubtfire-lti/ (optional)

All should be on branch 10.0.x

## ===================================

## 8. OPENING IN VS CODE

Now open the doubtfire-deploy directory in VS Code to start the development container.
## Steps:
- From the doubtfire-deploy directory in terminal:
code .

This opens VS Code in the current directory

- Alternative method:
- Open VS Code manually
## - File > Open Folder
- Navigate to and select the doubtfire-deploy folder

- Wait for VS Code to fully load

- You should see the folder structure:
## DOUBTFIRE-DEPLOY
## ├── .devcontainer/
├── doubtfire-api/
├── doubtfire-web/
├── doubtfire-lti/ (if cloned)
└── docker-compose.yaml

## ===================================

## 9. STARTING THE DEVELOPMENT CONTAINER

The development container runs all OnTrack services inside Docker.
## Automatic Method:
- VS Code should detect the .devcontainer configuration

- A popup will appear: "Reopen in Container"
- Click "Reopen in Container"

- VS Code will:
- Pull the Docker image (if not already pulled)
- Build the container
- Install all dependencies
- This takes several minutes on first run

- Watch the progress in the VS Code terminal
Manual Method (if popup doesn't appear):
- Press Ctrl+Shift+P (Cmd+Shift+P on Mac)

- Type: "Dev Containers: Reopen in Container"

- Select this option

- Container will start building

## What Happens During Container Setup:

- Docker creates the development container from the image
- Installs Ruby dependencies for the API
- Installs Node.js dependencies for the web frontend
- Sets up the database
- Configures all services

First run takes 10-20 minutes depending on your internet speed.
Container is Ready When:
- The VS Code terminal shows: "Dev container is ready"
- The bottom-left corner of VS Code shows: "Dev Container: OnTrack"
- You can access the integrated terminal within the container

## ===================================

## 10. ACCESSING THE APPLICATION

Once the container is running, OnTrack will be accessible via your web browser.
## Finding Your Ports:
- In VS Code, go to the "Ports" tab (usually at the bottom)
- Or press Ctrl+` to open terminal, then click "PORTS" tab

- You'll see applications running on:
- localhost:4200 - OnTrack Frontend (Angular)
- localhost:3000 - OnTrack API (Ruby on Rails)
Accessing OnTrack:
- Open your web browser

- Navigate to: http://localhost:4200

- You should see the OnTrack login page

- Default admin credentials:
- Username: admin
- Password: password
Verifying the API:
- Navigate to: http://localhost:3000

- You can access API documentation at:
http://localhost:3000/api/docs
This shows the Swagger API documentation with all endpoints

Note: If you see a CSS loading issue at localhost:4200, this is normal on first load. The Angular
frontend is still building. Wait a few minutes and refresh.

## ===================================

## 11. TROUBLESHOOTING

Common Issues and Solutions:

Issue 1: Docker Desktop not running
Symptom: Error when trying to start container
## Solution:
- Open Docker Desktop application
- Wait for it to fully start (green indicator)
- Try reopening container in VS Code

Issue 2: Wrong branch (main instead of 10.0.x)

Symptom: Version 6 appears instead of version 10
## Solution:
- Close VS Code
- In terminal, navigate to each repository
- Run: git checkout 10.0.x
- Reopen in VS Code

Issue 3: CSS not loading at localhost:4200
Symptom: Plain text page, no styling
## Solution:
- Wait 2-3 minutes for Angular to build
- Refresh the page
- Check VS Code terminal for build completion

Issue 4: Container won't start
Symptom: VS Code shows error during container startup
## Solution:
- Ensure Docker image was pulled successfully
- Run: docker images
- Verify: lmsdoubtfire/doubtfire-dev-container:10.0.0-14 exists
- If missing, run: docker pull lmsdoubtfire/doubtfire-dev-container:10.0.0-14

Issue 5: Port already in use
Symptom: Error that port 4200 or 3000 is already in use
## Solution:
- Close any other applications using these ports
- Restart VS Code
## - Restart Docker Desktop

Issue 6: Line ending issues on Windows
Symptom: Git shows many modified files that you haven't touched
## Solution:
- Use Docker Desktop terminal instead of PowerShell/CMD
- Configure git:
git config --global core.autocrlf input

Issue 7: Submodules not initialized
Symptom: Empty folders for api/web repositories
## Solution:
- Run: git submodule update --init --recursive
- Or manually clone as shown in Section 5
## Getting Help:

If you encounter issues:
- Check the OnTrack Technical Support channel in Teams
- Post in the ThothTech OnTrack Technical Documentation channel
## 3. Include:
- Your OS (Windows/Mac/Linux)
- Docker Desktop version
- VS Code version
- Error messages
- Screenshots if applicable

## ===================================
## CONCLUSION
You have now successfully set up the OnTrack development environment!
## Quick Reference - Development Workflow:
## 1. Start Docker Desktop
- Open VS Code in doubtfire-deploy folder
- Reopen in Container
- Wait for services to start
- Access http://localhost:4200
- Start coding!

## Branch Information:
- Always work on: 10.0.x branch
- Never commit directly to: main or development
- Create feature branches from: 10.0.x

## Repository Structure:
- doubtfire-deploy: Main deployment configuration
- doubtfire-api: Backend Ruby on Rails API
- doubtfire-web: Frontend Angular application
## Useful Commands:
git status # Check current status
git checkout 10.0.x  # Switch to correct branch
git pull # Get latest changes
git remote -v  # View configured remotes
docker images  # List Docker images
docker ps # List running containers

Document Version: 2025T3
## Last Updated: November 2025
Video Source: OnTrack Development Setup - 2025T3
Author: STEVEN DALAMARAS

## ===================================
## END OF DOCUMENT