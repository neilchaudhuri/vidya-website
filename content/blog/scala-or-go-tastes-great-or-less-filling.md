---

author: "Neil Chaudhuri"
title: "Scala or Go: Tastes Great or Less Filling?"
description: "Scala and Go are two of the most popular emerging languages. Here's how you choose between them."
banner: "img/banners/health-care-gov.jpg"
date: 2019-03-22
draft: true
tags:
- Golang
- Play Framework
- SBT
- Git
categories: 
- Programming
- Scala
- Go
- Software Engineering
- DevOps
- Functional programming
- Microservices
- REST

---

[Scala](/categories/scala) and [Go](/categories/go) (aka Golang (/tags/golang)) are two of the fastest growing leading-edge 
[programming](/categories/programming) languages in the world. In the United States, they are also among the 
[most lucrative](https://adtmag.com/articles/2017/08/18/go-scala-salaries.aspx). Scala and Go are among a slew of 
programming languages that innovate in numerous ways to produce faster, more resilient, more secure applications for a multicore,
[cloud native](/categories/cloud-native), [mobile](/categories/mobile) world.   

The thing is Scala and Go have *very* different philosophies on what makes engineers most productive and what defines great
applications. We are going to look at how Scala and Go solve five common programming tasks--absent values, error handling, 
collections, parallelism, and polymorphism--and how their contrasting approaches reflect their contrasting philosophies.
Then you can decide for yourself which works best for your next application.

But first, let me introduce you to Scala and Go.

# Scala

Scala is an object-oriented (OO) *and* [functional programming](/categories/functional-programming) language built for 
the JVM (though [Scala Native](http://www.scala-native.org/en/v0.3.8/) is in the works). It emerged from academia at the 
[EPFL](https://scala.epfl.ch/) in Switzerland from the mind of Academic Director Martin Odersky, who sought to prove that 
the two paradigms--OO for representing your domain and functional for its 
[mathematical guarantees for working programs](/blog/2018/09/18/the-business-case-for-functional-programming/)--can blend
seamlessly to yield the best of both worlds. Scala also has an exquisite static type system that can provide a 
powerful safety net.  

Operationally, Scala tooling can be problematic and compilation can be slow as you might expect from a language borne from
academia, but type inference, a vast standard library, and other features of the language make you
very productive once you get the hang of them. Performance varies with the JVM you're running, but regardless you do have to 
contend with the size of compiled objects and garbage collection at runtime. When you want to experiment with something, 
you can skip the ceremony of writing a class or test and instead use a command line REPL, an online REPL called 
[Scastie](https://scastie.scala-lang.org/) which allows sharing, or an outstanding third-party command line REPL called 
[Ammonite](https://ammonite.io/#Ammonite-REPL). Dependency management is achieved with [SBT](/tags/sbt).

Scala became really popular with the advent of ["Big Data"](/categories/big-data) because functional programming lends itself
so naturally to analytics, and the learning curve for 
[modern LISPs like Haskell and Clojure](https://en.wikipedia.org/wiki/Lisp_(programming_language)#2000_to_present) 
is too high for too many. [Apache Spark](/tags/apache-spark) is built in Scala, and when it got big, Scala got big. Since then Scala has
become a popular language for other domains including 
[reactive web applications and microservices](https://www.reactivemanifesto.org/).  

# Go

Go had an pragmatic mission from the start, so it was built with simplicity, minimalism, and performance in mind. Robert Griesemer, 
Rob Pike, and Ken Thompson created Go at Google as an [alternative to C++](https://talks.golang.org/2015/gophercon-goevolution.slide#4)
built for modern machines. Go is complied to native machine code; no virtual machine. Go is statically typed 
like Scala but is imperative and procedural. It's not 
a functional language *per se*, but [functions are first-class](https://golangbot.com/first-class-functions/). Where it 
truly shines is in its concurrency primitives: [channels and goroutines](https://medium.com/rungo/anatomy-of-channels-in-go-concurrency-in-go-1ec336086adb).
Together, they enable you to leverage the full power of your multicore machine. 

Operationally, Go is really fast to compile and run. It too
has a vast standard library for common tasks like [REST calls](https://golang.org/pkg/net/http/) and 
[JSON de/serialization](https://golang.org/pkg/encoding/json/). When you want to experiment, you can 
use the [Go Playground](https://play.golang.org/) or a scratch file in your IDE, but there is no command-line REPL. Unlike Scala,
Go has by design a very lean feature set and simple constructs. This makes it 
relatively easy to learn. However, you have to add a lot of features yourself that you take for granted in other languages 
or explore what Go offers as [potential workarounds](https://golang.org/doc/faq#Why_doesnt_Go_have_feature_X).
To get *really* good at advanced features of Go like concurrency and polymorphism (more later) is still a challenge.
Official dependency management is nonexistent, and you may find Go project setup based on [Git](/tags/git) repos
[a bit unorthodox](https://medium.com/rungo/working-in-go-workspace-3b0576e0534a). 

After Go took off at Google and was released to the public, it got really popular as the language of concurrency, which helped
in turn to make it the language of 
[DevOps](/categories/devops)--particularly in concert with 
[Kubernetes](https://rancher.com/using-kubernetes-api-go-kubecon-2017-session-recap/), which also emerged from Google. 
Go has expanded into other domains as well
with the CMS [Hugo](https://gohugo.io/) (which was used to build this site) and the microservices framework 
[Go kit](https://gokit.io/).

# Comparing Scala and Go

Let's look at how Scala and Go handle the kinds of real-world problems you will encounter every day.

*Disclaimer:* The sample code is not meant to showcase necessarily the "best" way to solve these problems--most performant, most elegant, 
or whatever. Instead it is meant to showcase reasonable, idiomatic solutions and, more importantly, how they reflect
the design philosophies of the respective languages. Of course 
[you are welcome to suggest improvements](/contact/) regardless.

## Absent values

You have to deal with potentially absent values all the time like when database queries for single entities return no hits or 
when you are maintaining backwards-compatible microservices. Typically, absent values are represented with `null`. Sir 
Tony Hoare called his invention of `null` to represent the  absence of a value his 
"[billion-dollar mistake](https://www.infoq.com/presentations/Null-References-The-Billion-Dollar-Mistake-Tony-Hoare."  
Handling absent values well isn't glamorous, but if you do it poorly, you will suffer significant productivity loses. 


### Scala

{{< gist neilchaudhuri 0faef521f6bb22d32ef75b1c041b6b62 >}}

Although `null` exists in Scala as a JVM language, you should never interact with it directly. Instead, you should work with `Option`, a 
[monad](https://stackoverflow.com/questions/44965/what-is-a-monad) designed specifically for this purpose. 
We describe `Option` in more detail in [our tutorial](https://www.youtube.com/watch?v=rbZ6GzR8B7I),
but essentially it compels you to account for the absence of a value at *compile* time. This avoids the costly
`NullPointerException` at runtime that has sent thousands of [Java](/categories/java) developers to therapy.

In this example, the `findStudent` function returns an `Option[Student]`. If the `Option` contains a value, the client 
can transform it into a `String` with the `map` function on `Option`; otherwise, `getOrElse` handles the absent value.

`Option` allows you to safely work with potentially absent values 
[without fear](https://marvel.fandom.com/wiki/Daredevil:_The_Man_Without_Fear_Vol_1_1). The compile-time safety makes 
you so productive. On the other hand, every transformation on the `Option`--via `map`, `filter`, *etc.*--produces a new
value because of the functional programming bias towards [immutability](/blog/2018/09/18/the-business-case-for-functional-programming/).
It almost certainly isn't a factor for you, but if memory is at a premium, maybe this is a concern.


### Go  

{{< gist neilchaudhuri 5f4c9844dbfe1d92fb200c8089c00229 >}}

Go handles potentially absent values through completely different idioms. Functions can return multiple return values. 
When a value is present, it's idiomatic to return the value and a `bool` value (named `ok` by convention) of `true`; otherwise, it returns 
the ["zero value" of the return type](https://tour.golang.org/basics/12) and `false`. The client uses an imperative 
`if` statement to distinguish.

In this example, the `findStudent` function returns a `Student` *and* a `bool`. Go allows you to initialize and test 
conditions in one line, and that's what we see here. If `ok` is `true`, we know we got something and act 
accordingly; if `ok` is `false`, we know the value is absent and handle this contingency.

For those uncomfortable with monad composition and higher-order functions, Go provides a very simple alternative in keeping
with its mission. On the other hand, Go engineers need the knowledge and discipline to apply these language features and idioms.
There is no dedicated type like `Option` to help. Also, unlike with the composability afforded by monads like `Option`,
if you need to compose multiple potentially absent values, you need to write multiple `if` conditions; that can feel verbose.
The simplicity may well be worth it though.




 
 





 
