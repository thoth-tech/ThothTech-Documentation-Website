---
title: How to Publish An Astro Website to Netlify Guide
sidebar:
  label: How to Publsih An Astro Website to Netlify Guide
---

This guide provides you a step-by-step instructions for publishing an Astro website to Netlify are
provided in this guide. Astro is a contemporary static site generator, while Netlify is a robust
static website hosting platform. You can deploy your Astro website to Netlify and make it available
online by following these steps.

## Prerequisites

### - Node.js and npm

Ensure that Node.js and npm are installed on your machine. You can download and install them from
https://nodejs.org/.

### - Astrol CLI

Install the Astro CLI globally by running the following command in your terminal

```shell
npm install -g create-astro
```

## Steps

### 1. Create an Astro Project

Open your terminal and run the following commands to create a new Astro project

```shell
npx create-astro my-astro-site
cd my-astro-site
```

### 2. Launch a Git Repository

Create a Git repository from scratch if you haven't before.

```shell
git init
```

### 3. Create a Repisitory on GitHub

Make a new repository using any Git hosting provider, such as GitHub. Insert the remote origin into
your repository locally

```shell
git remote add origin <your-repository-url>
```

### 4. Commit and Push to GitHub

Push your changes to your GitHub repository after committing them.

```shell
git add .
git commit -m "Initial commit"
git push -u origin main
```

### 5. Set up Netlify

- Go to https://www.netlify.com/ and sign in or create a new account.

- "Click on "New site from Git" on the Netlify dashboard.

- Connect your Github repository.

- Configure your build settings:
  - Build Command: 'npm run build'
  - Publish Directory: 'dist'

### 6. Deploy the Site

- Press "Deploy site" to begin the building process.

- Netlify will create your Astro site by automatically detecting the settings for your project.

Automatic deployments are offered by Netlify anytime you push updates to your linked Git repository. A fresh deployment is initiated with every push to the main branch.

Well done! On Netlify, your Astro website is now active. If you have set up a custom domain, you can use it to access it instead of the Netlify domain that is provided. Every time you push changes to your repository, Netlify will take care of the build and deployment procedure automatically.

For further detailed explanation, please refer to these helpful links below:

1. https://docs.astro.build/en/guides/deploy/netlify/

2. https://docs.netlify.com/welcome/add-new-site/

3. https://dev.to/whitep4nth3r/how-to-deploy-an-astro-site-m8h

