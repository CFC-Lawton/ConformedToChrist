/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Conformed to Christ`,
    description: `We Seek to Engage the Mind Affect the Heart, and Call People to Follow Christ.`,
    author: `Christ's Fellowship Church`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
    siteContentData: {
      tagline: `"We Aim To Engage the Mind, Affect The Heart, and Call People to Follow Christ."`,
      mission: `"Additionally, our aim is to introduce and explain passages of Scripture and difficult theological doctrines in a down-to-earth and easy-to-grasp manner. Theology and the Bible should impact your life and our goal is that we might play a small part in seeing that happen."`,
      georgeData: {},
      jayData: {},
      larryData: {}

    }
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-podcast-rss-feed`,
      options: {
        feedURL: `https://feed.podbean.com/conformedtochrist/feed.xml`,
        id: 'guid',
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Conformed to Christ`,
        short_name: `C2C Podcast`,
        start_url: `/`,
        background_color: `#000000`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
        //change this to a small logo for the conformed to Christ podcast 
      },
    },
  ],
}
