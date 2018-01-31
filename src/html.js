import React from 'react'
import AppleTouchIcon from './data/favicons/apple-touch-icon.png'
import Favicon32x32 from './data/favicons/favicon-32x32.png'
import Favicon16x16 from './data/favicons/favicon-16x16.png'
import SafariPinnedTab from './data/favicons/safari-pinned-tab.svg'
import Favicon from './data/favicons/favicon.ico'

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = <style id="gatsby-inlined-css" dangerouslySetInnerHTML={{ __html: stylesStr }} />
    }
    return (
      <html {...this.props.htmlAttributes} lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link rel="apple-touch-icon" sizes="180x180" href={AppleTouchIcon} />
          <link rel="icon" type="image/png" sizes="32x32" href={Favicon32x32} />
          <link rel="icon" type="image/png" sizes="16x16" href={Favicon16x16} />
          <link rel="shortcut icon" href={Favicon} />
          <link rel="mask-icon" href={SafariPinnedTab} color="#5bbad5" />
          <meta name="theme-color" content="#ffffff" />
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
          />
          {this.props.headComponents}
          {css}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
