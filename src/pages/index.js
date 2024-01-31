import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import CalloutBox from "../components/calloutbox"
import Mission from "../components/mission"
import Host from "../components/host"
import Podcasts from "../components/podcasts"
import PodcastHosts from "../components/podcastHosts"
import LatestEpisode from "../components/latestEpisode"

const ContentHeader = styled.h2`
  color: #fff;
  text-transform: uppercase;
  padding: 0px 10px 0px 0px;
  margin: 0;
  font-size: 2rem;
`
const HeaderContainer = styled.div`
  width: 100%;
  margin-top: 150px;
  margin-bottom: 30px;
  border-bottom: 10px solid var(--c2c-red);
`

function HeaderText({ text, id }) {
  return (
    <div id={id}>
      <HeaderContainer>
        <ContentHeader>{text}</ContentHeader>
      </HeaderContainer>
    </div>
  )
}

function IndexPage() {
  const mainPageQuery = useStaticQuery(graphql`
    query MyQuery {
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
      file(relativePath: { eq: "Jay_Jones.png" }) {
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

      allFile(filter: { relativeDirectory: { eq: "hosts" } }) {
        edges {
          node {
            id
            childrenImageSharp {
              gatsbyImageData(
                placeholder: DOMINANT_COLOR
                webpOptions: { quality: 10 }
              )
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
    }
  `)
  const podcasts = mainPageQuery.allPodcastRssFeedEpisode.edges.slice(0, 50)

  //combine Host Data with the Host images
  const hostData = mainPageQuery.site.siteMetadata.siteContentData.hosts.map(
    host => {
      let hostName = host.bioContent.name.toLowerCase().split(" ").join("")
      let hostImage = mainPageQuery.allFile.edges.filter(hostimg => {
        let img = hostimg.node.relativePath
          .toLowerCase()
          .split("/")[1]
          .split("_")
          .join("")
          .split(".")[0]
        if (img === hostName) {
          return hostimg.node.childrenImageSharp[0]
        }
      })
      return {
        image: hostImage,
        flowDirection: host.flowDirection,
        bioContent: host.bioContent,
      }
    },
  )

  const links = [
    { title: "Home", path: "/" },
    { title: "Episodes", path: "#episodes" },
  ]
  return (
    <Layout links={links}>
      <CalloutBox>
        <p>{`"${mainPageQuery.site.siteMetadata.description}"`}</p>
      </CalloutBox>
      <Mission />
      <HeaderText text={"Latest Episode"} id={"latestEpisode"} />
      <LatestEpisode
        title={podcasts[0].node.item.title}
        episode={podcasts[0].node.item.itunes.episode}
        image={podcasts[0].node.item.itunes.image}
        description={podcasts[0].node.item.content}
      />
      {console.log(podcasts[0].node.item)}
      <HeaderText text={"The Hosts"} />
      {hostData.map(host => (
        <Host
          image={host.image}
          flowDirection={host.flowDirection}
          bioContent={host.bioContent}
          key={host.bioContent.name}
        />
      ))}
      <HeaderText text="Episodes" id="episodes" />
      <PodcastHosts />
      <Podcasts podcasts={podcasts} />
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
