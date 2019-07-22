---
title: "Introduction"
cover: "/images/blog-cover.jpg"
author: "jake"
date: "2019-07-21"
category: "tech"
tags:
    - misc
---
# Introduction

## Who am I?

My name is Jake, and I've been in the software development space for 15 years.
In that time I've developed Java Web Start apps, J2EE apps, desktop apps, 
set up automated testing frameworks, architected and developed enterprise 
applications in Java Spring, built AngularJs front-ends, constructed 
CI/CD pipelines, scripted my way out of every DevOps job I've had, 
and most recently have been developing ReactJs front-ends.  I'm sure there's
a lot more, but those are the big buckets.  In that time I've learned _a lot_ 
about the SLDC - so much so that I feel like I've forgotten some great ideas
and implementations over the years, which is where this blog fits in.

## What I Learned Today Blog

I've found through my experience that I'm constantly learning new tools,
new technologies, and new ways to think about a problem.  I've also found
that if that problem comes up again, unless I did some amazing documentation,
I usually have to go back to the same sources to do it again.

That's where this blog comes in.

I want a spot where I can log these step-by-step, so that in the future I 
can peruse them, write about new solutions I've found since writing the 
article, and hopefully be another spot some simple examples and answers
can be found around the community.

## Let's Get Started....

Most of this walkthrough can be found via 
[this gatsby starter project](https://www.gatsbyjs.org/starters/GatsbyCentral/gatsby-v2-starter-casper/)

### How Was This Blog Built


This blog was created using a framework called [Gatsby](https://www.gatsbyjs.org/).
To install Gatsby, first install npm then run
```bash
npm install -g gatsby-cli
```
```
mkdir blog
gatsby new blog https://github.com/haysclark/gatsby-starter-casper
```

components/GetNavList
```
-    to: "/about/"
+    to: "/author/jake"
```

