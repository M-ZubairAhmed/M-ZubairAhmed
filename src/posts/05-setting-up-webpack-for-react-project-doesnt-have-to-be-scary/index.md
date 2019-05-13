---
path: '/blog/05-setting-up-webpack-for-react-project-doesnt-have-to-be-scary'
date: '2019-5-08'
serial: '5'
title: 'Setting up webpack for react project doesnt have to be scary'
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
excerpt: 'Lets setup webpack for starting a react app from scratch using as little as configuration possible. We will setup webpack, babel,prettier and styling for our tiny app.'
---

If you would have asked me few days weeks ago, to setup a complete build and boiler system for new react project, i would have handed you a [C.R.A](https://github.com/facebook/create-react-app).
So if your response is the same, this blog post is for you.

All the headings point to git commits, so you can browse the project at that title/step state in Github.

## Prepare new project

### [Add package json](https://github.com/M-ZubairAhmed/react-scaffolding-kit/tree/9056c5bfa7e699ae6cba6c5325ca36d9934c737f)

Start with an empty folder and run `yarn init`. This will ask you bunch of questions and make file such as `package.json` for you. You can fill in your project name and other details.

### [Install react libraries](https://github.com/M-ZubairAhmed/react-scaffolding-kit/tree/92c95d6ee96e9991e8e56cb27959be6ae4530a92)

Install React and its dom library

```bash
yarn add react react-dom
```

### [Install webpack](https://github.com/M-ZubairAhmed/react-scaffolding-kit/commit/29e5cdb7463dc404f74506918f72cf6cb3302427)

Install core [webpack](https://github.com/webpack/webpack) package as \*devDependencies and along with that lets also add another two webpack packages; [webpack cli](https://github.com/webpack/webpack-cli), which will be required if we are to run webpack with command line or via npm scripts and [webpack-dev-server](https://github.com/webpack/webpack-dev-server), this packages gets us up and running our local dev environment without too much hassle of making our own server.

```bash
yarn add --dev webpack webpack-cli webpack-dev-server
```

_\* devDependencies : are those packages which you would not like to include in the app, but only while building or developing them._

### [Install prettier](https://github.com/M-ZubairAhmed/react-scaffolding-kit/commit/7d0474cba6fda4a579b2e6ff0d5dc6e07d50b506)

[Prettier](https://prettier.io/) provides beautifully code formatting. As this has nothing to do with the production code, we are only going to use it while developing code, So install this as devDependency too.

```bash
yarn add prettier --dev --exact
```

There are lots of configurations available to suite your preferences. Head over to [docs](https://prettier.io/docs/en/options.html) to configure. Make a new file with name `prettier.config.js` in your root and Add this just two configuration to it. Feel free to add your own later.

```javascript
module.exports = {
  trailingComma: 'all',
  semi: false,
}
```

### [Write some react code](https://github.com/M-ZubairAhmed/react-scaffolding-kit/commit/491dd4a9f5168232c2afe4c988051d9c49d35dee)

Create a folder named `src` in your root and add files `index.js` to it.
Index.js will be starting point of src. Currently the file is simple, it can be extended later. Follow [here](https://reactjs.org/docs/hello-world.html) to lean how to write react code.

```javascript
import React from 'react'
import { render } from 'react-dom'

const App = () => (
  <div>
    <h1>React scaffolding kit</h1>
    <strong>An opiniated but customizable react starter kit</strong>
  </div>
)

render(<App />, document.getElementById('REACT_ROOT'))
```

### [Run the app](https://github.com/M-ZubairAhmed/react-scaffolding-kit/commit/ea1684f0005f076ef85601582d6b8968dcfbb818)

Lets make use of `webpack-dev-server` we installed earlier to run the app. Its a good idea to have a start script in package.json for easy start up. Add the start script in `package.json`.

```json
"scripts": {
    "start":"node_modules/.bin/webpack-dev-server",
  },
```

Now app can start with a simple command in terminal

```bash
yarn start
```

You might see webpack related content appearing in your terminal and finally ending with an error. If error is something on the lines of **You may need an appropriate loader to handle this file type** or related. Then don't worry you have followed instructions correctly. Lets tackle that error in next section. Go drink a glass of water.
On side note, You might have noticed that webpack was able to identify the code you wrote in _src/index.js_ without you having to provide it with any configuration. Thats because webpack now provides lots of default to get you going soon. Hence placing `index.js` file under `src` was the [default entry point](https://webpack.js.org/concepts#entry) for webpack.

### Transpiling Javascript code

The error we stumbled, means our server wasn't able to understand the code we wrote. It was not compatible with what usually browsers understand. To be able to make it understand we transpile our code to much better browser understanding code with [Babeljs](https://babeljs.io).

### [Install babeljs](https://github.com/M-ZubairAhmed/react-scaffolding-kit/commit/842e57e18cbdfa2bd2c5b5d129049919497b7c95)

```bash
yarn add --dev @babel/core
```

Babel core installs the core functionality of the babel library. In order to make webpack aware of babel and say hey! webpack i want babel to transpile my code before you can do your stuff, we will add another package

```bash
yarn add --dev babel-loader
```

### [Connecting babel and webpack](https://github.com/M-ZubairAhmed/react-scaffolding-kit/commit/f1ece0ce227b351fff4892955e3bb46574a1d4a0)

By adding the package, webpack still wont be aware of babel. To do that lets add in a configuration file for webpack, and name it `webpack.dev.config.js`. Why dev in the name ? thats because we would like to keep our production and dev webpack configuration seperate.

```javascript
module.exports = {
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' }],
  },
}
```

With the above we are saying that we would first like to run [babel-loader](https://github.com/babel/babel-loader) on all **js** file except the ones in `node_modules`

### [Configuring babel](https://github.com/M-ZubairAhmed/react-scaffolding-kit/commit/c2ce7526e0bed1a3b72081009a66ec8747292f0b)

Ok, now you've configured Babel but you haven't made it actually do anything. Lets create `babel.config.js` in our root. Babel depends on many plugins to do its job. These plugin contains instruction on how to parse the code to more compatible one.
Lets add few plugins that we require. To start, add [env preset](https://babeljs.io/docs/en/babel-preset-env), which enables transforms for ES2015+ and [react preset](https://babeljs.io/docs/en/babel-preset-react), which contains most common plugin used along with React. You are free to add and [include others](https://babeljs.io/docs/en/plugins). Presets are just a bunch of plugins grouped together.

```javascript
module.exports = function(api) {
  if (api) {
    //   https://babeljs.io/docs/en/config-files#apicache
    api.cache.using(() => process.env.NODE_ENV)
  }

  const presets = ['@babel/preset-env', '@babel/preset-react']

  const plugins = []

  return {
    presets,
    plugins,
  }
}
```

### [Start the app again](https://github.com/M-ZubairAhmed/react-scaffolding-kit/commit/6bd27dae7a1c1fa5e3e55e378f2d3500e6753f72)

Lets run the start command we ran previously. Just a slight modification before we start, we need to tell _webpack dev server_ to read config from the new `webpack.dev.config.js` file we created earlier.

```json
"start": "node_modules/.bin/webpack-dev-server --config webpack.dev.config.js",
```

Now you must be seeing that our terminal didn't threw any error when we starter the server. You may now go to the localhost which is mentioned there. Dont be disappointed if you see just bunch of folders over in your website, we havent configured the app to output **HTML** yet so its just showing us the content of the website instead.

### [Make app spit html](https://github.com/M-ZubairAhmed/react-scaffolding-kit/commit/7612a5cb99635fb0d87b983304ac3a1264893269)

Webpack contains ecosystem of plugins and loaders. To enable webpack to output html, we are going to add in [HTML webpack plugin](https://webpack.js.org/plugins/html-webpack-plugin/).

```bash
yarn add --dev html-webpack-plugin
```

Create an html file, which will be served by our app in _src_ folder and add just the simple HTML5 supporting content. Remember [we asked](#write-some-react-code) react to find element id `REACT_ROOT`, include that too so that our react apps renders on that element tree.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>React scaffolding kit</title>
  </head>

  <body>
    <div id="REACT_ROOT"></div>
  </body>
</html>
```

Now we need to configure webpack and ask it to take our html as template and output that instead. All webpack configurations are done in webpack config file. Add a new key `plugins` for webpack object and import our newly added plugin. The plugin can now be added to plugins array. We will ask it to use the html we just created by providing `template` option.

```js
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' }],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
}
```

Once its done, you can restart the app from _start_ script. Now the app should greet you with **React scaffolding kit** written big in H1 tags.

### [Add styling](https://github.com/M-ZubairAhmed/react-scaffolding-kit/commit/9b02e51d8b35b554c3e2f3407a48ea8af5ee12e2)

The app looks rather bland, lets now add the ability to add styles. I am going to add **SCSS** support because i feel thats the best way to write CSS. Create a new file inside src directory and name it `index.scss`.

```scss
h1 {
  color: blue;
}
```

Include the styles in your `index.js` by importing them.

```js
import './index.scss'
```

But as you have noticed, styling doesnt seems to be picked up by the app. Reason for that there is only so much webpack can do on its own. We will have to provide a way for webpack to include the styling in the app, here comes webpack loaders to rescue.

```sh
yarn add --dev style-loader css-loader sass-loader node-sass
```

Lets look at what those are by adding them in the configuration. Add a new object inside your `modeuls/rules` in webpack config.

```js
{
    test: /\.scss$/,
    use: [
        "style-loader",
        "css-loader",
        "sass-loader",
    ],
},
```

Here we are telling webpack to take all our scss files, convert them from scss to css (via sass-loader), resolve css syntax such as _import_ or _url_ (via css-loader) and then take the compiled css and load it up inside `<style>` under our html's head tag (via style-loader). We have also include node-sass as its required to internal working of sass-loader.

## Recap

Congratulations you have now a minimal react app bootstrapped with webpack up and running. If you have come till here, you deserve an applause.

Lets see what have we done till now

- [x] Installed required libraries such as react , webpack etc.
- [x] Setup prettier for code formatting
- [x] Added webpack and a basic configuration
- [x] Configured Babel and connected it to webpack
- [x] Attached plugin to render HTML from webpack
- [x] Styled app with scss and styling loaders

## More setup

Communities around react, webpack etc are huge, as such we have some very powerful support libraries, plugins to work with. Let see what more we could do with the above setup

- [ ] We could add [seperate webpack config](https://webpack.js.org/configuration/#use-different-config-file) for production use.
- [ ] Add more webpack plugins as required such as one for [copying assets folder](https://webpack.js.org/plugins/copy-webpack-plugin/#root), [minimizing css files](https://webpack.js.org/plugins/mini-css-extract-plugin/#root), [adding global constants](https://webpack.js.org/plugins/define-plugin), [optimizing the build](https://webpack.js.org/configuration/optimization/#root).
- [ ] Have webpack [code split](https://webpack.js.org/guides/code-splitting/#root) with split chunks.
- [ ] Have [resolved path](https://webpack.js.org/configuration/resolve/#root) to our source file, so we can directly import like we do for node_modules.
- [ ] Ability to Write and transpile latest ES code with [additional babel plugins](https://babeljs.io/docs/en/plugins).
- [ ] Make robust server in your choice language for [serving production code](https://webpack.js.org/guides/production/#root).
- [ ] and much more

> The configuration and build one uses for production varies from application to application.

This blog post purpose was to get you familiar with setting up a tiny, less configuration webpack setup for you next react project.
