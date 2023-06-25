import * as React from 'react';
import {graphql} from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import AudioPlayer from '../components/audioPlayer'; 
import PodcastHosts from '../components/podcastHosts';


const PodcastWrapper = styled.div`
  width:80%;
  margin: 0 auto;
  padding:10px;

  a{
    color:var(--c2c-red);
    text-decoration:none;
  }

  a:link{
    color:var(--c2c-red);
    text-decoration:none;
  }

  a:hover{
    color:var(--c2c-red);
    text-decoration:none;
  }

  a:visited{
    color:var(--c2c-red);
    text-decoration:none;
  }
`

export default function Podcast({data}){

  const links =[{title:'Home', path:'/'}];

  
    return(
      <Layout links={links}>
          <AudioPlayer image={data.podcastRssFeedEpisode.item.itunes.image} title={data.podcastRssFeedEpisode.item.title} urlSrc={data.podcastRssFeedEpisode.item.enclosure.url} episode={data.podcastRssFeedEpisode.item.itunes.episode}/>
          <PodcastWrapper>
          <p>{data.podcastRssFeedEpisode.item.itunes.summary.split('Conformed to Christ aims ')[0]}</p>
          <p>Conformed to Christ aims to engage the mind, affect the heart, and call people to follow Christ. Additionally, our aim is to introduce and explain passages of Scripture and difficult theological doctrines in a down-to-earth and easy-to-grasp manner. Theology and the Bible should impact your life, and our goal is that we might play a small part in seeing that happen. Conformed to Christ is a ministry of <a href="https://cfclawton.org/">Christ's Fellowship Church.</a></p>
          </PodcastWrapper>
          <PodcastHosts/>
        </Layout>
    )
}

export const podcast = graphql`
query($id: String!){
    podcastRssFeedEpisode(id: {eq: $id}) {
    item {
      content
      itunes {
        episode
        image
        summary
        
      }
      title
      enclosure {
        url
      }
    }
  }
}
`

