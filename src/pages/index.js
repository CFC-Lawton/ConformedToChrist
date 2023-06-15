import * as React from "react"
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout"
import Seo from "../components/seo"
import CalloutBox from "../components/calloutbox";
import Mission from "../components/mission";
import Host from "../components/host";
import Podcasts from "../components/podcasts";




const IndexPage = () => {
  const mainPageQuery = useStaticQuery(graphql`query MyQuery {
    site {
    siteMetadata {
      description
      siteContentData {
        hosts {
          flowDirection
          bioContent {
            name
            bio
          }
        }
      }
    }
  }
  file(relativePath: {eq: "Jay_Jones.png"}) {
    id
    childImageSharp {
      fluid(base64Width: 10) {
        base64
        tracedSVG
        srcWebp
        srcSetWebp
        originalImg
        originalName
      }
    }
  }
  allFile(filter: {relativeDirectory: {eq: "hosts"}}) {
    edges {
      node {
        id
        childrenImageSharp {
          gatsbyImageData(placeholder: DOMINANT_COLOR, webpOptions: {quality: 10})
        }
        relativePath
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
  const podcasts = mainPageQuery.allPodcastRssFeedEpisode.edges;
  



  //combine Host Data with the Host images
  const hostData = mainPageQuery.site.siteMetadata.siteContentData.hosts.map(host => {
    let hostName = host.bioContent.name.toLowerCase().split(' ').join('');
    let hostImage = mainPageQuery.allFile.edges.filter(hostimg => {
      let img = hostimg.node.relativePath.toLowerCase().split('/')[1].split('_').join('').split('.')[0];
      if (img === hostName) {
        return hostimg.node.childrenImageSharp[0];
      }
    })
    return {
      image: hostImage,
      flowDirection: host.flowDirection,
      bioContent: host.bioContent,
    }
  });




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
      <Podcasts podcasts={podcasts}/>
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
