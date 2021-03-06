module.exports = {
  siteMetadata: {
    url: "https://maazadeeb.com",
    title: "Blog by Maaz Syed Adeeb",
    subtitle:
      "Learner. Experimentalist. Code, food and football never cease to thrill me.",
    copyright: "© All rights reserved.",
    disqusShortname: "maazadeeb",
    menu: [
      {
        label: "Articles",
        path: "/"
      },
      {
        label: "About me",
        path: "/about/"
      } /* ,
      {
        label: "Contact me",
        path: "/contact/"
      } */
    ],
    author: {
      name: "Maaz Syed Adeeb",
      email: "maaz.adeeb@gmail.com",
      telegram: "#",
      twitter: "maaz93",
      github: "maaz93",
      rss: "#",
      vk: "#",
      stackoverflow: "2950032/maaz-syed-adeeb"
    }
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-plugin-feed",
      options: {
        query: `
          {
            site {
              siteMetadata {
                site_url: url
                title
                description: subtitle
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.edges.map(edge =>
                Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.description,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.site_url + edge.node.fields.slug,
                  guid: site.siteMetadata.site_url + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }]
                })
              ),
            query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } }
                ) {
                  edges {
                    node {
                      html
                      fields {
                        slug
                      }
                      frontmatter {
                        title
                        date
                        layout
                        draft
                        description
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml"
          }
        ]
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 960
            }
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: { wrapperStyle: "margin-bottom: 1.0725rem" }
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants"
        ]
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: { trackingId: "UA-105814760-1" }
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ["Roboto:400,400i,500,700"]
        }
      }
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
            {
              site {
                siteMetadata {
                  url
                }
              }
              allSitePage(
                filter: {
                  path: { regex: "/^(?!/404/|/404.html|/dev-404-page/)/" }
                }
              ) {
                edges {
                  node {
                    path
                  }
                }
              }
          }`,
        output: "/sitemap.xml",
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            return {
              url: site.siteMetadata.url + edge.node.path,
              changefreq: "daily",
              priority: 0.7
            };
          })
      }
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss-sass"
  ]
};
