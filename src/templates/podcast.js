import * as React from 'react';
import {graphql} from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import AudioPlayer from '../components/audioPlayer'; 



  


export default function Podcast({data}){
  function createPodContent(html){
    return {__html:html};
  }

  console.log(data)
    return(
      <Layout>
          <AudioPlayer image={data.podcastRssFeedEpisode.item.itunes.image} title={data.podcastRssFeedEpisode.item.title} urlSrc={data.podcastRssFeedEpisode.item.enclosure.url} episode={data.podcastRssFeedEpisode.item.itunes.episode}/>
          <h1>{`Episode ${data.podcastRssFeedEpisode.item.itunes.episode}: ${data.podcastRssFeedEpisode.item.title}`}</h1>
          <div dangerouslySetInnerHTML={createPodContent(data.podcastRssFeedEpisode.item.content)}/>
          
        </Layout>
    )
}

export const podcast = graphql`
query($id: String!){
    podcastRssFeedEpisode(id: {eq: $id}) {
    internal {
      content
    }
    item {
      content
      itunes {
        episode
        image
        
      }
      title
      enclosure {
        url
      }
    }
  }
}
`

