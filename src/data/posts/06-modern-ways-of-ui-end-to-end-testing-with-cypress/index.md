---
path: '/blog/06-modern-ways-of-ui-end-to-end-testing-with-cypress'
date: '2020-8-20'
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
status: 'published'
comments: 'https://twitter.com/Mattermost/status/1296500558367424512'
corrections: 'https://github.com/M-ZubairAhmed/M-ZubairAhmed/blob/master/src/data/posts/06-modern-ways-of-ui-end-to-end-testing-with-cypress/index.md'
---

_This blog post was originally published in [Mattermost blog](https://mattermost.com/blog/modern-ways-of-end-to-end-testing-with-cypress-js/)_.

## Why write tests ?
The ultimate goal of writing tests should be improving the user’s in-app experience and increasing developers’ confidence in shipping new or improved apps.

The [Mattermost](https://mattermost.com) team has been continuously writing different types of tests to improve the product. Such extensive automated testing has enabled them to ship a [new release](https://docs.mattermost.com/administration/release-lifecycle.html)—with new features and improvements—every single month for the last few years. Thousands of developers contribute to the codebase. With automated testing in place, the core team at Mattermost can manage, review, and merge such contributions into the product with confidence. 

## Types of tests
There are many types of tests in software engineering: static tests, unit tests, integrations tests, end-to-end tests, A/B tests, stress tests, smoke tests, and user acceptance tests, to name a few. 

If one is starting out, it can be a bit intimidating to see such a huge list. To make matters even worse, when one person is talking about a specific test, it’s quite possible that another person might define that test differently. 

In this blog post, we are going to talk a little about static, unit, and integration tests before diving into end-to-end testing.

 
### Static testing
Lets take a look at a small code snippet of our imaginary calculator app:

```js
const add = (...operands) => {
  let sum = 0

  operands.forEach((operand) => {
    sum = sum + operand
  })

  return sums
}
```

You’ve probably seen it already. The return variable needs to be `sum` instead of `sums`. While this example might be simple, other cases—such as accessing unknown objects’ properties error and mixing up variables—can be identified early on by static typing and linting tools such as ESLint, Typescript, and Flow. We group these into __static tests__.

### Unit testing
Let’s now take a look at an actual test. Here, we wrote a small test to test the same add function we saw earlier:

```js
import { add } from './add.js'

test('Adding  function to return correct sum of numbers', () => {
  expect(add(1, 1)).toEqual(2)
  expect(add(2, 3)).toEqual(5)
})
```

It’s totally fine if you’re not familiar with the syntax. We’ll interpret the code in simple language. We wrote a suite of tests for a single add function. We called the function with certain numbers and expected it to return the correct sum of those numbers. Although our app has other features such as subtraction and division, we are going to test them separately. 

Such isolated testing is called __unit testing__. A unit, however, doesn’t always have to be a function. It could be a class, module, or even an object.

But what if we would like to test more than one such unit in tandem? That’s where Integrations tests come into play.

### Integration testing
In these kinds of tests, we verify that more than one unit works harmoniously with each other. Unlike unit tests, __integration tests__ take into account all the working parts of a front-end application, and most calls to backend APIs are mocked. With that setup, it takes relatively less effort to cover a lot of application code and tests run at reasonably fast speeds.

```js
describe('Add page of the app', () => {
  it('Adds number correctly', () => {
    // before the request goes out we need to set up spying
    cy.server()
    cy.route({
      method: 'POST',
      url: '**/add/?operand1=23&operand2=10',
      response: {
        sum: '33',
      },
    }).as('getSumOfNumbersAPI')

    cy.visit('/add-page')

    // # Add the number for first operant
    cy.findByLabelText('Number 1').type('23')

    // # Add the number for second operand
    cy.findByLabelText('Number 2').type('10')

    // # Click calculate button
    cy.findByText('Calculate').click()

    // # Wait for API to get complete
    cy.wait('@getSumOfNumbersAPI').should((xhr) => {
      expect(xhr.status).to.equal(200)
      const { sum } = xhr.response.body

      // * Verify we get the correct sum
      cy.findByLabelText('Sum of number').should('have.value', sum)
    })
  })
})
```

In the above example, we assumed we were relying on the API to give us the sum of two numbers instead of doing computation on the client side. We don’t have any underlying implementation details but relied on the final result—which is exactly how a user would see and use the application.

We found our inputs where we first entered the numbers and then clicked on the “Calculate” button. We then set up our mock API request at the beginning of our test. That way, when the request actually goes out, our testing framework will catch it and return the mock response. 

Finally, the sum of the numbers is verified.

### End to end tests
Contrary to all the types of tests above, __end-to-end tests__ run the entire application. This means your client, API, database and third-party services are all included. 

As a result, end-to-end testing gives us very high confidence that a critical user flow works efficiently. They are a bit expensive to set up and are a bit slow, and they also require a lot of initial setup. But these tests are closest to how a user would test the application.

```js
describe('Add page of the app', () => {
  it('Adds numbers correctly', () => {
    cy.visit('/add-page')

    // # Add the number for first operant
    cy.findByLabelText('Number 1').type('23')

    // # Add the number for second operand
    cy.findByLabelText('Number 2').type('10')

    // # Click calculate button
    cy.findByText('Calculate').click()

    // # Wait for API to get complete
    cy.wait('1000')

    // * Verify we get the correct sum
    cy.findByLabelText('Sum of number').should('have.value', '33')
  })
})
```

The next question we probably have is usually something like this: _How many of these tests should we write?_

Well, there isn’t a rule of thumb that states that an application should have `x` number of `A` tests and `y` number of `B` tests. There are no definitive percentages or ratios of tests, either. Instead, add confidence to your codebase by using a mix of several different types of tests.

> "The more your tests resemble the way your software is used, the more confidence they can give you." - [Kent C. Dodds (@kentcdodds) March 23, 2018](https://twitter.com/kentcdodds/status/977018512689455106)

## Getting started with end-to-end testing
There are many tools that help you do end-to-end testing of web applications. Let’s directly dive into [Cypress](https://www.cypress.io/) - a testing tool that aims to help you write faster, easier, and more reliable tests. It already has a bunch of assertions and other tools bundled together.

It’s easy to add Cypress to your existing project via [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/).

```properties
npm install cypress --save-dev
```

Once installed, be sure to add a script in your `package.json` for easy access to the Cypress dashboard.

```json
"scripts": {
    "cypress": "cypress open"
},
```

When you first run Cypress with the above npm command, it’s going to take a while to install a few prerequisites. Next, you will be presented with the __Cypress dashboard__ which will list all the tests in your app. It’s going to show you some pre-written tests. Check them out to see if you like them and delete them later on.

<div style="text-align:center"><img src="https://user-images.githubusercontent.com/17708702/89713497-9debb680-d9b5-11ea-94a4-0735a3fe1a18.png"/></div>

If you noticed, when you ran the command earlier, a new folder was also created in your root project folder named `cypress`.

```
|cypress
-|fixtures
-|integrations
-|plugins
-|support
```

We will focus on the `integrations` folder, as that will be the folder where you will be writing your test. Now, before we move on to actually writing a test, let’s install another library which will help us write them from an actual user’s point of view : [Testing library](https://testing-library.com/)

```properties
npm install @testing-library/cypress --save-dev
```

In order for Cypress to be aware of our newly installed "testing-library", we need to add the single command to `cypress/support/commands.js`:

```js
import "@testing-library/cypress/add-commands";
```

Now, we are ready to start writing our first end-to-end test! 

To remove the friction of creating a functional app ourselves, let’s use the production-ready Mattermost app. To set up your Mattermost development environment, [check out their amazing dev docs](https://developers.mattermost.com/contribute/webapp/developer-setup/). The documentation is fairly pretty straightforward, but if you do run into problems, you can always head over to the [community chat](https://community.mattermost.com/) to get help.

Mattermost uses Cypress intensively to automate testing. Read more about [how Mattermost uses Cypress](https://mattermost.com/blog/automated-ui-testing-with-cypress/).


### Writing your first test

Now that you’re ready to write and run some tests, let’s open the `mattermost-webapp` in your favorite code editor. It’s a huge codebase because it’s a big and complex product, but give it some time and all of it will start to make sense. We are going to write some tests for Mattermost’s login page.

<div style="text-align:center"><img src="https://user-images.githubusercontent.com/17708702/90948728-6bcf5f80-e45f-11ea-94d1-8ba4060d37bd.png"/></div>


Next, we head to the `e2e/cypress` folder and in it the `integrations` folder. You can see multiple test folders inside `integrations`. Each folder represents either a feature or component of the app in testing. Find the folder `signin_authentication` and look for the [login_spec.js](https://github.com/mattermost/mattermost-webapp/blob/7fabd71aeb5a34b58411d95b0090afe65f5d7409/e2e/cypress/integration/signin_authentication/login_spec.js) file.


```js
describe('Login page', () => {
  let config
  let testUser

  before(() => {
    // Disable other auth options
    const newSettings = {
      Office365Settings: { Enable: false },
      LdapSettings: { Enable: false },
    }
    cy.apiUpdateConfig(newSettings).then((data) => {
      ;({ config } = data)
    })

    // # Create new team and users
    cy.apiInitSetup().then(({ user }) => {
      testUser = user

      cy.apiLogout()
      cy.visit('/login')
    })
  })

  it('should render', () => {
    // * Check that the login section is loaded
    cy.get('#login_section').should('be.visible')

    // * Check the title
    cy.title().should('include', config.TeamSettings.SiteName)
  })

  it('should match elements, body', () => {
    // * Check elements in the body
    cy.get('#login_section').should('be.visible')
    cy.get('#site_name').should('contain', config.TeamSettings.SiteName)
    cy.get('#site_description').should(
      'contain',
      config.TeamSettings.CustomDescriptionText
    )
    cy.get('#loginId')
      .should('be.visible')
      .and(($loginTextbox) => {
        const placeholder = $loginTextbox[0].placeholder
        expect(placeholder).to.match(/Email/)
        expect(placeholder).to.match(/Username/)
      })
    cy.get('#loginPassword')
      .should('be.visible')
      .and('have.attr', 'placeholder', 'Password')
    cy.get('#loginButton').should('be.visible').and('contain', 'Sign in')
    cy.get('#login_forgot').should('contain', 'I forgot my password')
  })

  it('should match elements, footer', () => {
    // * Check elements in the footer
    cy.get('#footer_section').should('be.visible')
    cy.get('#company_name').should('contain', 'Mattermost')
    cy.get('#copyright')
      .should('contain', '© 2015-')
      .and('contain', 'Mattermost, Inc.')
    cy.get('#about_link')
      .should('contain', 'About')
      .and('have.attr', 'href', config.SupportSettings.AboutLink)
    cy.get('#privacy_link')
      .should('contain', 'Privacy')
      .and('have.attr', 'href', config.SupportSettings.PrivacyPolicyLink)
    cy.get('#terms_link')
      .should('contain', 'Terms')
      .and('have.attr', 'href', config.SupportSettings.TermsOfServiceLink)
    cy.get('#help_link')
      .should('contain', 'Help')
      .and('have.attr', 'href', config.SupportSettings.HelpLink)
  })

  it('should login then logout by test user', () => {
    // # Enter username on Email or Username input box
    cy.get('#loginId').should('be.visible').type(testUser.username)

    // # Enter password on "Password" input box
    cy.get('#loginPassword').should('be.visible').type(testUser.password)

    // # Click "Sign in" button
    cy.get('#loginButton').should('be.visible').click()

    // * Check that the Signin button change with rotating icon and "Signing in..." text
    cy.get('#loadingSpinner')
      .should('be.visible')
      .and('contain', 'Signing in...')

    // * Check that it login successfully and it redirects into the main channel page
    cy.get('#channel_view').should('be.visible')

    // # Click hamburger main menu button
    cy.get('#sidebarHeaderDropdownButton').click()
    cy.get('#logout').should('be.visible').click()

    // * Check that it logout successfully and it redirects into the login page
    cy.get('#login_section').should('be.visible')
    cy.location('pathname').should('contain', '/login')
  })
})
```

If you take a quick look at it, you would see the usage of element IDs a lot. This was the [first test](https://github.com/mattermost/mattermost-webapp/pull/2045/files#diff-42ef00b1977247965748601bda20ccb1R10) written at Mattermost, when the team was just getting started with end-to-end testing. Many best practices the team uses now can be found in more recent test files. But somehow, this particular test was left unchanged, so it’s a good opportunity for us to submit an improved test as a pull request.

Each test specification is contained inside the `describe` block with the main heading of our test suite, which is followed by many `it` blocks which hold the individual test. You can also see use of `before`, which is designed to run at the beginning of your test. Without going into much detail, at this point in time it is sufficient for us to know that `before` creates a new test user and redirects to a login page. Clear out everything inside of the `describe` except for the `before` block. Add a new `it` block with the heading "should render all elements of the page".

```js
describe('Login page', () => {
  let config
  let testUser

  before(() => {
    // Disable other auth options
    const newSettings = {
      Office365Settings: { Enable: false },
      LdapSettings: { Enable: false },
    }
    cy.apiUpdateConfig(newSettings).then((data) => {
      ;({ config } = data)
    })

    // # Create new team and users
    cy.apiInitSetup().then(({ user }) => {
      testUser = user

      cy.apiLogout()
      cy.visit('/login')
    })
  })

  it('should render all elements of the page', () => {
    // start writing here
  })
})
```

The purpose of our first test is to check if all the elements are rendered in the page. To start off, we verify the URL matches that of the login page. Cypress gives us a command — [cy.url](https://docs.cypress.io/api/commands/url.html#Syntax) — to get the current URL of the page:

```js
// * Verify URL is of login page
cy.url().should('include', '/login');
```

Notice the use of `should`. It is the assertion that — when supplied with a suitable chainer and value — creates a test case which Cypress then verifies. In the above code, the line it translates to: A URL __should__ include `/login`. Cypress runs this case and if it fails, the test is failed — and vice versa.

We can also verify the title of the document with the "[cy.title](https://docs.cypress.io/api/commands/title.html#Syntax)" command. In the `before` block, we get access to the created teams config object, which contains the document title for the page.

```js
// * Verify title of the document is correct
cy.title().should('include', config.TeamSettings.SiteName);
```

Now, we need to check if the page contains the fundamental elements required for login, e.g., the email/username field, the password field, and a submit button.

```js
// * Verify email/username field is present
cy.findByPlaceholderText('Email or Username').should('exist').and('be.visible');

// * Verify possword is present
cy.findByPlaceholderText('Password').should('exist').and('be.visible');

// * Verify sign in button is present
cy.findByText('Sign in').should('exist').and('be.visible');
```

We are finding the input fields by placeholder and the submit button by text, similar to how an actual user would find them. To add multiple assertions, we can chain the `and` function. Specifically, in the above case, we are verifying if the element is visible to the user and it’s not scrolled off the screen.

We will now try to find out if the page has a forgotten password link and if it points to the correct URL:

```js
// * Verify forgot password link is present
cy.findByText('I forgot my password.')
  .should('exist')
  .and('be.visible')
  .parent()
  .should('have.attr', 'href', '/reset_password')
```

There’s something new we did in the above assertion; notice the use of [parent](https://docs.cypress.io/api/commands/parent.html#Syntax). To answer that question, let’s look at the HTML structure of I forgot my password:

```html
<a href='/reset_password'>
  <span>I forgot my password.</span>
</a>
```

Find by text would return us the `span` element — not the anchor element which actually contains the link. A good practice would have been to use it inside of the anchor itself. But here, due to translation reasons, the team had to use the above way. The `parent` command helps to go a level up from the span and then we can check if the correct URL exists on the parent `<a>`.

So far, this is the complete test we have written:

```js
it('should render all elements of the page', () => {
  // * Verify URL is of login page
  cy.url().should('include', '/login')

  // * Verify title of the document is correct
  cy.title().should('include', config.TeamSettings.SiteName)

  // * Verify email/username field is present
  cy.findByPlaceholderText('Email or Username')
    .should('exist')
    .and('be.visible')

  // * Verify password is present
  cy.findByPlaceholderText('Password').should('exist').and('be.visible')

  // * Verify sign in button is present
  cy.findByText('Sign in').should('exist').and('be.visible')

  // * Verify forgot password link is present
  cy.findByText('I forgot my password.')
    .should('exist')
    .and('be.visible')
    .parent()
    .should('have.attr', 'href', '/reset_password')
})
```

To run the test, you can open your terminal and execute the open cypress command inside of the `e2e/` folder. Once the cypress dashboard opens, find the test file name and double-click to run tests:

```properties
npm run cypress:open
```

If your test runs and passes, congratulations on writing an e2e test with Cypress! You can go ahead and write multiple scenarios for login and see your tests running.

<div style="text-align:center"><img src="https://user-images.githubusercontent.com/17708702/90949776-fec0c780-e468-11ea-9aa5-1add2e0aa7de.gif"/></div>

### Writing another test case

Let’s write another scenario where we type in wrong or non-existing user credentials to login.

Open up a new it block and give it a name _“Should show error with invalid email/username and password”_. Create a random username and password constant:

```js
it('Should show error with invalid email/username and password', () => {
  const invalidEmail = `${Date.now()}-user`
  const invalidPassword = `${Date.now()}-password`
})
```

We have the information of an actual user and password from our before block. To be sure, let’s verify our generated credentials aren’t the same as the actual user’s.

```js
it('Should show error with invalid email/username and password', () => {
  const invalidEmail = `${Date.now()}-user`
  const invalidPassword = `${Date.now()}-password`

  // # Lets verify generated email is not an actual email/username
  expect(invalidEmail).to.not.equal(testUser.username)

  // # Lets verify generated password is not an actual password
  expect(invalidPassword).to.not.equal(testUser.password)
})
```

The expect assertion comes from the [Chai js](https://www.chaijs.com/api/bdd/) library which is inbuilt in Cypress. Type in the invalid email/username and password in respective fields. Cypress allows you to type in the field value via the [type](https://docs.cypress.io/api/commands/type.html) command. It also gives you a command to [click](https://docs.cypress.io/api/commands/click.html) which you can use on the submit button.

```js
it('Should show error with invalid email/username and password', () => {
  const invalidEmail = `${Date.now()}-user`
  const invalidPassword = `${Date.now()}-password`

  // # Lets verify generated email is not an actual email/username
  expect(invalidEmail).to.not.equal(testUser.username)

  // # Lets verify generated password is not an actual password
  expect(invalidPassword).to.not.equal(testUser.password)

  // # Enter invalid email/username in the email field
  cy.findByPlaceholderText('Email or Username').clear().type(invalidEmail)

  // # Enter invalid password in the password field
  cy.findByPlaceholderText('Password').clear().type(invalidPassword)

  // # Hit enter to login
  cy.findByText('Sign in').click()
})
```

Now, we just have to verify if we received the correct error message.

```js
it('Should show error with invalid email/username and password', () => {
  const invalidEmail = `${Date.now()}-user`
  const invalidPassword = `${Date.now()}-password`

  // # Lets verify generated email is not an actual email/username
  expect(invalidEmail).to.not.equal(testUser.username)

  // # Lets verify generated password is not an actual password
  expect(invalidPassword).to.not.equal(testUser.password)

  // # Enter invalid email/username in the email field
  cy.findByPlaceholderText('Email or Username').clear().type(invalidEmail)

  // # Enter invalid password in the password field
  cy.findByPlaceholderText('Password').clear().type(invalidPassword)

  // # Hit enter to login
  cy.findByText('Sign in').click()

  // * Verify appropriate error message is displayed for incorrect email/username and password
  cy.findByText('Enter a valid email or username and/or password.')
    .should('exist')
    .and('be.visible')
})
```

And voila! You have covered another common test case.

<div style="text-align:center"><img src="https://user-images.githubusercontent.com/17708702/90949889-8e1aaa80-e46a-11ea-99e2-6015bc2a90df.gif"/></div>

If you would like to see the rest of the improvements I made, check out [this pull request](https://github.com/mattermost/mattermost-webapp/pull/6125/files). 

By now, you’ve seen how easy and enjoyable Cypress makes end-to-end testing. So go ahead and introduce some end-to-end tests in your application!