import * as React from 'react';
import styled from 'styled-components';

const PodcastsWrapper = styled.div`
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

const Podcast = styled.div`
    width: 80%;

    img{
        width:100%;
        border-bottom: solid 10px var(--c2c-red);
        border-radius:5px;

    }

    h3{
        color:#fff;
    }

    p{}

    
`;




export default function Podcasts({podcasts}){
    console.log(podcasts);
    return (
        <PodcastsWrapper>
            {podcasts.map((podcast)=>{
                return(
                    <Podcast key={podcast.node.id}>
                        <img src={podcast.node.item.itunes.image}/>
                        <h3>{podcast.node.item.title}</h3>
                        <p>{`${podcast.node.item.content.split('>')[1].split('<')[0].substring(0, 200)}...`}</p>
                    </Podcast>
                )
            })}
        </PodcastsWrapper>
    )
}