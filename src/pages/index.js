import * as React from "react"
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout"
import Seo from "../components/seo"
import CalloutBox from "../components/calloutbox";
import Mission from "../components/mission";
import Host from "../components/host";




const IndexPage = () => {
  const mainPageQuery = useStaticQuery(graphql`query MyQuery {
    site {
    siteMetadata {
      description
      siteContentData {
        hosts {
          image
          flowDirection
          bioContent {
            name
            bio
          }
        }
      }
    }
  }
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
          itunes {
            image
            episode
          }
        }
      }
    }
  }
  }`)

  const data = mainPageQuery.allPodcastRssFeedEpisode.edges;
  const hostData = mainPageQuery.site.siteMetadata.siteContentData.hosts;
  //grab the image with a page query for each element and then merge the image into the data 

  return (
    <Layout>
      <CalloutBox>
        <p>{`"${mainPageQuery.site.siteMetadata.description}"`}</p>
      </CalloutBox>
      <br />
      <Mission />
      <br />
      {hostData.map(host => <Host image={host.image} flowDirection={host.flowDirection} bioContent={host.bioContent} key={host.bioContent.name} />)}
      <br /><br /><br /><br /><br />
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
