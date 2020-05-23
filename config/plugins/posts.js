module.exports = [
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `posts`,
      path: `posts`,
    },
  },
  `gatsby-transformer-remark`,
]
