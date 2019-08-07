---
title: "Cancel In-Flight Axios Calls"
cover: "/blog/images/hidden-beach-between-mountains-in-north-norway-picjumbo-com.jpg"
author: "jake"
date: "2019-07-29"
category: "tech"
tags:
    - reactjs
    - javascript
---

## The Problem

Today I ran into an issue where I had a couple of buttons on screen to move the date
up or down a day, which would refresh the screen with all the data for that day.  The
functionality worked great, but at some point the page was making upwards of 10 REST
calls on each refresh.  This wouldn't have been an issue if they were truly being done
asynchronously, the renders would just ignore those returns, but the browser was taking 
these calls and adding them to a queue.  Again, this wouldn't have been an issue, except 
that one could hit the previous day button 5, 10, or 100 times - queue up hundreds or even
thousands of outbound calls, and then the UI would just patiently wait as the data stream
from the calls came in.  

This was unacceptable for my UI responsiveness, so I looked into how to cancel in-flight calls.

## State of the State

In my current project, all of my Rest calls go through a single hook called `useRest`

## Let's Get Started....

Most of this walkthrough can be found via 
[this gatsby starter project](https://www.gatsbyjs.org/starters/GatsbyCentral/gatsby-v2-starter-casper/).

### How Was This Blog Built

For this post we'll take a deep dive into how to build this and deploy it to GitHub pages for free.

#### Pre-Reqs
This blog was created using a framework called [Gatsby](https://www.gatsbyjs.org/).
To install Gatsby, first install npm then run
```bash
npm install -g gatsby-cli
```
After Gatsby is installed, create a new directory and run the Gatsby `new` command
to create the code scaffolding.
```bash
mkdir blog
gatsby new blog https://github.com/haysclark/gatsby-starter-casper
```
Delete the `package-lock.json` file and run `npm install`
```bash
cd blog
rm package-lock.json
npm install
```
You can see it run locally by:
```bash
gatsby develop
```

#### Github
First, initialize your local git repo with `git init`.  Then create a new repo under your github account.  Once
created you can link your local repo to your git repo with `git remote add origin https://github.com/user/repo.git`, 
mine was `git remote add origin https://github.com/aceluby/blog.git`

#### Customization
##### SiteConfig.js

The first file we're going to update is the `data/SiteConfig.js` file.  This file
drives a lot of the static content of our site.

I changed the following:
```yml
  blogPostDir: "posts", // The name of directory that contains your posts.
  blogAuthorDir: "authors", // The name of directory that contains your 'authors' folder.
  blogAuthorId: "jake", // The default and fallback author ID used for blog posts without a defined author.
  siteTitle: "What I Learned Today", // Site title.
  siteTitleAlt: "A Daily Engineering Blog", // Alternative site title for SEO.
  siteUrl: "https://aceluby.github.io/", // Domain of your website without pathPrefix.
  pathPrefix: "/blog", // Prefixes all links. For cases when deployed to example.github.io/gatsby-starter-casper/.
  siteDescription: "A technology blog for software engineers", // Website description used for RSS feeds/meta description tag.
  siteRssAuthor: "What I Learned Today", // The author name used in the RSS file
  sitePaginationLimit: 10, // The max number of posts per page.
  googleAnalyticsID: "UA-111982167-1", // GA tracking ID.
  siteSocialUrls: [
    "https://aceluby.github.io/resume/",
    "https://stackoverflow.com/users/11500664/jake-luby",
    "https://twitter.com/aceluby",
    "mailto:jake.luby@gmail.com"
  ],
  postDefaultCategoryID: "Tech", // Default category for posts.
  // Below is what
  userLinks: [
    {
      label: "Tag - Misc",
      url: "/blog/tags/misc",
    },
  ],
  copyright: {
    label: "What I Learned Today" // Label used before the year
  },
};
```

Note that in the `userLinks` section I decided to build a list of the tags that I'm using.  I didn't have a 
great way to go about this and there's no built in way to see all the tags - so it's manual for now.  That might
be something that I look to update in the future (and hopefully a future blog post!).

##### Authors

In `content/authos/authors` I copy/pasted `casper.json` to a new file `jake.json`.  That new file looks like:

```json
{
   "uid": "jake",
   "name": "Jake Luby",
   "image": "https://media.licdn.com/dms/image/C4E03AQEEKBDkpdoKwA/profile-displayphoto-shrink_200_200/0?e=1565222400&v=beta&t=K1hj-UcXtyYRN6ahApVNZwHqT_MD19micnakHM55aLc",
   "url": "https://aceluby.github.io/resume/",
   "location": "Minneapolis, MN",
   "bio": "Technology leader with 15 years of SLDC experience."
 }
```

##### Posts

Based on my site config file, posts should be found in `content/posts` organized by date folders.  Create a new
folder with today's date and add an `index.md` file.  You can copy/paste one from the examples given
in the starter for now.

##### About

One of the things I didn't like is the `About` link in the menu.  It's geared more for a blog with multiple authors, 
and I don't really need it, or want to create a new ReactJs component from scratch.  So, instead I'm going to link the
generated profile page.  To do that go to `components/Navigation/GetNavList` and update `to: "/about/"` to 
`to: "/author/<yourAuthorNameHere>"`.  Now your main page will link to your bio when clicked.

##### robots.txt

In order for the site to work on github, `static/robots.txt` needs to be updated with the correct sitemap.  I
updated mine to include `sitemap: https://aceluby.github.io/blog/sitemap.xml`

#### Running on GitHub Pages

Once you have updated the configuration and everything looks good locally, you can publish the changes to github.
You can do this locally by running `npm run build:gh`.  This will build the gatsby site for you and publish it
to your github pages.  To view go to https://_user_.github.io/_repo_/, mine is found at https://aceluby.github.io/blog/.

To save the blog post, but not publish it, just check the `index.md` file into your git repo and run the build script 
once it's ready.

#### Enjoy Your Blog!

You now have a fully functional, personalized blog for free!  My code can be found here: https://github.com/aceluby/blog
for reference.  

_Authors Note_
Since writing this I've found a few bugs here and there in displaying of things like backgrounds.  Details around
those changes have not been captured above, but is in the code.