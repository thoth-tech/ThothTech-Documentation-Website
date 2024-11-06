---
title: Getting Started Contributing
sidebar:
  order: 1
  label: Start Contributing
---

### Ontrack Libraries

The OnTrack system consists of a [Ruby On Rails](https://rubyonrails.org/) backend using the
[Grape API framework](https://github.com/ruby-grape/grape), and an
[Angular 17](https://v17.angular.io/docs) and [TailWindCSS](https://tailwindcss.com/) frontend.
Currently, the frontend is in the process of a migration from a [AngularJS](https://angularjs.org/)
and [Bootstrap 3.4](https://getbootstrap.com/docs/3.4/) to this new structure.

### Version Control

At ThothTech, we use Git as our version control system, with our repositories being stored on
GitHub. This allows for easily collaboration and code storage for such a large and complex system.
The OnTrack system is stored within 3 repositories:

- [doubtfire-web](https://github.com/thoth-tech/doubtfire-web) contains the frontend
- [doubtfire-api](https://github.com/thoth-tech/doubtfire-api) contains the backend
- [doubtfire-deploy](https://github.com/thoth-tech/doubtfire-deploy) is used to manage deployments
  and releases

While working on the OnTrack system, you will mainly be operating within the doubtfire-web and
doubtfire-api repositories.

These 3 linked repositories are owned by ThothTech and are the ones that you will fork to make your
changes. When your changes are approved, they will be merged into these repositories and can later
be merged upstream into the [doubtfire-lms](https://github.com/doubtfire-lms) series of
repositories. The doubtfire-lms repositories contain all changes that have been accepted.

### Development Container

While working with the OnTrack system, we use a development container. This container includes all
the previously listed repositories under one download, and enables you to easily run the OnTrack
system. Details on how to set up and run the development container can be found in the
[Doubtfire contributing guide](https://github.com/thoth-tech/doubtfire-deploy/blob/development/CONTRIBUTING.md).

#### Running the Dev Container

To run the dev container, first you must get the **Docker Engine** running and open the
**doubtfire-deploy** folder in a dev container using VS Code's Command Palette (ctrl / cmd + shift +
p) command `Dev Containers: Open Folder in Container...`

Make sure the branch is development and the git remotes are configured properly. It should look
something like this for all 3 repos (doubtfire-deploy, doubtfire-web, doubtfire-api):

![Git Remotes](/ontrack/contributing-guide/gitremotes.png)

**Origin** should point to the **fork that you have created** and **upstream** should point to the
**Thoth Tech** repo

#### Common errors during dev container setup

##### 1. MySQL error in the backend

![MySQL Backend Error](/ontrack/contributing-guide/mysqlerror.png)

###### Solution

Dev container related files are only located in the **development** branch under
**_.devcontainer_**. This means if you are on the wrong branch or your container doesn't recognise
the git repository, it won't find the dev container files and your container won't be configured
properly (your Configuring... terminal would show an error like shown below e.g. post_start.sh was
not found.)

![Post Start Error](/ontrack/contributing-guide/poststarterror.png)

On Windows, your Docker workspace won't recognise the git repository if you don't configure git to
mark the workspace as a safe directory. If you do a `git fetch` like shown below, git will alert you
of this and tell you which command to run to fix it. Copy paste that command and run it. After that,
you'll see the branch name in parenthesis as shown below in red. Do this for all 3 repos to mark
each directory as safe for git operations.

![Git Fetch Example](/ontrack/contributing-guide/gitfetchexample.png)

**Red** means there is a problem with your branch. Ideally the branch name should be in **green**.
To fix this, run `git reset --hard upstream/development` for each repo. This is assuming you have
fetched the latest changes for each repo using `git fetch` and you are on the development branch.
Run `git status` to make sure everything's up to date and there are no pending changes.

Then without closing the remote connection to the container, rebuild the container using the Command
Palette command (ctrl / cmd + shift + p) `Dev Containers: Rebuild Container`.

##### 2. Docker container related errors

Firstly, make sure to check for pending updates for Docker.

Now, sometimes if you are having any weird Docker container related problems such as shown below,
you might need to delete all **Containers, Images, and Volumes** related to
**doubtfire-lms/formatif** from inside the **Docker app** and restart the **Docker Engine**.

![Docker Error](/ontrack/contributing-guide/dockererror.png)

After you have restarted the docker engine, you can then open the **doubtfire-deploy** folder in VS
Code using the Command Palette command Dev Containers: Open Folder in Container...

##### 3. Frontend not starting

Typically, if the frontend fails to start it means that you are missing the required packages. This
can be resolved by opening a new terminal in the **doubtfire-web** directory and running the command
`npm install -f`. Once this command has finished running, run the command `npm start` to start the
frontend, which can usually be accessed at <http://localhost:4200/>.

##### 4. Wrong sign in page / frontend errors

Errors that are encountered in the frontend typically show up as alerts that appear at the top right
of the page.

![Incorrect sign in page](/ontrack/contributing-guide/incorrectsigninpage.png)

Most of the time these will occur due to the backend not working as a result of a migration error,
which an example of is shown below:

![Backend migration error](/ontrack/contributing-guide/backendmigrationerror.png)

To fix this, enter the backend terminal and press **ctrl + c** to end the backend process. Once this
process has ended, create a new terminal in the doubtfire-api directory. Run the following commands
to fix the migration error and relaunch the backend:

1. `bundle exec rake db:migrate`
2. `bundle exec rake db:populate`
3. `rails s`

Reload the frontend once the backend server is up and running. The correct sign-in page like shown
below should appear.

![Correct sign in page](/ontrack/contributing-guide/correctsigninpage.png)

Login with username **student_1** and password **password** and enter **1** as the Student ID/number
and sign-in. The dashboard should appear with the enrolled units.

### Documentation and Templates

#### Documentation Repositories

Currently, ThothTech has 2 documentation repositories:

- [ThothTech/documentation](https://github.com/thoth-tech/documentation): For internal docs such as
  new features being worked on and spike reports etc.
- [ThothTech/ThothTech-Documentation-Website](https://github.com/thoth-tech/ThothTech-Documentation-Website):
  For external docs to introduce the products and policies to new students and assist onboarding.

#### Templates

While working on the system, you will often be required to write documentation prior to making
changes, such as component reviews for a migration, a spike when performing research or even for
submitting a pull request. Templates for each of these can be found below:

- [Component Review Template](https://github.com/thoth-tech/documentation/blob/main/docs/Templates/Project-Templates/Component-Review.md)
- [Spike Plan Template](https://github.com/thoth-tech/documentation/blob/main/docs/Templates/SpikePlan-Template.md)
- [Spike Outcome Template](https://github.com/thoth-tech/documentation/blob/main/docs/Templates/SpikeOutcome-Template.md)

### Your First Task

Currently, the most beginner friendly tasks within the OnTrack system are frontend migrations. These
tasks will involve converting an old component that uses [AngularJS](https://angularjs.org/) and
[Bootstrap 3.4](https://getbootstrap.com/docs/3.4/) to a new component that uses
[Angular 17](https://v17.angular.io/docs) and [TailWindCSS](https://tailwindcss.com/). The guide for
how to perform a frontend migration can be found
[here](https://github.com/thoth-tech/doubtfire-web/blob/development/MIGRATION-GUIDE.md).

These migration tasks will give you a good understanding of how the OnTrack system is structured and
will provide a good introduction on how to make changes to the system.

Here's some resources which might help while working on migration tasks:

- [Flex layout to tailwind migrations](https://blogs.halodoc.io/flex-layout-to-tailwind-migration/)
- [Flex directive equivalents in Tailwind](https://github.com/angular/flex-layout/issues/1426#issuecomment-1302184078)

As always, if you run into any issues while working on OnTrack, feel free to reach out to others in
the team. We're always happy to help!
