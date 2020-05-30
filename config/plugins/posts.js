module.exports = [
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `posts`,
      path: `posts`,
    },
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: "gatsby-remark-external-links",
          options: {
            target: "_blank",
          },
        },
        `gatsby-remark-prismjs`,
      ],
    },
  },
]
