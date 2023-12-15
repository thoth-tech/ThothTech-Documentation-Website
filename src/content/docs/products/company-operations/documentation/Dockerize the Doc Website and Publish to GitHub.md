---
title: Dockerize the Documentation Website and Publish to GitHub
---

To dockerize the Thoth Tech Documentation Website and publish it to GitHub packages, the following
steps were followed.

## Create Docker Compose and Dockerfile

1. Fork the [ThothTech Documentation](https://github.com/thoth-tech/ThothTech-Documentation-Website)
   Repo on GitHub.
2. Open the repository on your local machine using Visual Studio Code.
3. Locate **View** on the toolbar and select **Command Palette** (this is usually located on the top
   left hand corner of VS Code).
4. When Command Palette is selected, choose **Docker: Add Docker Files to Workspace**.
5. In **Select Application Platform**, choose Node.js.
6. In **Choose a package.json file** select package.json.
7. Type 4321 as the port that the application/website listens on.
8. Select **Yes** for **Include Optional Docker Compose Files**.
9. Press Enter and Dockerfile and Docker Compase would be generated for your environment.

## Generate a Personal Access Token on GitHub

1. Navigate to Thoth Techs GitHub page.
2. In the upper-right corner of any page, click your profile photo, then click Settings.
3. In the left sidebar, click Developer settings.
4. In the left sidebar, under Personal access tokens, click Tokens (classic).
5. Select Generate new token, then click Generate new token (classic).
6. In the "Note" field, give your token a descriptive name.
7. To give your token an expiration, select Expiration, then choose a default option or click Custom
   to enter a date.
8. Select the scopes you'd like to grant this token. For this implementation write.packages and
   delete.packages was assigned.
9. Click Generate token.
10. Copy the new token to your clipboard.

## Build Docker Image and Push to GitHub Container Registry

**NB: For this action you would need Docker Desktop to be installed on your desktop**.

1. Open Docker Desktop on your laptop
2. On your terminal ensure you are in the directory that has your Dockerfile, run the below command

```
docker login --username [Your-GitHub-Name] --password [The generated token] ghcr.io
```

3. Build the docker image by running the below command.

```
docker build . -t ghcr.io/kachi-okorie/documentationwebsite:latest
```

4. Push image to GitHub

```
docker push ghcr.io/kachi-okorie/documentationwebsite:latest
```

You should now see the docker image being pushed to GitHub package. ![Dockerimage](/dockerimage.png)

## Test Image Pushed to GitHub

1. Run the below command to obtain the ID of the image running locally on your machine.

```
docker image ls
```

2. Delete local image to ensure your run image from the remote GitHub repository. In the command
   below, **889** is the first 3 digits of my image ID.

```
docker image rm 889 --force
```

3. Run the below command to run the image remotely.

```
docker run ghcr.io/kachi-okorie/documentationwebsite:latest
```
