import * as React from 'react';
import styled from 'styled-components';

const PodcastWrapper = styled.div`
    display:grid;
    width: 80%;
    grid-template-columns: 1fr;
    margin: 0 auto;
    @media (min-width:700px){
        width:70%;
        grid-template-columns: 1fr 1fr;
    }
    @media (min-width:1000px){
        grid-template-columns: 1fr 1fr 1fr;
        width:100%;
    }


`;





export default function Podcasts({podcasts}){
    console.log(podcasts);
    return (
        <PodcastWrapper>
            {podcasts.map((podcast)=><p>{podcast.node.item.title}</p>)}
        </PodcastWrapper>
    )
}