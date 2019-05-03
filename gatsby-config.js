module.exports = {
  pathPrefix: '/gatsby-clean-portfolio',
  siteMetadata: {
    title: `M-ZubairAhmed`,
    description: `Zubair's space on the web`,
    url: 'https://mzubairahmed.ml/',
    twitterUsername: '@Md_ZubairAhmed/',
    author: `@M-ZubairAhmed/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `M-ZubairAhmed | Software developer`,
        short_name: `M-ZubairAhmed`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FFFFFF`,
        display: `minimal-ui`,
      },
    },
    'gatsby-plugin-offline',
  ],
}
