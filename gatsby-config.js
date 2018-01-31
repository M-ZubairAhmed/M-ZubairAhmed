module.exports = {
  siteMetadata: {
    title: `Md-ZubirAhmed's website`,
  },
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-plugin-sharp`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              linkImagesToOriginal: true,
              sizeByPixelDensity: true,
            },
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify`,
  ],
}
// Important
// 1. make sure gatsby-plugin-netlify is last in the array
