/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Schakel',
    oneLiner: 'Tijd om te schakelen',
    mainImage: '6.png',
    aboutUs: "Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten.",
    people: [
      {
        fullName: 'Claire',
        description: 'Nog in te vullen', 
        extraInfo: 'nvt',
        profilePictureFront: 'claire2.jpg',
        profilePictureBack: 'claire3.jpg',
      },
      {
        fullName: 'Brigitte',
        description: 'Nog in te vullen', 
        extraInfo: 'nvt',
        profilePictureFront: 'brigitte2.jpg',
        profilePictureBack: 'brigitte3.jpg',
      },
      {
        fullName: 'Sophie',
        description: 'Nog in te vullen', 
        extraInfo: 'nvt',
        profilePictureFront: 'sophie2.jpg',
        profilePictureBack: 'sophie3.jpg',
      },
      {
        fullName: 'Steven',
        description: 'Nog in te vullen', 
        extraInfo: 'nvt',
        profilePictureFront: 'steven3.jpg',
        profilePictureBack: 'steven2.jpg',
      },
    ], 
    instagram: 'https://www.instagram.com/schakelpublicrelations/', 
    linkedin: 'https://www.linkedin.com/company/schakel-public-relations/', 
    email: 'schakelpublicrelations@outlook.com',//Schakel1 
    adress: 'Wijnhaven 107',


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
              maxWidth: 500,
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
