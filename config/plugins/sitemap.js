module.exports = [
  {
    resolve: `gatsby-plugin-sitemap`,
    options: {
      query: `
          {
            wp {
              generalSettings {
                siteUrl
              }
            }
  
            allSitePage {
              nodes {
                path
              }
            }
        }`,
      resolveSiteUrl: ({ site, allSitePage }) => {
        return site.wp.generalSettings.siteUrl
      },
      serialize: ({ site, allSitePage }) =>
        allSitePage.nodes.map(node => {
          return {
            url: `${site.wp.generalSettings.siteUrl}${node.path}`,
            changefreq: `daily`,
            priority: 0.7,
          }
        }),
    },
  },
]
