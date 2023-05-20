import * as React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';


// create second host container with a row reverse on it and render out a new component based off of flow direction key

const HostContainer = styled.div`
 width:100%;
 display:flex;
flex-direction: row-reverse;
`;

const HostImage = styled.div`
flex:1;
`;

const HostDescription = styled.div`
flex: 2;
display:flex;
flex-direction:column;
`;


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
            <HostImage>
                <GatsbyImage image={image[0].node.childrenImageSharp[0].gatsbyImageData} alt={bioContent.name} />
            </HostImage>
            <HostDescription>
                <HostName>
                    <h2>{bioContent.name}</h2>
                </HostName>
                <div>
                    {bioContent.bio.map(sentence => <p>{sentence}</p>)}
                </div>
            </HostDescription>
        </HostContainer>
    )
}