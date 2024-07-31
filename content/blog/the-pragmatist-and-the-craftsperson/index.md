---
title: The Pragmatist and the Craftsperson
date: '2024-07-31'
description: Analyzing two extremes to help guide decision-making on the spectrum between them
---

The craftsperson and the pragmatist, in the context of this article, are two absolutist caricatures of a software developer with respect to how they approach and solve problems. They exist on opposite ends of a spectrum while real people facing real problems will fall somewhere in the middle. Our position on the spectrum between pragmatist and craftsperson is not static but rather constantly changing based on our own experiences and the demands of the company or project we work on.

This article is not meant to be prescriptive or carry any intention on how you should do your work. The intention is to draw attention towards these different styles of work so that we may reflect on which combination is best suited to the work that we face.

## Intended audience

This article is intended primarily for software developers but can apply to anybody working on teams that deliver software professionally.

## The craftsperson

> “Do it right or not at all”  
> “Measure twice cut once”

The craftsperson cares about the quality of the code they write. They follow principles such as [TDD](https://en.wikipedia.org/wiki/Test-driven_development), [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself), [SOLID](https://en.wikipedia.org/wiki/SOLID), and Clean Code in an effort to serve the long-term maintenance and extensibility of the system. They’re an expert in their technical domain and understand common patterns and best practices. They see beauty and get satisfaction from a well-designed and well-functioning codebase.

During the refinement process, the craftsperson will ask many clarifying questions about the requirements. They’re detail-oriented - asking about how the system should respond to the various states of empty, too few, just right, too many. They ask about what should happen if the user enters the unhappy path and how the system would handle errors. They ask about foreseeable features in the future to learn how it might influence the design of the current system. They might even favour waterfall over an agile methodology.

The craftsperson champions security and accessibility. They seek to protect the system from a nefarious user and to protect the user from running into issues with the software. They document decisions as code comments or separate documentation to share with their team.

Lastly, the craftsperson is less concerned with the business holistically than the software they’re responsible for. They advocate for additional time to fix bugs and solve tech debt in order to ship the most stable and reliable version of the product. They would be more embarrassed by shipping a broken product than by missing a deadline.

If left unchecked, the craftsperson will struggle to ship anything to production. There is always an improvement to be made or tech debt to be done on existing code. This means that time-to-market could suffer especially if the project depends on user feedback in order to move forward meaningfully.

## The pragmatist

> “Solve the problem, ship the solution, learn from the market”  
> “Move fast and break things”

The pragmatist cares most about getting a piece of software out into the market. They’ll seek out the MVP scope for a product or feature, ship it to production, then iterate on the next version using the feedback their team collects. They follow principles such as [YAGNI](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it) and [AHA](https://kentcdodds.com/blog/aha-programming) in order to deliver business value with the least amount of short-term overhead. They appreciate the business holistically and see code as a tool to achieve a business result.

Product managers love the pragmatist, because the pragmatist estimates the work in front of them and delivers quickly. The pragmatist will bring up blockers and tech debt only if they affect the work in front of them and not if they affect potentially foreseeable work in the future. They don't mind ambiguity in the requirements and will ask clarifying questions only as needed for their immediate work. A pragmatist prefers a fast-paced agile workflow over a slower waterfall one. The pragmatist is reactive - rather than proactive - by responding to changes rather than anticipating them.

The pragmatist prioritizes shipping the core of a feature over making sure each edge case is handled. Work is prioritized based on its impact to the business over the needs of the software system. Bugs are acceptable to ship as long as the team agrees that the likelihood of the bug happening and the effect on the user are known and accepted tradeoffs. Architectural decisions are made in response to requirements and rarely need to anticipate future iterations of the system.

The reactive nature of the pragmatist means that they’re frequently deciding which of their fires is the largest one to put out first. This means that unplanned work can often be a burden on the company as it struggles to prioritize and ship planned work among the chaos. It also means that the worklife balance is generally more turbulent and stressful.

## Adversarial but not zero-sum

While the craftsperson and the pragmatist may have different approaches to problem-solving, it's important to note that the balance of their perspectives is what helps teams find the ideal solution to a problem. When both sides are voice their approach and make a case for their solution, the team can then decide on the appropriate mix of the two.

## The two personalities in the workplace

When faced with the question of “how should I approach this particular problem?”, we can imagine it through the lens of the craftsperson and the pragmatist voicing their opinion from opposite ends of a spectrum of solutions. Choosing the right balance depends on a few factors.

### Company culture

Your team and your company at large tend to carry a set of preferences that align more closely with one end of the spectrum. A startup might favour a quicker pragmatic solution over one that is more technically sound, whereas a mature company may prefer the opposite. It's important to note whether your company is striving towards exploration or stability in their business model, because this will help you understand what kind of work the company values.

Employees also pick up on cues based on the actions of their teammates and what kind of work gets praised internally. Companies that praise and award a certain type of behaviour would typically see more of it.

### Timeline

Whether your stakeholders are your company’s leadership, your users, your clients, or a mix of the three, you’re going to feel pressure to deliver on a timeline. How much time you have to deliver a solution influences the tradeoffs you’re able to make.

Tighter timelines tend to favour more pragmatic solutions, and this will always be the stakeholders’ preference if no other variables are at play. A craftsperson mindset helps to anticipate future uses of the software and make a case for why frontloading some of the complexity would be better in the long run.

### Our past experiences

We may naturally identify with one of the personalities more than the other because of past experiences. Perhaps an experience with a bad production bug involving security skews us over into the craftperson’s camp for future problems where security is a concern. Perhaps a struggle to find product-market fit skews us towards shipping an MVP sooner than we would have otherwise.

These life experiences are excellent to draw from but it’s important to be aware of where you lie on the spectrum as is relates to the problems in front of you. If you find yourself on the extreme end of the spectrum, consider the other’s point of view to see what doors it might open up.
