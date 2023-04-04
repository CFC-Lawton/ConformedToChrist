import * as React from "react"
import { useStaticQuery, graphql } from "gatsby";
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
//import * as styles from "../components/index.module.css"




const IndexPage = () => {
  const podcastData = useStaticQuery(graphql`query MyQuery {
    allPodcastRssFeedEpisode {
      edges {
        node {
          id
          item {
            title
            pubDate
            enclosure {
              url
              length
            }
            content
            content
          itunes {
            image
            episode
          }
          }
        }
      }
    }
  }`)
  const data = podcastData.allPodcastRssFeedEpisode.edges;
  console.log(data);
  return (
    <Layout>
      <br /><br /><br /><br /><br /><br /><br />
      {data.map((item) => {

        return (<div key={item.node.id}><h2 >Episode {item.node.item.itunes.episode}: {item.node.item.title}</h2>
          <img src={item.node.item.itunes.image} />
        </div>)

      })}
    </Layout >
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
