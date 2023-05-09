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
      hosts: [
        {
          flowDirection: 'right', bioContent: {
            name: 'George Mayes',
            bio: [`George Mayes is a pastor at Christ's Fellowship Church in Lawton, Oklahoma. A graduate of The Southern Baptist Theological Seminary, George has served in various ministerial roles across Oklahoma since 2003. He was a pastor of Northwest Baptist Church for two years before they merged with Redeemer Church to form Christ's Fellowship Church in 2018.`, `George is an avid reader, movie-lover, and student of the Bible. He is committed to expository preaching and teaching the Bible clearly.`, `George has been married to his college sweetheart, Julia for 18 years and they have four children.`]
          }
        },
        {
          flowDirection: 'left', bioContent: {
            name: 'Jay Jones',
            bio: [`Prior to becoming a pastor Jay served 9 years in the Army. Prior to the Army Jay was a plumber in Lawton.`, `Jay is a graduate of Cameron University where he played baseball. He received his Master of Divinity from Midwestern Baptist Theological Seminary and recently graduated with a Doctoral degree in Expository Preaching from The Masters Seminary.  He is passionate about helping others see clearly what the Bible says and how it shows us clearly the supremacy of Christ and the beauty of the gospel.`, `Jay has been married to Angie for 19 years. They have three wonderful children; Drake, Brooke, and Evangeline.`]
          }
        }
        // {
        //   image: '../images/George_Mayes.png', flowDirection: 'right', bioContent: {
        //     name: 'Larry Smith',
        //     bio: [`George Mayes is a pastor at Christ's Fellowship Church in Lawton, Oklahoma. A graduate of The Southern Baptist Theological Seminary, George has served in various ministerial roles across Oklahoma since 2003. He was a pastor of Northwest Baptist Church for two years before they merged with Redeemer Church to form Christ's Fellowship Church in 2018.`, `George is an avid reader, movie-lover, and student of the Bible. He is committed to expository preaching and teaching the Bible clearly.`, `George has been married to his college sweetheart, Julia for 18 years and they have four children.`]
        //   }
        // }
      ]

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
