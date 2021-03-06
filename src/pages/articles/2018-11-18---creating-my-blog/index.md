---
title: Creating my blog
date: "2018-11-18"
layout: post
draft: false
path: "/posts/creating-my-blog"
category: "Blog"
tags:
  - "Website"
  - "Setup"
description: "I've always wanted a blog of my own. Something that I can link people to, when I pop up on somebody's twitter feed or facebook suggestions. Somewhere I can document my work and share my learnings with the world."
---

## Motivation

I've always wanted a blog of my own. Something that I can link people to, when I pop up on somebody's twitter feed or facebook suggestions. Somewhere I can document my work and share my learnings with the world. A few months back, I got excited, bought a domain and created a website. But for an unknown reason, I didn't start writing. But once I set up my wife's [website](https://samreenk.com) as a birthday gift, I knew what I wanted to do with my site. It's true that there's nothing more motivating than a deadline! I got this weird motivation to start writing.

I write about some details about my previous setup below as well as why I finally created a different one and took up the time to start writing. Read along if you're interested, or [follow me](https://twitter.com/maaz93) on Twitter where I'll share new blogs frequently.

## Previous setup

My previous setup was built on top of Jekyll and Github pages. I owned a Windows laptop then. The Jekyll setup on that was extremely painful and the dev experience wasn't great. Plus, I am no Ruby expert. The whole thing was a black box, and I wasn't ready to get into it. The community around Jekyll and Ruby is awesome, but it was just not my cup of tea.

I'd used [minimal mistakes](https://mmistakes.github.io/minimal-mistakes/) Jekyll theme and it was really great. If you're doing a Jekyll setup, I'd definitely recommend this theme.

## Current

I setup my new site with Netlify and Gatsby. I literally set it up with [1 click](https://app.netlify.com/start/deploy?repository=https://github.com/alxshelepenok/gatsby-starter-lumen) and a few keystrokes. I chose Netlify because it was super super easy. The two most compelling features for me, apart from the fact that it was simple, were

- Automatic preview builds for pull requests.
- Possible Netlify CMS integration in the future. This is really cool. I've set it up once and it's great.

Reasons for choosing Gatsby were many. Primary reason was that it's built on React. I have a huge personal interest in React and everything around it at the moment. Nothing like it to maintain a site built on React. Gatsby comes with an amazing set of plugins and a great plugin architecture. I intend to figure it out and a learn a bit from it. And things like code splitting, progressive web app support, GraphQL etc. drew me towards it more.

You can head over to my [blog repo](https://github.com/maaz93/blog) to check out the code, if you want. I used the [gatsby-starter-lumen](https://github.com/alxshelepenok/gatsby-starter-lumen) starter to set it up.

## Challenges

There are few challenges in maintaining a blog, but I'm excited to take them up. Majorly, the starter I used has a lot of outdated dependencies, `react@15` being one of them. I want to experience the upgrading challenge. Also, I plan to put things out faster. I've been holding back a lot, and I want to be able to share my experiences and learnings much faster.

Thanks for reading!
