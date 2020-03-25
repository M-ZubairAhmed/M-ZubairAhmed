---
path: '/blog/06-modern-ways-of-ui-end-to-end-testing-with-cypress'
date: '2020-3-20'
serial: '6'
title: 'Modern ways of UI end to end testing with Cypress'
cover: 'https://res.cloudinary.com/md-zubairahmed/image/upload/c_scale,w_400/v1562127221/toa-heftiba-ZWKNDOjwito-unsplash_lf5nub.jpg'
tags:
  [
    'webpack',
    'javascript',
    'babeljs',
    'prettier',
    'webpack-dev-server',
    'build-tools',
    'starter-kits',
    'boilerplate',
  ]
excerpt: 'A look at how to get up and running with Cypress JS : a complete end to end testing tool that can help you sleep better at friday night knowing you deployed your app to production earlier that day'
status: 'draft'
comments: ''
corrections: ''
---

## Why write tests at all?

There might be various reasons for a team to adapt automated testing of their apps, Some are really particular about 100% code coverage, while some don't want to repeatedly test the same functionality again and are content if that doesn't break when new code push happens and there are others too who write as many tests that will get the PR merged. For many reasons out there i feel they all can be boiled down to two fundamental reasons :

- &#8226; To ensure the app can work for our users.
- &#8226; To enhance app development workflow.

<br/>

The first one is directed towards user experience and the second one pertains to developer experience. No matter what the reason for testing can be it essentials should result in our users use the application flawlessly. And having them integrated in our development workflow means any new code changes doesn't break existing features thereby enabling developers to ship code confidently. I believe setting those two goals before writing tests can result in significant success.

## What tests to choose

There are many kind of tests in software engineering. Static tests, Unit tests, Integrations test, End to End test, A/B tests, Stress testing, Smoke tests, User Acceptance testing and many more. What testing to choose is dependent on the type of application, its use etc. And if you are just starting out, multitude of tests might be scary. To make the matter worse, when one person talks about a certain tests its highly probable that the definition of that test varies from another person's. In this post we will try to establish a basic definition of few of the tests.

In this blog post we are going to discuss a little about first three test and dive a bit deep on the fourth type of test i.e end to end test in the context of user interface of an app. Lets start with the first type of test in User Interfaces.

Static testing
Lets look at the following code :

```js
const add = (number1, number2) => {
  return number1 + number2
}

const padding = 10

const border = add(padding, width)
```

You probably don't need to run the code to identify that width variable is not defined. Such and much more complex cases such as mix up of variable types, accessing unknown object property etc can be easily caught via static typing and linting tools like Typescript, Eslint, Flow. We tend to call static tests.

## Unit testing

Take a look at the following code, if you are unfamiliar with the syntax used, its totally fine, let the code deliver literal meaning like toEqual() function means result should be equal to.

```js
import { add } from './add.js'

test('Adding One and One should be Two all the time', () => {
  let width = 1
  let padding = 1
  expect(add(width, padding)).toEqual(2)
})
```

We are testing a single function called add and giving it some condition and expecting it to deliver same result test after test no matter what has happened around the app in which it was defined. So by definition we are essentially testing a single unit. What can this unit be? It could be a function, class, module or an object even. Point to be highlighter here is that they do not depend on other units, that is they are isolated.

But what if we want to test two units together? there is where we come to our next testing type : Integration test.

## Integration testing

In these kind of tests we verify that more than one units works harmoniously with each other. Unlike unit tests, integration tests are not isolated from the components.
.
.
.
.
.

//After selection, next question is usually on how many of those tests to write?. Well there is actually no rule of thumb that an application should have x number of A tests and y number of B tests. There are no definitive percentage or ratio of test. But I always try to remember the goals we mentioned earlier, our tests should be directed to achieve those goals.
