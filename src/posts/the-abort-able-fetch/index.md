---
path : "/blog/the-abort-able-fetch"
date : "2019-3-11"
title : "The Abort-able Fetch"
tags : ['FetchAPI','Abortcontroller','javascript','code clean up']
excerpt : "How to effeciently handle dangling network requests in web app."
---

Fetch API have come a long way into becoming a more mature, stable and supportive Web API. We use it extensively in our app. However we weren’t using its abort-able functionality i.e to stop or terminate requests in mid way. Support for abort able fetch was proposed in 2̶0̶1̶5̶ forever ago. Then in 2017 it finally was included in the standard and Edge was first to support it. Now it [mostly supported](https://caniuse.com/#feat=abortcontroller) amongst browsers.

### The poly fill

Still to support other browsers we use `whatwg-fetch` , which is a polyfill that implements Fetch whatwg [specifications](https://fetch.spec.whatwg.org/). In addition to that, we had to see if abort able feature was natively supported in the browser ; if not then we use poly filled fetch.

```javascript
import { fetch as fetchPloyfilled } from 'whatwg-fetch';

const isAbortableFetchSupported = 'signal' in new Request('')

const _fetch = isAbortableFetchSupported ? window.fetch : fetchPloyfilled;

// _fetch is then passed down via props to be used in app
```

### Preparing for aborting

Promises are aborted using the new API provided by the DOM standard. We create a new instance of `AbortController`. From this controller we grab a reference to `AbortSignal` object using the `AbortController.signal` property. This `AbortSignal` can then be passed on to fetch in its options.

```javascript
const abortController = new AbortController();
const abortSignal = abortController.signal

..
...

// later in fetch

await this.props.fetch(requestURL, {  
    method: 'GET',
    signal: abortSignal
    })

```

### Aborting

```javascript
abortController.abort();
```

Calling the above method will stop your fetch promise and throw an error, which you will need to catch and handle properly.

```javascript
(err.name === 'AbortError’) {
console.error(’fetch safely aborted for quick stats’, err);
}
```

### Why abort at all?

Are you familiar with “Warning: Can’t call setState (or forceUpdate) on an unmounted component. This is a no-op”. This usually happens if you have a state that is dependent on after effects of your network call, and the context in which that call was made is lost. In simple terms : You went to a page, that started a network request to get list of stuff. You then quickly navigated away to another page. There might be a state responsible for getting list and updating the UI. But now since you navigated away , setState was still called on the former page which is now unmounted. And hence the warning. Its important to take care of it as it leads to memory leaks and uncertainty.

> We abort all our network request in componentWillMount

That way we make sure no setStates are called if fetch request are aborted.