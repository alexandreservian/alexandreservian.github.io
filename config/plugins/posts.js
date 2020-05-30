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
        {
          resolve: "gatsby-remark-relative-images",
          options: {
            name: "images",
          },
        },
        {
          resolve: "gatsby-remark-images",
          options: {
            maxWidth: 810,
            linkImagesToOriginal: false,
          },
        },
        `gatsby-remark-prismjs`,
      ],
    },
  },
]
