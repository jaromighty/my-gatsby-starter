/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "My Gatsby Starter",
    description: "A GatsbyJS starter for my projects",
    siteUrl: "https://localhost",
    author: "",
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query:`{
          allSitePage {
            nodes {
              path
            }
          }
        }`,
        resolveSiteUrl: () => "http://localhost",
        resolvePages: ({
          allSitePage: { nodes: allPages },
        }) => {
          return allPages.map(page => {
            return { ...page }
          })
        },
        serialize: ({ path, modifiedGmt }) => {
          return {
            url: path,
            lastmod: modifiedGmt,
          }
        },
      },
    }
  ],
}
