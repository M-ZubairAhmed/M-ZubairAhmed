---
path : "/blog/aaaa"
date : "2019-5-1"
title : "QWWQ"
tags : ['bluebirdjs','promises','javascript','code clean up']
excerpt : "Promises are now pretty solid in browsers, so we had to remove support library for promises"
---

We have used bluebird because it was one of the best libraries for promises. But then promises have gained support in both nodejs and browser. That was the easy catch so we planned to remove it from our code base.

The functions we were using of that library were

 1. [BlueBirdPromise.promisify](http://bluebirdjs.com/docs/api/promise.promisify.html)
 1. [BlueBirdPromise.delay](http://bluebirdjs.com/docs/api/promise.delay.html)