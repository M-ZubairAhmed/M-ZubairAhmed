---
path: '/blog/01-migrating-bluebird-promises-to-native-ones'
date: '2019-2-6'
serial: '1'
title: 'Migrating Bluebird promises to native ones'
cover: 'https://res.cloudinary.com/md-zubairahmed/image/upload/c_scale,w_400/v1562130606/bruce-jastrow-lp2eQ-8nhhE-unsplash_l7ydwp.jpg'
tags: ['bluebirdjs', 'promises', 'javascript', 'code clean up']
excerpt: 'Promises are now pretty solid in browsers, so we had to remove support library for promises'
status: 'published'
comments: ''
corrections: 'https://github.com/M-ZubairAhmed/mzubairahmed.com/blob/master/src/data/posts/01-migrating-bluebird-promises-to-native-ones/index.md'
---

We have used bluebird because it was one of the best libraries for promises. But then promises have gained support in both nodejs and browser. That was the easy catch so we planned to remove it from our code base.

The functions we were using of that library were

- [BlueBirdPromise.promisify](http://bluebirdjs.com/docs/api/promise.promisify.html)
- [BlueBirdPromise.delay](http://bluebirdjs.com/docs/api/promise.delay.html)

### Promisify

Node js ships with `util` api which provides same requirement as that of bluebird.

The method works by taking in the common error-first callback style functions and returns a promises.

```javascript
// Before

import Promise from 'bluebird'
const readFile = Promise.promisify(fs.readFile)

// After

import util from 'util'
const readFile = util.promisify(fs.readFile)
```

### Delay

Purpose of this method is to returns a promise that will be resolved with after given milliseconds. Native way to do this was to promisify setTimeout function.

```javascript
// Before

import Promise from 'bluebird'
await Promise.delay(1000)

// After

import util from 'util'
const setTimeoutAsync = util.promisify(setTimeout)
await setTimeoutAsync(null, 1000)
```
