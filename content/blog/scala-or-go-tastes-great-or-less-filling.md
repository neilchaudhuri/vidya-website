---

author: "Neil Chaudhuri"
title: "Scala or Go: Tastes Great or Less Filling?"
description: "Scala and Go are two of the most popular emerging languages. Here's how you choose between them."
banner: "img/banners/health-care-gov.jpg"
date: 2019-03-22
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
applications. We are going to look at how Scala and Go solve five common programming tasks--null safety, error handling, 
collections, parallelism, and polymorphism--and how their contrasting approaches reflect their contrasting philosophies.
Then you can decide for yourself which works best for your next application.

But first, let me introduce you to Scala and Go.

## Scala

Scala is an object-oriented (OO) *and* [functional programming](/categories/functional-programming) language built for 
the JVM (though [Scala Native](http://www.scala-native.org/en/v0.3.8/) is in the works). It emerged from academia at the 
[EPFL](https://scala.epfl.ch/) in Switzerland from the mind of Academic Director Martin Odersky, who sought to prove that 
the two paradigms--OO for representing your domain and functional for its 
[mathematical guarantees for working programs](/blog/2018/09/18/the-business-case-for-functional-programming/)--can blend
seamlessly to yield the best of both worlds. Scala also has an exquisite static type system (more later) that can provide a 
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

## Go

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
relatively easy to learn. However, you have to add a lot of features yourself that you take for granted in other languages,
and to get *really* good at advanced features of Go like concurrency and polymorphism (more later) is still a challenge.
Official dependency management is nonexistent, and you may find Go project setup based on [Git](/tags/git) repos
[a bit unorthodox](https://medium.com/rungo/working-in-go-workspace-3b0576e0534a). 

After Go took off at Google and was released to the public, it got really popular as the language of concurrency, which helped
in turn to make it the language of 
[DevOps](/categories/devops)--particularly in concert with 
[Kubernetes](https://rancher.com/using-kubernetes-api-go-kubecon-2017-session-recap/), which also emerged from Google. 
Go has expanded into other domains as well
with the CMS [Hugo](https://gohugo.io/) (which was used to build this site) and the microservices framework 
[Go kit](https://gokit.io/).





 
