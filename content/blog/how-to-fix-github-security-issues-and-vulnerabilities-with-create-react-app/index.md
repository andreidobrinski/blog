---
title: How to Fix GitHub Security Issues and Vulnerabilities with Create React App
date: '2020-06-05'
description: Keeping your dependencies up to date
---

You've started an instance of Create React App some time ago, pushed the code to GitHub, and now you're seeing the email/notification that "One of your dependencies has a security vulnerability". These notifications are helpful in finding potential issues that you may not have known about otherwise, but can also be worrying if you're unsure about how to resolve the issue. Fortunately, the update takes only a few minutes and becomes fairly routine after having several Create React App projects up on GitHub for a while. Let's go through the steps.

## Is the code shipped?

Perhaps the code is part of a course or tutorial and even though it's on GitHub, you've never shipped the project. Great, that means you don't have any security issues you need to worry about!

If the code is stale and you don't plan on coming back to it, feel free to dismiss the notification. You can also disable future security alerts by going into your GitHub repo's settings, finding Data Services and unchecking Security Alerts.

## How do I fix the vulnerabilities?

There are two main parts to fixing the vulnerabilities: pushing the updated dependencies to GitHub and deploying the app with the updated dependencies. Let's start with the updating the repo.

1. **Get the latest code.** Clone the repo or pull down the latest if the repo is already on your machine.
2. **Take a note of all the vulnerabilities.** These are the ones that GitHub provides for you in the security alert.
3. **Find the source of each dependency.** If you recognize the vulnerable package as something you installed yourself, skip ahead to number 4. For each other vulnerability run `npm list vulnerability`, where `vulnerability` is the package that GitHub notified you about[^1]. Trace the list to the top and take a note of that package. In an instance of Create React App, it'll _usually_ be `react-scripts`.
4. **Find the latest version.** If your `react-scripts` needs updating, then check out their [changelog](https://github.com/facebook/create-react-app/blob/master/CHANGELOG.md) to find the latest version. If the vulnerable package is part of one you installed yourself, you'll need to check the documentation of that package to find the latest stable release.
5. **Update the parent package.** For `react-scripts` you can run `yarn add --exact react-scripts@version-number` with `version-number` being the one in the create-react-app changelog. Check the changelog more more specific instructions on how to migrate from certain versions to the current one. Be sure to `yard add` any other vulnerable packages that aren't `react-scripts`.
6. **Update your repo.** Commit the changes to `package.json` and `yarn.lock` (or `package-lock.json`) and push them to your repo. This should be enough to satisfy the security alert from GitHub's point of view.

## What if that didn't work?

One reason why updating `react-scripts` wouldn't resolve the security issue is if the lock file on your project is holding onto the vulnerable version. This is either your `yarn.lock` or `package-lock.json` file. Deleting the lock file and re-installing the dependencies will generate a new lock file, which might not contain the vulnerable dependency. Though it's not generally recommended to delete the lockfile, it may be necessary to update a dependency, especially if the older (locked) dependency isn't being used anymore.

## Deploying your updated app

Now that your repo is up to date, let's make sure that your shipped code is free from vulnerabilites as well.

1. **Clean up the old dependencies.** Run `rm -rf node_modules`(Mac) or `rmdir /S /Q node_modules`(Windows) at the root of your directory, or just drag your `node_modules` folder into the trash.
2. **Install the updated dependencies**. Run `yarn install` or just `yarn` to install the dependencies from your updated `package.json`.
3. **Deploy your app.** Run whatever deploy command you have for that repo that you're updating.
4. **Tell your team.** If there are other developers on the project, especially if they have deploy permissions, tell them to pull the latest code, remove their `node_modules` folder, and reinstall dependencies.

That's it! You should now have a repo and shipped code, without any security vulnerabilities.

One last note: you can enable GitHub's `dependabot` to send pull requests to projects with vulnerable dependencies. This can be done via your Repo > Security > Automated Security Fixes.

[^1]: You can also run `yarn why vulnerability` to get the information about which package installed the vulnerable package as a dependency, but I prefer the visual tree output of `npm list vulnerability`.
