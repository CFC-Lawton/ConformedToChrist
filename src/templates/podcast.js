import * as React from 'react';
import {graphql} from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';



  


export default function Podcast({data}){
  function createPodContent(html){
    return {__html:html};
  }

  console.log(data)
    return(
      <Layout>
        
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
        
      }
      title
      enclosure {
        url
      }
    }
  }
}
`

