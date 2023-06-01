import * as React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';


// create second host container with a row reverse on it and render out a new component based off of flow direction key

const HostWrapper = styled.div`
    width:100%;
`

const HostContainerLeft = styled.div`
 width:100%;
 display:flex;
 flex-direction: column;
 @media (min-width: 1000px){
    flex-direction: row; 
 } 
`;


const HostContainerRight = styled.div`
width:100%;
 display:flex;
 flex-direction: column;
 @media (min-width: 1000px){
    flex-direction: row-reverse; 
 }
`

const HostImageWrap = styled.div`
    width:80%;
    margin:0 auto;
    @media (min-width:700px){
        width:300px;
        margin:10% 0;
    }
    @media (min-width:1000px){
        width: 300px;
    }
`;




const HostImageContainer = styled.div`
    display:flex;
    flex-direction: column;
    @media (min-width: 700px){
        flex-direction:row;
        justify-content:center;
    }
`;

const HostImage = styled.div`
flex:1;
margin-top: 35px;
`;

const HostDescription = styled.div`
flex: 2;
display:flex;
flex-direction:column;
`;

const HostDecorator = styled.span`
 display:block;
 width: 10px;
 height: 80%; 
 margin: 16% 10px;
 border-left: 15px solid var(--c2c-red);
`

const HostName = styled.div`
    text-align:center;
    width:70%;
    border-bottom: solid 7px var(--c2c-red);
    margin: 0 auto;

    h2{
        padding:0;
        margin:0;
    }
`;


function HostLeft({ image, bioContent }) {
    <HostContainerLeft>
        <HostImageContainer>
            <HostImageWrap>
                <HostImage>
                    <GatsbyImage image={image[0].node.childrenImageSharp[0].gatsbyImageData} alt={bioContent.name} />
                </HostImage>
            </HostImageWrap>
            <HostDecorator />
        </HostImageContainer>
        <HostDescription>
            <HostName>
                <h2>{bioContent.name}</h2>
            </HostName>
            <div>
                {bioContent.bio.map((sentence, i) => <p key={`${bioContent.name.split(' ').join('')}${i}`}>{sentence}</p>)}
            </div>
        </HostDescription>
    </HostContainerLeft>
}

function HostRight({ image, bioContent }) {
    <HostContainerRight>
        <HostImageContainer>
            <HostImageWrap>
                <HostImage>
                    <GatsbyImage image={image[0].node.childrenImageSharp[0].gatsbyImageData} alt={bioContent.name} />
                </HostImage>
            </HostImageWrap>
            <HostDecorator />
        </HostImageContainer>
        <HostDescription>
            <HostName>
                <h2>{bioContent.name}</h2>
            </HostName>
            <div>
                {bioContent.bio.map((sentence, i) => <p key={`${bioContent.name.split(' ').join('')}${i}`}>{sentence}</p>)}
            </div>
        </HostDescription>
    </HostContainerRight>
}

function HostComponent({ image, flowDirection, bioContent }) {
    let direction = flowDirection.toLowerCase();

    if (direction = 'left') {
        return <HostLeft image={image} bioContent={bioContent} />
    } else if (direction = 'right') {
        return <HostRight image={image} bioContent={bioContent} />
    } else {
        console.log('lol')
    }


}

//Find out why the components will not render
export default function Host({ image, flowDirection, bioContent }) {
    return (
        <HostWrapper>
            {/* <HostComponent image={image} flowDirection={flowDirection} bioContent={bioContent} /> */}
        </HostWrapper>
    )
}