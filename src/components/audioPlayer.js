import * as React from 'react';
import {useState,useEffect, useRef} from 'react';
import styled from 'styled-components';
import { ImForward2, ImBackward, ImPlay2, ImPause } from "react-icons/im";


const PodcastContainer = styled.div`
    display: flex;
    flex-direction:column;
    width: 80%;
    margin: 50px auto;
    @media (min-width:1000px){
        flex-direction:row;
    }
`

const PodcastImage = styled.img`
    width: 50%;
    margin: 0 auto;
    display: block;
    border-radius: 10px;
    border-bottom: 10px solid var(--c2c-red);
    border-top: 10px solid var(--c2c-red);
    @media (min-width:1000px){
        width:200px;
        height:200px;
        margin: 35px auto;
    }
`;

const AudioPlayerContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;

    h1{
        font-size: 2rem;
        padding:30px;
    }
`;

const ProgressContainer = styled.div`
    flex:1;
    display:flex;
    padding:0 30px 0 30px;
`;

const Bar = styled.input`
--seek-before-width:100px;    
    appearance: none;
    background:#fff;
    border-radius:10px;
    position:relative;
    width:100%;
    height:11px;
    outline:none;
    
    &::before {
        content:'';
        height 12px;
        width:var(--seek-before-width);
        background-color:var(--c2c-red);
        position:absolute;
        top:0;
        left:0;
        z-index:2;
        cursor:pointer;
    }

    :: -moz-range-progress{
        background-color:var(--c2c-red);
        border-radius:10px;
        height:11px;
    }

    /*thumb*/
    ::-webkit-slider-thumb{
        -webkit-appearance:none;
        height: 15px;
        width:15px;
        border:none;
        background-color: var(--c2c-red);
        cursor: pointer;
        position:relative;
        margin:-2px 0 0 0;
        z-index: 3;
        box-sizing:border-box;

    }

    :active::-webkit-slider-thumb{
       transform:scale(1.2);
       background:var(--c2c-red); 
    }


    ::-moz-range-thumb {
        height: 15px;
        width:15px;
        border:none;
        background-color: var(--c2c-red);
        cursor: pointer;
        position:relative;
        margin:-2px 0 0 0;
        z-index: 3;
        box-sizing:border-box;

    }

`

const Button = styled.div`
 border:none;
 background:none;
 color: #fff;
 font-size: 2em;
 margin-right:20px;
 display: flex;
 align-items: center;
 cursor: pointer;
 :hover{
    color:var(--c2c-red);
 }
`;

const ButtonContainer = styled.div`
    margin:0 auto 50px auto;
    display:flex;
    flex:1;
    width: 75%
    justifyContent:space-around;
`;

export default function AudioPlayer({image, title, urlSrc, episode}){
    
    // state
    const [isPlaying, setIsPlaying]= useState(false);
    const [ duration, setDuration ] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);


    //references

    const audioPlayer = useRef(); //reference audio component
    const progressBar = useRef(); //reference progress bar
    const animationRef = useRef() // reference the animation



    useEffect(function(){
        return function(){
            cancelAnimationFrame(animationRef.current);
        }
    }, []);

    function onLoadedMetadata(){
        const seconds = Math.floor(audioPlayer.current.duration);
        setDuration(seconds);
        progressBar.current.max = seconds;
    }

    function calculateTime(secs){
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds =  Math.floor(secs % 60); 
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnedMinutes}:${returnedSeconds}`;
    }

    function togglePlayPause(){
        const prevValue = isPlaying;
        setIsPlaying(!prevValue);
        if(!prevValue){
            audioPlayer.current.play();
            animationRef.current = requestAnimationFrame(whilePlaying);
        }else{
            audioPlayer.current.pause();
            cancelAnimationFrame(animationRef.current);
        }
    }


    function whilePlaying(){
        progressBar.current.value = audioPlayer.current.currentTime;
        changePlayerCurrentTime();
        animationRef.current = requestAnimationFrame(whilePlaying);
    }
    function changeRange(){
        audioPlayer.current.currentTime = progressBar.current.value;
        changePlayerCurrentTime();
    }

    function changePlayerCurrentTime(){
        progressBar.current.style.setProperty(`--seek-before-width`, `${progressBar.current.value / duration * 100 }%` );
        setCurrentTime(progressBar.current.value);
    }

    function backThirty(){
        progressBar.current.value = Number(progressBar.current.value) - 30;
        changeRange();
    }

    function forwardThirty(){
        progressBar.current.value = Number(progressBar.current.value) + 30;
        changeRange();
    }

    return(
        <PodcastContainer>
            <PodcastImage src={image}/>
            <audio  onLoadedMetadata={onLoadedMetadata} ref={audioPlayer} src={urlSrc} preload ="true"/>
            <AudioPlayerContainer>
             <h1>{title}</h1>   
            <ProgressContainer>
            {/* current time */}
            <div><p>{calculateTime(currentTime)}</p></div>
            {/* progress bar */}
            
                <Bar type="range" defaultValue="0" ref={progressBar} onChange={changeRange}/>
            
            {/* duration */}
            <div><p>{(duration && !isNaN(duration)) && calculateTime(duration)}</p></div>
            </ProgressContainer>
            <ButtonContainer>
            <Button onClick={backThirty}><ImBackward/></Button>
            <Button onClick={togglePlayPause}>{isPlaying ? <ImPause/> : <ImPlay2/> }</Button>
            <Button onClick={forwardThirty}><ImForward2/></Button>
            </ButtonContainer>
            </AudioPlayerContainer>
        </PodcastContainer>
    )
}