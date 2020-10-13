---
author: "Neil Chaudhuri"
title: "Secure Online Voting is Possible. This is How"
date: 2020-10-12
description: "If we overcome past mistakes, corruption, and bad faith, we can absolutely achieve secure online voting."
banner: "img/banners/vote.png"
tags: 
- JAMStack
- PWA
- Docker
- Kubernetes
- Java
- OIDC
- React
- Svelte
- Spring Boot
- FastAPI
- Java
- Kotlin
- Go
- Python
- SQL
- PostgreSQL
- EFK
- Splunk
categories:
- Government
- Big Data
- Programming
- Testing
- Security
- Cloud Computing
- Software Engineering
- Open Source
- Microservices
---

The right to vote is sacred. It's essential to live in a free society and to pick a winner on [The Voice](https://www.nbc.com/the-voice).
Unfortunately, the right to vote is under attack worldwide, and bad actors 
have used tech to do it. Russia interfered with the Brexit referendum in the UK and with elections there, Ukraine, France, 
and famously here in the United States, even still as I write this, by hacking voting machines and voter registration databases and manipulating social media. 
Other foreign state actors are interfering in elections in similar if not quite as aggressive ways.

Meanwhile, here in America, the state legislature in North Carolina used data science with 
"[surgical precision](https://www.nbcnews.com/politics/politics-news/north-carolina-judges-toss-maps-slam-gerrymandering-stinging-ruling-n1049411)"
to rig state elections at the expense of voters' constitutional rights. North Carolina did it best, but it's a tactic exploited
throughout the country by politicians who fear accountability for their records. If accountability bothers them so much, they should
work in meteorology or sports talk radio. Even worse, the courts, 
including [the Fifth Circuit Court of Appeals just this week in Texas](https://dfw.cbslocal.com/2020/10/13/reinstates-texas-order-limiti-mail-in-ballot-drop-off-locations-1-county/),
have refused to remain above politics as the judiciary should and have chosen instead to legitimize corrupt voter suppression efforts.

You also have criminal mercenaries as we also saw this week when 
[Microsoft took down Trickbot](https://blogs.microsoft.com/on-the-issues/2020/10/12/trickbot-ransomware-cyberthreat-us-elections/),
at least for now, in their attempt to infect voting infrastructure with ransomware.

The goals vary. To sow chaos. To sow mistrust of the electoral process. To change American policy objectives. To maintain a certain status quo. To make money.

Regardless of the purpose of these attacks on the right to vote, they're shameful, and systemic flaws make it all possible: 

* Lack of transparency as manufacturers with troubling conflicts of interest produce closed, proprietary voting machines 
* Lack of knowledge about or interest in modern software architecture patterns, engineering best practices, UX strategies, modern technologies, accessibility, and good security hygiene
* Lack of training for staff in using and maintaining the available voting technology
* Lack of funding for officials acting in good faith to build robust voting infrastructure
* Lack of access controls to prevent officials acting in *bad* faith from exercising undue influence over the infrastructure for nefarious purposes

And many others.

Because of these systemic problems, the high stakes involved in electing officials who will be making life and death decisions in the era of COVID,
the breathtaking incompetence and embarrassing failure of "modern" voting apps
like the [IowaReporterApp](https://www.vox.com/recode/2020/2/7/21125078/iowa-caucus-2016-mobile-app-2020), and the fear of relentless
attacks from around the nation and the world, we are in a place now where the consensus is that the only secure way to vote 
is with paper ballots. To say nothing of the issues associated with paper ballots. Or the matter of voter access 
to those paper ballots, which itself is fraught with bad faith arguments and [racism](/blog/vidya/technology/black-lives-matter/).

It's easy, if profoundly disappointing, to see how we got here, but it really doesn't have to be this way.

# Features of Modern Voting

There is an old joke: 

*I told the doctor it hurts when I do that. He said "Then don't do that!"*

In order to build a modern voting solution, we need to look at the problems with existing voting solutions and "not do them."
I believe secure online voting must have several critical features.

### Open Source

This is absolutely crucial. The core of the solution must be open-source. Period. 
Every line of code needs to be available for all stakeholders--media, 
elected officials, election attorneys, security analysts, and most importantly voters--to have confidence in the security 
and integrity of the software and therefore in the outcomes of elections. 

Now we will see shortly that it may be necessary to incorporate some commercial solutions that are closed-source, but those should 
be on the margins. There should be no core functionality that isn't available for all to see.

Another reason to value open source is that a mission as important as this demands diverse experiences and perspectives--on
voting experiences, past software failures, overcoming [biases](/blog/vidya/technology/black-lives-matter/), 
architectural patterns, tech stacks, potential vulnerabilities, and whatever else we need to understand to build 
the best online voting platform possible.

### Zero Trust

Every state election system in America is perimeter-based. It's all about firewalls. Perimeter-based security is flawed 
because once intruders get in, which as we've seen time and time again isn't exactly impossible, there is no stopping them. 
Instead, we need a Zero Trust approach to security. I will let 
[Chris Gerritz](https://www.scmagazine.com/home/opinion/executive-insight/what-is-the-zero-trust-framework-in-cybersecurity-and-5-considerations-for-building-a-zero-trust-it-environment/) 
explain what this means:

> Rather than defending only a single, enterprise-wide perimeter, the Zero Trust approach moves this perimeter to every 
network, system, user, and devices within and outside the organization. This movement is enabled by strong identities, 
multi-factor authentication, trusted endpoints, network segmentation, access controls, and user attribution to 
compartmentalize and regulate access to sensitive data and systems.

Think of Zero Trust like a secure hotel. You need your key to get in the building, to get through front desk security, 
to take the elevator to your floor and only your floor, and finally to enter your room or the gym or the pool. Even inside 
your room, you need to be authenticated to access WiFi or use the safe.

Advancements in technology make Zero Trust possible, and a modern voting solution will enforce Zero Trust to ensure
that every interaction with every component of the architecture demands authentication and a thorough vetting of 
privileges and integrity.

### Transparent and Auditable

While the source code will be fully transparent to give everyone confidence in the integrity and fairness
of election outcomes, we also need that transparency to extend to the runtime operation of the software. We need to 
know the health of the system and to know every single thing that happens throughout the architecture--and who did it. 
This means continuous monitoring throughout the stack, elegant visualizations of the telemetry, and if we can manage it, 
anomaly detection through analytics. This level of auditability is necessary for Zero Trust.

### Immutable and Append-Only

I have [written](/blog/vidya/technology/business-case-for-functional-programming/) and [spoken](/blog/vidya/technology/talking-trends-at-tech-talk-dc/)
a great deal about the value of immutable data, and I think it is essential to secure online voting. The software
should not permit updates or deletes. Rather, any change to the data--a new candidate, a newly registered voter, a new address for an existing voter,
and certainly every vote--should be represented in immutable, append-only fashion. As part of the 
auditability of the software, we should be able to replay every event that's occurred to recreate state at any point
in the process.

In fact, immutability might be the single best defense against bad actors.

### Client Device and Application Deployment Agnostic

A modern voting solution needs to give voters the freedom to access their ballots 
on a wide array of devices and to give state government officials the freedom to deploy on premise or in the cloud.
The software needs to be agnostic to these possibilities, and this will force compromises in the implementation. It may 
not always be possible to apply the "coolest" solution if it couples the software too tightly to a particular vendor 
or feature.

### Usable

This might seem obvious, but secure online voting demands that all stakeholders consider it intuitive. This manifests in
several ways. User interfaces need to reflect modern UX principles so that voters, poll workers, and state officials across age and other
demographics find the software intuitive. This implies they be accessible as well to support users with disabilities. 

I also believe that giving voters the opportunity to cast their ballots from wherever they wish is a form of usability.
It's not just about comfort either. Because of the relentless media obsession with conflict, everyone tends to focus on candidates, 
but what about referendums, state constitutional amendments, and bond issues? These can be complex. I know from experience 
that it's helpful to research these comfortably rather than within the space and time constraints of a traditional voting booth. 

Part and parcel with usability is performance. Monitoring will help uncover issues with performance, but a modern online
voting system needs to be architected for performance. Performance issues will not only be annoying, but they could 
also undermine confidence in the integrity of the vote. 

### Simple

To achieve all of this, there will be a lot going on in a secure online voting platform--user interfaces, APIs, encryption,
databases, multifactor authentication, monitoring. It will be tempting to add complexity to integrate it all, and we 
need to resist that temptation to overengineer. Otherwise, the application will become unsustainable for the mainainers
and, much worse, unusable for voters and others, which will bring
us right back to the status quo of a voting platform that diminshes the confidence we have in the integrity of our elections.

---

This is a lot, and in order to achieve it, a secure voting platform needs to be engineered with a continuous deployment 
model that automates testing (for functionality, security, performance, accessibility), static analysis, and deployment.
We need a process that solves for the key metrics for software delivery performance that Google describes in their 
[State of DevOps](https://services.google.com/fh/files/misc/state-of-devops-2019.pdf) report: deployment frequency, 
lead time for changes, time to restore service, and change failure rate.

The good news is that a secure online voting solution doesn't have steep demands for scalability or performance. It's not 
like there will be tens of thousands of votes per second; this isn't [The Masked Singer](https://www.fox.com/the-masked-singer/).
Even if there were one instance of the platform for the entire United States, that's about 150 million voters.
That's not a lot. And because in America every state runs its own platform, for better or worse, you'd have at most one 
instance of the platform for each [state and inhabited territory](https://en.wikipedia.org/wiki/List_of_states_and_territories_of_the_United_States). 
California is the largest state by population, and a statewide election there will have around 30 million voters.
As software scale goes, 30 million over the course of several weeks 
(as the concept of "Election Day" thankfully grows more and more quaint) really isn't that much.
Now maybe, hopefully even, great voting software will raise those numbers, but as it stands now, this makes things a lot easier. We can 
focus on the user experience, integrity of the data, and security of the system and worry a bit less about performance at scale.

Another bit of good news? The UI is simple. It's just boring forms!

## What Might the Tech Stack Look Like?

I'm not exactly sure, but I do have some ideas I would like to run by you. 

### The user interface: JAMStack and PWA

A [JAMStack](https://jamstack.org/) front end provides several advantages:

* No need to deploy or scale web servers for rendering content derived from a database, which makes things much easier and dramatically reduces the surface area for an attack
* The unbeatable performance of pre-built assets cached on a CDN and in the browser
* Device agnostic

Certainly a front end in Rails or another robust monolithic framework would be effective, but I think using something 
like [Gatsby](https://www.gatsbyjs.com/), [Next.js](https://nextjs.org/), or [Sapper](https://sapper.svelte.dev/) would 
be so much simpler and more lightweight. It would be straightforward to build the forms and push them to a CDN like 
Cloudflare or Fastly.

In addition, I think it is important that the front end is deployed as a [Progressive Web App](/blog/vidya/technology/vidya-reloaded/).
This offers a lot of benefits, but primarily for this purpose, it is critical that the front end is always available 
and as functional as possible regardless of connectivity, which absurdly remains a problem in the richest country in the world. 

This is orthogonal to the JAMStack and PWA, but the user interface needs to have a strong 
[Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) as well.

By the way, it might be interesting down the road to think of voice interfaces allowing people to vote with Google Assistant,
Alexa, or Siri if privacy concerns can be addressed. One challenge at a time though. 

### API: Spring Boot

The purpose of the API is to authenticate requests from the JAMStack UI--in most cases, votes--and publish asynchronous
messages to the immutable, append-only data store while responding with, in the happy path scenario, a confirmation
and a way for voters to track their votes through the process so they can have every confidence their votes count.

There are a *lot* of great API solutions like [FastAPI](https://fastapi.tiangolo.com/), [Go kit](https://gokit.io/), and
[Lagom](https://www.lagomframework.com/), but [Spring Boot](https://spring.io/projects/spring-boot) offers some compelling 
advantages:
 
* Available in [Java](/tags/java) and [Kotlin](/tags/kotlin), which are simple, statically typed languages many engineers know
* Straightforward primitives for writing [reactive](https://spring.io/reactive) APIs
* [Good enough for Netflix](https://spring.io/blog/2020/02/24/netflix-built-a-spring-application-generator-to-boost-dev-productivity-here-s-how-you-can-too)

All of these options would be great though.

### Database: PostgreSQL. With a twist

The backbone of this architecture is the immutable, append-only data store representing every single mutation to the data on the platform
in order to ensure full replayability and traceability. How can we do this with PostgreSQL?

Easy. Revoke UPDATE and DELETE privileges!

Anything more than PostgreSQL, which is straightforward to deploy and agnostic of environment, would be overkill given the relatively low scale--particularly 
if someone deploys the online voting platform for a small election below the state level with just a few thousand or even a few hundred voters.  

We could punt here and decide on something more elaborate like MongoDB or Kafka because we decide a small election renders a secure
online voting platform unnecessary, but I would disagree. Local elections are extremely important. They impact people's 
lives the most, and voters are entitled to the same guarantees here that they are entitled to for the "big" elections. 

All we need to do is to store votes in a single table where a simple GROUP BY will aggregate election results. 
That's easy. We can also store temporal and location data so we can run some basic secondary queries like measuring voter activity
by precinct or time of day or day of week or whatever else you want to know.

So immutable PostgreSQL it is.

By the way, what about blockchain? [No. Just. No.](/blog/vidya/technology/pop-goes-the-blockchain/)
 
### Deployment: Docker and Kubernetes

This hypothetical architecture has several moving parts; the real manifestation of a secure online voting platform may have
fewer. Either way, we need deployment to be seamless and predictable across any environment. This is exactly the use case 
for Docker containers--for microservices, data stores, monitoring software, etc.--and Kubernetes to orchestrate them. 
Kubernetes in particular is particularly compelling because it serves as the common denominator for deployments to AWS, Azure, Google Cloud,
and on premise. In other words, Kubernetes is central to being deployment agnostic on the back end.  

This post is already long enough without getting into software engineering tooling like Gradle, GitHub, 
whatever continuous integration (CI) could be in play, and so on, but I do want to send a shout out to [Earthly](https://docs.earthly.dev/), 
which has recently emerged as a powerful build automation tool at a layer of abstraction above Docker. We want to make sure
we maximize reproducibility, determinism, and parallelism to make builds as simple, reliable, and performant as possible. Earthly could
be the perfect fit. 

### Monitoring: EFK or Splunk?

I'll be honest about a couple of things. I am not an expert on monitoring, and I don't really want to have to worry too
much about it when it comes to secure online voting. Don't get me wrong. Robust monitoring is critical to the auditability and 
traceability fundamental to the value of the platform, but it's not core functionality I care to spend a lot of time on when
there are so many other challenges.  

The preference is always open-source. It seems to me deploying an [EFK stack on Kubernetes](https://dzone.com/articles/efk-stack-on-kubernetes-part-1)
would be sufficient, but that requires the skill and time to configure everything as needed. Meanwhile, Splunk, the industry 
leader in monitoring, is proprietary and probably overkill for the same reasons a data store like Kafka would be, but the platform would
benefit from paid Splunk support.

### Authentication and Authorization: A blend of open-source and proprietary solutions

It goes without saying that the most important piece of online voting is security. In order to honor Zero Trust,
every interface demands verification:

* An authenticated voter casting a ballot by initiating a protected HTTP request
* An HTTP request over TLS hitting the API
* The API inserting a record over TLS into the database
* An authenticated user requesting monitoring data
* The entire continuous delivery pipeline integrating version control, CI, containerization, and deployment

This will require a blend of solutions, and I think it makes sense to leverage proprietary implementations that have mastered
these challenges. For example, an identity provider like Auth0 or Okta could provide multifactor authentication and OpenID Connect, particularly
the [PKCE flow](https://dzone.com/articles/what-is-pkce) with [JWT](https://jwt.io/), to authenticate the user to the API. For mobile users, we could also look 
into novel forms of authentication like UnifyID, which replaces passwords with machine learning to analyze unique 
user behavior like gait and keypress habits to verify identity.

The API server can authenticate to the database server, where data are encrypted, via mutual TLS, where certificates are rotated periodically, with 
credentials configured as Kubernetes [Secrets](https://kubernetes.io/docs/concepts/configuration/secret/) mapped to
credentials in the identity provider. 
  
EFK and Splunk both offer multiple ways to authenticate. We can figure that out later. If it's Splunk, paying *them* to figure it out
makes sense.

Finally, securing the entire DevSecOps pipeline means implementing a host of measures like keeping secrets out of code and configuration,
managing access control and limiting permissions throughout the pipeline, signing changes to version control with PGP, 
signing Docker images pushed to DockerHub with [Docker Content Trust](https://docs.docker.com/engine/security/trust/),
using key management mechanisms appropriate for the deployment platform,
and much more.

And of course there are automated security tests in CI and full reviews by security professionals to vet the entire 
architecture.

---

This entire stack, and really the whole architecture, is just an idea. It is all subject to change.

## Outstanding Questions

Even if the architecture and technology stack are perfect, there are difficult questions that remain across not only 
technology but also law, finance, and even philosophy. Here are some of them:

* Every state has its own election laws, technology infrastructure, and budget. What kinds of legal, privacy, and technical challenges
are there to migrating voter registration data to a new system? Is there even a need if the application can
represent registered voters some other way? 
* Corrupt officials do not want anything that will make voting easier, but would even officials acting in *good* faith consider it? 
* What's to stop government officials who are authorized users acting in bad faith from compromising the platform in some way?
* While the platform would be built for resilience, what kinds of contingency plans would be in place just in case the platform 
went down for an extended period?
* If we use PostgreSQL as an immutable, append-only store to provide a replayable log of all data mutations, we will eventually
hit its limits. What's the retention period for the data? If it is even necessary to retire the data to some kind of data lake
after the retention period, where would that be? How would that work?
* To what extent can we preserve the notion of a "secret ballot" where only voters themselves know their selections? 
Or should a modern voting platform recognize the very concept of a secret ballot as an 
[anachronism that is pointless at best and harmful at worst](https://www.washingtonpost.com/posteverything/wp/2017/01/06/want-to-improve-democracy-abolish-the-secret-ballot/) 
and function accordingly?

The beauty of open source is the diversity of thought and creative energy that converges to solve interesting, hard problems
like these. 

---

It will take a historical effort to build a secure online voting platform that allows all registered voters to make their voices
heard and gives them the confidence that their votes count. If you find improving access to voting, guaranteeing the integrity
of elections, and solving interesting problems as important and as compelling as I do, please 
[get in touch](/contact) so we can collaborate on something that could transform society for the better.
