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
- Agile

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

Although `null` exists in Scala as a JVM language, you should never interact with it directly. Instead, you should work with `Option`, a 
[monad](https://stackoverflow.com/questions/44965/what-is-a-monad) designed specifically for this purpose. 
We describe `Option` in more detail in [our tutorial](https://www.youtube.com/watch?v=rbZ6GzR8B7I),
but essentially it compels you to account for the absence of a value at *compile* time. This avoids the costly
`NullPointerException` at runtime that has sent thousands of [Java](/categories/java) developers to therapy.

{{< gist neilchaudhuri 0faef521f6bb22d32ef75b1c041b6b62 >}}

In this example, the `findStudent` function returns an `Option[Student]`. If the `Option` contains a value, the client 
can transform it into a `String` with the `map` function on `Option`; otherwise, `getOrElse` handles the absent value.

`Option` allows you to safely work with potentially absent values 
[without fear](https://marvel.fandom.com/wiki/Daredevil:_The_Man_Without_Fear_Vol_1_1). The compile-time safety makes 
you so productive. On the other hand, every transformation on the `Option`--via `map`, `filter`, *etc.*--produces a new
value because of the functional programming bias towards [immutability](/blog/2018/09/18/the-business-case-for-functional-programming/).
It almost certainly isn't a factor for you, but if memory is at a premium, maybe this is a concern.


### Go  

Go handles potentially absent values through completely different idioms. Functions can return multiple return values. 
When a value is present, it's idiomatic to return the value and a `bool` value (named `ok` by convention) of `true`; otherwise, it returns 
the ["zero value" of the return type](https://tour.golang.org/basics/12) and `false`. The client uses an imperative 
`if` statement to distinguish.

{{< gist neilchaudhuri 5f4c9844dbfe1d92fb200c8089c00229 >}}

In this example, the `findStudent` function returns a `Student` *and* a `bool`. Go allows you to initialize and test 
conditions in one line, and that's what we see here. If `ok` is `true`, we know we got something and act 
accordingly; if `ok` is `false`, we know the value is absent and handle this contingency.

For those uncomfortable with monad composition and higher-order functions, Go provides a very simple alternative in keeping
with its mission. On the other hand, Go engineers need the knowledge and discipline to apply these language features and idioms.
There is no dedicated type like `Option` to help. Also, unlike with the composability afforded by monads like `Option`,
if you need to compose multiple potentially absent values, you need to write multiple `if` conditions; that can feel verbose.
The simplicity may well be worth it though.


## Error Handling

This is another inglorious task that is critical to good software engineering. As programs become big and complex, proper
error handling is critical to help diagnose bugs to move builds to production as quickly as possible. 

### Scala

As you might imagine from a language that places so much value on immutability and composability, Scala offers
`Try` for error handling. Since it's a monad like `Option`, it works in a very similar way--except that it compels
you to account for a possible error at compile time rather than the absence of a value. A `Try[Double]`, for example,
returns either a `Double` if all is well or an error (or more precisely an instance of `Throwable`) otherwise.  

{{< gist neilchaudhuri 5c4cc893d46e107aac4ee163f22e9d0d >}}

In this example, the `squareRoot` function returns `Try[Double]`, and the client does something a bit more complicated 
than the prior example. It calls `squareRoot` twice and uses a [for comprehension](https://docs.scala-lang.org/tour/for-comprehensions.html),
which is syntactic sugar for otherwise cumbersome `map` and `flatMap` transformations, to take advantage of the composability of 
monads to sum the results. If both calls work out, then the result is a `Try` with the sum; if either fails, the error information
is passed on. You can do similar with `Option` too. This is why monad composability in Scala is so cool. The same pattern 
works on very different types as long as they follow the [monad laws](https://miklos-martin.github.io/learn/fp/2016/03/10/monad-laws-for-regular-developers.html).

As before though, keep in mind that you are generating new objects with each transformation. This means you're paying 
for the protection immutability affords you with memory.

### Go

Just as `Option` and `Try` in Scala are similar, handling absent values and handling errors in Go are similar. Here again Go 
takes advantage of multiple return values, but rather than a value accompanied by a `bool`, idiomatic Go error handling features a value accompanied by
an `Error` (named `err` by convention). If `err` has the value of `nil`, then you can work with the value because it's all good; 
otherwise, you handle the error and (probably) ignore the zero-value. 

{{< gist neilchaudhuri 711fb4328e611dae4616de45ea3d4228 >}}

In this example, look at the `sumRoots` function, which is the client of `squareRoot`, which returns a value and an error. 
Those are saved from the first call to `squareRoot`. If there is an error, the function returns immediately; otherwise, it does the same 
with the second call to `squareRoot`. If the function makes it to the end, then it returns the sum and a `nil` error. 
You will see a similar approach in `main` with the call to `sumRoots`.

There are a few interesting things to note. First, once again the code reflects Go's bias toward simplicity. Furthermore,
as immutability is not a priority, variable reuse is common in Go. In 
this case, `err` is reused to store the error returned from `squareRoot`. It doesn't happen here, but it isn't unheard of 
to reuse the value variable as well once its initial value has served its purpose. Finally, we see a common pattern:

* Call a function
* Test `err` for `nil`
* If an error is found, return
* Call the next function
* Test `err` for `nil`
* If an error is found, return
* Lather, rinse, repeat

Absent Scala's function composition, it's a fair bit of boilerplate--particularly when you are calling a lot of functions 
that may return errors. You can take advantage of language features to make it more elegant like 
[this pattern utilizing interfaces and pointers from Rob Pike](https://golang.org/doc/faq#exceptions),
but this is one of the ways where Go's simplicity is a bit overrated. Building custom abstractions from Go's toolkit requires creativity,
and you will have to do that often when you use Go to build mature applications. Still, it is almost certainly easier to 
master advanced patterns in Go than it is in Scala.

## Collections

I don't have to tell you that manipulating data from a database, a [stream](https://medium.com/stream-processing/what-is-stream-processing-1eadfca11b97),
a REST request, or a host of other sources is a common task in application development. Languages that facilitate seamless
transformation and aggregation of collections of data make your life a lot easier.

### Scala

Scala has a vast library of collections--both immutable and mutable though immutable is preferred--each of which offers in turn
a vast collection of higher-order functions that let you manipulate the collection in numerous ways. 

{{< gist neilchaudhuri fb288ef2b338930408fe300989ad3c0c >}}

In this example, given a `List` of words, the code uses `groupBy` to convert it into a `Map` of each word (lowercased to normalize them) 
to a list of occurrences of each word. Finally, those lists are transformed into their sizes, and the result is a `Map` 
of each word to its count.

There isn't much to see. This is a credit to Scala's powerful abstractions. Still, it is important to keep in mind that this
code performs multiple *O(n)* traversals and with each one consumes memory with an entirely new collection--all but the first 
and last of which are immediately thrown away. 

### Go

Go naturally takes a far more lightweight approach to collections. You will essentially only deal with [maps](https://blog.golang.org/go-maps-in-action) and
[slices](https://blog.golang.org/go-slices-usage-and-internals), which are array views that enable memory-efficient
operations on the backing arrays. 

{{< gist neilchaudhuri 357962559b337e02be3b21d2a6a9ceb9 >}}

In this example, the code uses `make` both to create an empty map (with values defaulting to the zero value, in this case literally 0) 
to hold the word counts and to create a slice containing
the words. It simply iterates over the slice and builds the word count using the `ok` idiom you saw before to check
if there is an existing entry for the word in the map.
 
The code is more verbose than its Scala counterpart, but it is significantly more efficient in time and space. There is a 
single *O(n)* traversal with constant-time lookups in the map, and we maintain only two collections the entire time. The efficiency
of Go collections and the simplicity of using them are among the best reasons to use Go in a project.



find yourself making creative workarounds





 
