---
author: "Neil Chaudhuri"
title: "The Business Case for Functional Programming"
description: "Learn how functional programming can make your teams more productive than you ever imagined."
banner: "img/banners/functions.jpg"
date: 2018-09-18
tags:
- Agile
- Scrum
- Java
- Scala
- Go
- Technical debt
- ScalaCheck
categories: 
- Agile
- Project Management
- Software Engineering
- Programming
- Functional Programming
- Testing
- Continuous Integration

---

Functional programming isn't exactly a fun topic anywhere outside of technical conferences and
[The Big Bang Theory](https://www.youtube.com/watch?v=k0xgjUhEG3U). Even software engineers who love 
code often tune out when they hear terms like [monad](http://stackoverflow.com/questions/44965/what-is-a-monad)
and [referential transparency](https://stackoverflow.com/questions/210835/what-is-referential-transparency). 
But if you are a technical manager or executive, heads up. Functional programming will limit your 
[technical debt](tags/technical-debt) so you build better 
software faster than you imagined and will earn you the Tesla you always wanted. 

Here's why.

## Code Reuse For Real

Code reuse is a vision long offered by object-oriented (OO) languages like [Java](/categories/java) but has proven to be a 
myth--like the Fountain of Youth and fat-free ranch dressing that's edible. In practice OO languages tightly couple data
with behavior, so it's hard to extract the behavior into reusable code others can use. 

In functional programming (FP), *behavior* is the first-class citizen--in the form of functions that transform single inputs 
into deterministic single outputs. This empowers engineers to compose functions into data flows where providing data to one function sets off a 
[Rube Goldberg machine](https://www.youtube.com/watch?v=kr_z37TgQO4) where the output 
becomes the input to the next function and so on down the line. You can also mix and match functions to create new data flows.
In the end, building software is basically like [building Legos](https://cdn-images-1.medium.com/max/1600/1*yGnDGRW4pTgmcDUi4oC8Uw.png).
This makes your code easier to understand--or in the vernacular of functional programming, "reason about"--and makes code reuse
a natural outcome that is simply part of your day-to-day process.

## Satisfaction Guaranteed. Literally.

If you manage OO projects, you may have heard of "design patterns," which came out of a 
[book by a group of expert software engineers](https://en.wikipedia.org/wiki/Design_Patterns) known as the "Gang of Four".
Design patterns offer suggestions for writing code that solves common problems while resilient to change. 
In other words, thoughtfully applied patterns reduce your time to market so your team won't have to work the weekend
after your mercurial client changes course. That spares you a lot of resentment and 
the cost of two pizzas--more [if I am on your team](/consulting/).

Sounds great, right? It is! Sort of.

The problem is that design patterns are opinion--expert opinion borne of decades of experience--but opinion nonetheless. 
As programming languages and technical challenges evolve, there is no way to know how well they will stand the test of time. The
[Singleton](https://www.geeksforgeeks.org/singleton-design-pattern/) design pattern, for example, has 
been [particularly controversial](https://stackoverflow.com/questions/137975/what-is-so-bad-about-singletons).

On the other hand, FP offers *mathematical* guarantees that the code you write is sound. The mathematical 
laws that govern it--[Type theory](https://en.wikipedia.org/wiki/Type_theory) and 
[Category theory](https://en.wikipedia.org/wiki/Category_theory) in particular--are not vulnerable to the whims of the broader
technology landscape. Math isn't opinion. 

This is why [Elm](https://elm-lang.org/) developers often report 
["0 runtime exceptions" in production](https://www.slideshare.net/InfoQ/fullscale-elm-in-production). Note this isn't the same 
as "0 bugs." No paradigm can guarantee that. FP can't stop a developer running on Red Bull and moxie after staying up all night playing 
Fortnite from calculating the total of a customer's shopping cart by subtracting rather than adding. Still, FP 
--along with companion principles like [immutability](https://www.quora.com/Why-is-immutability-important-in-functional-programming)--
makes it harder to write bugs and uncovers the ones you *do* write more quickly and cheaply by virtue of 
mathematical guarantees that stand the test of time.

## More Quality in Less Time

That shopping cart bug should be caught by tests, but most software engineers look at unit and integration testing like [flossing](https://www.dentalassociates.com/application/files/4214/7760/0003/flossing-is-beneficial-1.jpg).
They get why it's necessary, but they don't really look forward to it. The consequences of this mentality become especially
problematic when executives enable it. Testing takes so long that they are satisfied with a few token tests.
If [agile](/categories/agile) safeguards aren't in place, the result is illusory productivity--a bunch of alpha- and beta-quality features
whose quick delivery might impress unsuspecting clients but will demand fixes later that are orders of magnitude more 
expensive.

To be fair, developer testing can be a pain. Test setup is slow because you need to 
"[double](http://xunitpatterns.com/Test%20Double.html)"
your inputs (*i.e* mock or stub, often with the help of an open-source library like [Mockito](https://site.mockito.org/) 
or [unittest.mock](https://docs.python.org/3/library/unittest.mock.html)) along with any dependencies
necessary for the code you're testing to execute a scenario. 

*And* you have to repeat this process for each likely happy-path scenario and some
arbitrary number of alternate-path and error scenarios. 

*And* you need
to write your tests efficiently so that the test suite doesn't take hours to run in [continuous integration](/categories/continuous-integration).

All of that is cumbersome, but FP can make it easier.

The first thing you should do--FP or not--is to reduce dependencies. Lots of dependencies is a smell. 
Then replace the remaining object dependencies 
with *functional dependencies*. Gradually have the engineers evolve their APIs towards behavior rather than objects.
Thing hard to mock like REST calls can be replaced with functions as simple as
`"" => """{"fake": true}"""` to use [Scala](/tags/scala) syntax. That's really easy. No mocking libraries
necessary.

As for test inputs, consider [property-based testing](http://www.scalatest.org/user_guide/property_based_testing). 
For the cost of less initial setup than you do now for a single input, tools like 
[ScalaCheck](/tags/scalacheck) will generate literally
hundreds of inputs that will put the code through the wringer against data you never imagined and give you confidence it works.
I think it makes a lot of sense to execute property-based tests as the first line of defense in 
development but conventional, scenario-based tests 
with functional dependencies to reproduce and fix bugs discovered in functional testing or production.   

Finally, if your team's tests have sophisticated setup with an expensive resource you'd like to share across tests and 
clean up afterwards, have your engineers employ the [Loan Pattern](https://www.outbrain.com/techblog/2017/05/effective-testing-with-loan-pattern-in-scala/),
which is one of the FP-est things you can do. I wrote an example 
on [Stack Overflow](https://stackoverflow.com/questions/43729262/how-to-write-unit-tests-in-spark-2-0/43769845#43769845) 
of how powerful this can be for testing [Big Data](/categories/big-data) jobs using [Apache Spark](/tags/apache-spark). 


## Doesn't Take Much

It is very likely that today you can begin to enjoy many of the FP advantages I've described. Most modern languages--even Java finally
--offer some degree of FP either in the core language or through open-source extensions. 

It is also critical to keep in mind that it isn't a zero-sum game among FP and other paradigms. In fact, the fundamental
academic premise of Scala is that OO and FP can not only coexist but complement to produce an ideal language offering
the best of both. Similarly, FP can complement other paradigms like the imperative, procedural philosophy that
drives [Go](/tags/go) programming.  

Consequently, you should not worry that FP demands a radical transformation of your code 
base that is unrealistic for your timeline and unthinkable for your client. No need to send everyone to Haskell training.


## Conclusion

When you are facing increasing pressure to deliver more features in less time, your team needs to leverage the full capabilities
of your engineering stack to maximize productivity. No matter your situation, let functional programming be a weapon
in your arsenal. Whether you transition to
fundamentally functional languages like [Elixir](https://elixir-lang.org/) or Scala or Elm, leverage functional capabilities 
or extensions in other languages like Java or [JavaScript](/tags/javascript), 
or even just adopt corollary principles like immutability, your team will write fewer bugs and catch others faster than you
thought possible. You should see improvement in as little as a single sprint (in [Scrum](/tags/scrum) speak), and it's an 
investment [most software engineers are happy to make](/blog/the-art-of-software-engineering) that will generate huge
value for all of you.
