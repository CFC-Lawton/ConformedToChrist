import * as React from 'react';
import {graphql} from 'gatsby';
import styled from 'styled-components';

export default function Podcast({data}){
  console.log(data)
    return(
        <div>{data.podcastRssFeedEpisode.item.title}</div>
    )
}

export const podcast = graphql`
query($id: String!){
    podcastRssFeedEpisode(id: {eq: $id}) {
    internal {
      content
    }
    item {
      itunes {
        episode
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

