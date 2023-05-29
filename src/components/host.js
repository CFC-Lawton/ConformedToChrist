import * as React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';


// create second host container with a row reverse on it and render out a new component based off of flow direction key

const HostContainer = styled.div`
 width:100%;
 display:flex;
flex-direction: row;
`;


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
    border-bottom: solid 4px var(--c2c-red);
    margin: 0 auto;

    h2{
        padding:0;
        margin:0;
    }
`;





/// look into gatsbyImage component
export default function Host({ image, flowDirection, bioContent }) {
    console.log(flowDirection, bioContent);


    return (
        <HostContainer>
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
        </HostContainer>
    )
}