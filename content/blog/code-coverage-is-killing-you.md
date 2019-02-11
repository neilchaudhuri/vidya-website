---

author: "Neil Chaudhuri"
title: "Code Coverage Is Killing You"
description: "Federal IT can leverage open-source tools, automation, and discipline to build quality into software from the start."
banner: "img/banners/michael-scott.jpg"
date: 2019-02-10
tags:
- Scrum
- Kanban
categories: 
- Testing
- Programming
- Architecture
- Software Engineering
- Agile
- Continuous delivery
- Continuous integration
---

If you are a software engineer or run software projects, [code coverage](https://stackoverflow.com/questions/195008/what-is-code-coverage-and-how-do-you-measure-it) 
is probably very important to you. It's intuitive; of course more tests produce better software. It's easy to calculate; tools, 
automation, and stunning charts to impress the people who pay for the occasional pizza are all readily available. 

The problem is code coverage is killing you.

Don't get me wrong. You deserve credit for your [agile](/categories/agile) commitment to quality and your investment 
in [continuous integration](/categories/continuous-integration) and [continuous delivery](/categories/continuous-delivery). 
But why does just about everything out there say 
100% code coverage is [at best unrealistic and at worst dangerous](https://softwareengineering.stackexchange.com/questions/1380/how-much-code-coverage-is-enough).
How can achieving a perfect score on a great metric be a bad thing? But OK. What's the optimal number then? There
are a lot of heuristics, but no one really knows. 

All of this uncertainty with an apparent no-brainer should give you pause, but it is important to understand the main reasons 
why code coverage is so flawed.

* _Code coverage assumes all your code is equally likely to fail._ Let's say your code includes a credit card validator. There 
is an infinite number of ways a string can fail credit card validation, but you only need a few tests to achieve 100%
code coverage for it. Meanwhile other code may be much easier to defend, but code coverage treats them all the same. Ideally, 
that credit card validator should have hundreds of tests associated with it. Code coverage only credits you for a 
small fraction, so you probably won't write any more than that. I believe that's what the kids call perverse incentives.

* _Code coverage assumes all your code has equal business value._ Let's say your application also offers payment via money order.
Almost no one will use that option; the vast majority of customers will pay by credit card. Code coverage doesn't know the difference, so 
it considers credit card tests and money order tests equally important. That's bad. I don't recommend it, but you might 
be able to get by without a single money order test because next to no one uses that feature. No way that would fly for credit cards.

* _Code coverage tells you how much but not how well._ This could be the worst of all. You are investing a lot of budget and schedule
in building a test suite that should raise the quality of your software, lower costs, and improve customer satisfaction. But 
while code coverage tells you how much you tested, it doesn't tell you how *well* you tested. You can write really poor tests
(*e.g.* tests that don't offer any challenging scenarios, tests that are flaky or slow (more on this later), *etc.*)
that yield 100% coverage. In the end, those tests might actually be *counterproductive* because the investment could have gone 
elsewhere. 

Frankly, none of these concerns are debatable. The only real argument for code coverage is that for all its flaws it is still
the best we can do. But is it?


