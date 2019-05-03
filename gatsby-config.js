module.exports = {
  pathPrefix: "/gatsby-clean-portfolio",
  siteMetadata: {
    title: `M-ZubairAhmed`,
    description: `Software developer`,
    url: "https://mzubairahmed.ml/",
    twitterUsername: "@Md_ZubairAhmed/",
    author: `@M-ZubairAhmed/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-clean-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        //icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
