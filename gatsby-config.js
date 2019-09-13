/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Schakel',
  },
  /* Plugin section */
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `stories`,
        path: `${__dirname}/stories/`,
      },
    },
    `gatsby-plugin-sharp`, 
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 650,
              linkImagesToOriginal: false,
              wrapperStyle: {
                /* Add custom styles to image in markdown files */
              },

            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'uploads',

            }
          },
          {
            resolve: `gatsby-plugin-favicon`,
            options: {
              logo: "./static/favicon.jpg",
         
              // WebApp Manifest Configuration
              appName: "Schakel PR", // Inferred with your package.json
              appDescription: "Communcations agency Schakel PR",
              developerName: "Steven Koerts",
              developerURL: "https://stevenkoerts.nl/",
              dir: 'auto',
              lang: 'nl-NL',
              background: '#ffa319',
              theme_color: '#ffa319',
              display: 'standalone',
              orientation: 'any',
              start_url: '/',
              version: '1.0',
         
              icons: {
                android: true,
                appleIcon: true,
                appleStartup: true,
                coast: false,
                favicons: true,
                firefox: true,
                yandex: false,
                windows: false
              }
            }
          }

        ],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
  /*End plugin section */

}
