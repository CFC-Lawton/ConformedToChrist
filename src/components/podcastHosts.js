import * as React from 'react';
import styled from 'styled-components';
import {FaSpotify, FaItunes, FaAmazon, FaYoutubeSquare} from 'react-icons/fa';
import {SiGooglepodcasts} from 'react-icons/si';

const Icons = styled.div`
    color: var(--c2c-red);
    font-size: 3rem;
    display:flex;
    justify-content:space-around;
    flex:3;

    margin-top: 10px;

    a{
        color: var(--c2c-red);
        text-decoration: none;
    }

    a:Link{
        color: var(--c2c-red);
        text-decoration: none;
    }

    a:hover{
        color: var(--c2c-red);
        text-decoration: none;
    }

    a:visited{
        color: var(--c2c-red);
        text-decoration: none;
    }
`

const DistributorContainer = styled.div`
    width: 100%;
`

const PodcastHostContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction:column;
    margin:30px auto 60px auto;

    @media (min-width:1000px){
        flex-direction: row;
    }
`;

const Instruction = styled.div`
    display: flex;
    flex:1.5;
    text-transform: uppercase;
    border-bottom: solid 10px var(--c2c-red);

    h3{
        font-size: 1.5rem;
        font-weight: bold;
        margin:0;
        padding:0;
        align-self:center;
    }
`



export default function PodcastHosts(){
    return(
        <DistributorContainer>
        <PodcastHostContainer>
            <Instruction><h3>Subscribe On:</h3></Instruction>
        <Icons>
            <a href="https://podcasts.apple.com/us/podcast/conformed-to-christ/id1503247486" aria-label="Subscribe on Itunes" target="_blank" rel="noopener noreferrer"><FaItunes/></a>
<a href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkLnBvZGJlYW4uY29tL2NvbmZvcm1lZHRvY2hyaXN0L2ZlZWQueG1s" aria-label="Subscribe on Google Podcasts" target="_blank" rel="noopener noreferrer"><SiGooglepodcasts/></a>
            <a href="https://open.spotify.com/show/5YruCZu4hla6Ll3rBu7UPY" aria-label="Subscribe on Spotify" target="_blank" rel="noopener noreferrer"><FaSpotify/></a>
            <a href="https://music.amazon.com/podcasts/c57ff636-84fe-44f4-9078-3f9a4908700e/conformed-to-christ" aria-label="Subscribe on Amazon Music" target="_blank" rel="noopener noreferrer"><FaAmazon/></a>
            <a href="https://youtube.com/channel/UCgQBeT-Mj1CmngPdhZyWybQ" aria-label="Subscribe on Youtube" target="_blank" rel="noopener noreferrer"><FaYoutubeSquare/></a>
        </Icons>
        </PodcastHostContainer>
        </DistributorContainer>
    )
}