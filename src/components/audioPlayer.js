import * as React from 'react';
import styled from 'styled-components';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import '../styles/AudioPlayerStyles.css';



const PodcastContainer = styled.div`
    display: flex;
    flex-direction:column;
    width: 80%;
    margin: 5px auto;
    @media (min-width:1000px){
        flex-direction:row;
    }
`

const PodcastImage = styled.img`
    width: 80%;
    margin: 100px auto 20px auto;
    display: block;
    border-radius: 10px;
    border-bottom: 10px solid var(--c2c-red);
    border-top: 10px solid var(--c2c-red);

    @media (min-width:600px){
        width: 200px;
    }
    @media (min-width:1000px){
        width:200px;
        height:200px;
        margin: 35px auto;
    }
`;



export default function AudioPlayerContainer({image, title, urlSrc, episode}){
    
    return(
        <PodcastContainer>
            <PodcastImage src={image}/>
            <AudioPlayer src={urlSrc} header={`Episode ${episode}: ${title}`} layout='horizontal-reversed' customAdditionalControls={[]} customVolumeControls={[]} />
        </PodcastContainer>
    )
}