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
    `gatsby-mdx`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `M-ZubairAhmed | Software developer`,
        short_name: `M-ZubairAhmed`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#FFFFFF`,
        display: `minimal-ui`,
      },
    },
  ],
}
