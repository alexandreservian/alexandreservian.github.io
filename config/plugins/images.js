module.exports = [
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `./posts/`,
    },
  },
]
