---
title: Turning a Side Project into a Portfolio Piece
date: '2024-08-28'
description: Getting the most out of your side projects for your career
---

I’ve been writing code for a number of years and one of my favourite ways to write code is by working on side projects. I work on them usually to solve a real-world problem but also for the fun and learning. While there’s intrinsic value in taking on and shipping a side project, there is also a lot that the communication of your project can do to help with your career.

In this article, we’ll talk about the non-coding things you can do so that your project helps you stand out as a job candidate.

## Intended Audience

Junior-to-intermediate developers that have built a side project: something you own and can talk about. Developers that are working on their portfolio and online presence. This article is written from the perspective of a frontend-focused web developer.

## How can the side project help me?

Before we get into any steps let’s first discuss why to even do this, how can your side project help you in your career? You’ve already done the hard work of building out an idea - which speaks volumes in itself - but it also gives you the opportunity to speak to what kind of a developer you are and what kind of an employee you can be.

Talking about your process and project can:

- establish you as being experienced with the tech stack you worked with
- demonstrate your approach to solving problems
- show what areas of the code you care about: such as testing, security or accessibility
- show that you’re able to communicate well through writing
- show your ability to care about the user experience and be detail-oriented

These things matter to employers and can help differentiate you among the other developers applying for a role. Talking about these things also helps make sure you find good alignment between your own interests and the business goals of a company. Writing about how you focus on user experience, for sample, will resonate with companies that work the same way.

Let’s talk about three areas of focus where we can get the most out of your project by making it presentable as a case study, as a demo, and as a repository.

## Presenting the case study

A case study is basically a write-up that talks about the process behind building the project. Writing a case study assumes that you have a portfolio website or some other means to share your writing online. A case study won’t be read in depth by every prospective employer but goes a long way for the ones who choose to read it.

The content of the case study is entirely up to you and there’s no wrong answer for what to include. I like to think about the audience as someone who is mostly curious about how and why I built the product and understands some of the underlying tech. This means that I focus on the problem and product and include any of the technical details that I find interesting or relevant to the problem being solved. The key to choosing content is to write with single-person audience in mind and talk about the things they would be interested in.

I recommend talking about your intentions and motivations for building the project and what it means to you. All my side projects involve solving a pain point, and I walk the audience through that fairly early on in the write-up. This naturally segues into talking about how I scoped out a feature set and decided what to build.

Feel free to include as much or as little technical information as you’d like. I typically like to touch on the technologies I used as well as covering my solution to the the problem I solved. I’ll dive deeper into a technical solution if it’s interesting and ladders up to the larger product/business problem that it solves. Sharing some architecture diagrams or a component tree is a great way for the audience to visualize how the code works and how you thought about the problem.

The case study should always include a link to your demo near the top. With that, let’s get into how to make the best out of your demo.

## Presenting the demo

The key to making your demo presentable is with the finer details that take it from “this is obviously a demo” to “this looks like a _real_ product”. These things may not be fun or glamorous but they add a lot to the overall perception of the work you shipped. Keep in mind that between the case study, demo, and codebase, the demo is what would probably get the most eyes on it. Even if it’s just a quick glance it’s important that the demo gives a good first impression.

I usually start with the things that make the product look better in the browser. Typically I’ll add a favicon and app icon - I like to use this [favicon generator](https://realfavicongenerator.net). I’ll also add meta tags - even just a title and description that fits your product goes a long way in terms of how it appears as a browser tab. Meta tags can also help to make your site look great when shared over social media, and adding a photo with the correct dimensions works well for this.

Next up is doing an audit for accessibility, performance and security. There are a lot of tools to help you with this, with Lighthouse being the easiest options for Chrome. Make sure your HTML is semantic and accessible, make sure to optimize assets for performance, and make sure that no API keys are being exposed to the client if they shouldn’t be.

Adding an `/about` page to the demo is a good way to embed the benefits and reason for the product’s existence. It’s also a good way talk about who you are, why you made the site, and include a link back to your portfolio page or social media.

From here, consider any other polish or additional features that can help the work stand out. If the site can work offline then adding a service worker and enabling offline is an option. If animations weren’t already a part of the project then circle back and see where animations can help make the state of the app more clear.

Once the demo looks good we can move on to improving the codebase for the more technical people reading into your work.

## Presenting the repository

The repository is employer’s glimpse into the code they expect you to write for them. It’s easy to focus on the side project on the feature set and be done with it, but taking time to put together a well-structured codebase means that you care about the documentation of your work, which is crucial for working in a team. What you want to convey is a sense of what it would be like to work with you on a codebase.

A visitor to your GitHub profile will likely have an idea of what to expect out of a codebase, so give them what they expect. I’ll assume that your project is open source, if that’s not the case then feel free to skip this section.

Add a readme with an overview of the project. Include the name of the project, its purpose, and how-to steps for someone to run it locally. Include a link to the demo and even a short gif of a key user flow into the readme. You can also include the technologies you used to build it and a short list of completed features (or features in progress) to share a sense of the state of the project. If the project is open to contributions then add a `contributing.md` file with steps for other developers to contribute.

Hopefully your code has been structured well but if you think you can improve the architecture, organization, or naming of variables then take some time to do so. Add code comments above functions or components that could use an overview - the ones that aren’t immediately clear from the code what they do. Add comments around gotchas and expectations for how to use the code.

Include a test suite that tests some of the key components of the app. I won’t get too deep into how to test your code but having something in place to show that you care about regressions and confidence to ship is important.

Include a CI pipeline that automates test running and code deployment on commits to `main`. Not only does this help you with future maintenance but it shows that you care about automation when it comes to code deployment. GitHub Actions is great at letting you do this easily and for free.

By this point you’ve done what’s needed to make sure the demo, repo, and write-up are ready to be shared, so close by talking about sharing your work.

## Communicating the effort

The last step to getting the most of your side project is sharing the work that you’ve done. Write up a line or two that briefly says that you made the project, why you made it, and what it does. Share the message with a a link to the project demo on your LinkedIn and on any other socials that you would use for to share this type of thing.

Next, add the project to the “Projects” section of your LinkedIn profile. Include your short blurb and links to the demo, write-up, and repo. This makes it easier for recruiters to find in the future.

Lastly, double-check that each of the demo, repo, and write-up link to the other two.

Be prepared to have a few key talking points about building your project - lessons learned, challenges etc - to discuss in an interview setting.

Once you’ve gone through the steps above you’ll be ready to put your best foot forward in terms of presenting the project as a career milestone!
