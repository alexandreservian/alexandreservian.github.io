module.exports = [
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `posts`,
    },
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
]
