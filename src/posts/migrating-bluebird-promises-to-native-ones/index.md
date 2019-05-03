---
path : "/blog/migrating-bluebird-promises-to-native-ones"
date : "2019-2-6"
title : "Migrating Bluebird promises to native ones."
tage : ['bluebirdjs','promises','javascript','code clean up']
excerpt : "Promises are now pretty solid in browsers, so we had to remove support library for promises"
---

We have used bluebird because it was one of the best libraries for promises. But then promises have gained support in both nodejs and browser. That was the easy catch so we planned to remove it from our code base.

The functions we were using of that library were

 1. [BlueBirdPromise.promisify](http://bluebirdjs.com/docs/api/promise.promisify.html)
 1. [BlueBirdPromise.delay](http://bluebirdjs.com/docs/api/promise.delay.html)