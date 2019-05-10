---
path : "/blog/the-abominable-fetch"
date : "2019-2-16"
serial : "3"
title : "The Abominable Fetch"
tags : ['FetchAPI','Axios','javascript','code clean up']
excerpt : "Trimming down long browser Fetch API functions with Context API"
---

The first question i get is why use Fetch API instead of Axios library. Well there are many post online which do well to show the similarities and differences in both libraries. Well for us what worked will be discussed some other time.

Lets jump to the post.

### Current situation

Our fetch calls are long and cumbersome to write.

```javascript
await fetch(URL_GOES_HERE, {
   method: 'GET',
   mode: 'cors',
   credentials: 'same-origin',
   headers: {
     Authorization: `token ${this.props.user.loggedInUser.token}`,
     'Accept-Language': language,
     'Content-Type'] = 'application/json'
   }
 }
);
```

That's a lot of code to just “GET” from the API. Most of the above boiler plate code is repeated for other similar fetch functions across the app. It was evident that mode, credentials, headers can be abstracted out and shared with other fetch functions.

### Improvement

To be able to do this effectively, a createFetch wrapper was created which will pass default values to fetch. This new wrapper fetch was then passed down to app via Context React API.

```javascript
context.fetch = createFetch(window.fetch, {
    baseUrl: context.apiConfig.apiUrl,
    language: store.getState().intl.locale,
    authToken: store.getState().user.loggedInUser.token
```

You might be wondering where does token come even before app is started. So this context is created after appropriate APIs are called just before starting the app.

The createFetch wrapper consists of defaults which will add to the options of fetch function. As mentioned below :

#### Headers

```javascript
let options = {};

// language variable is passed down from createFetch params. 
options.headers[’Accept-Language’] = language;


// Since mostly JSON object is returned. 
options.headers[’Content-Type’] = 'application/json’;


// authToken variable is passed from createFetch params. 
options.headers.Authorization = `token ${authToken}`;
```

#### Mode

```javascript
options.mode = 'cors';
```

#### Credentials

```javascript
options.credentials = 'same-origin';
```

All the above options are only alloted if they are not explicitly passed. Concluding the defaults we then return the function as follows:

```javascript
fetch(url, options);
```

End result

```javascript
await this.props.fetch(URL_GOES_HERE, {
   method: 'GET'
   }
 );
```

This resulted in a clean and crisp fetch function. Since it was passed down though context, fetch was accessed via props. However the above function is completely flexible to other values.

> The default values can be overridden if required, to bring in different options.