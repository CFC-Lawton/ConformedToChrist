import * as React from 'react';
import styled from 'styled-components';

import { StaticImage } from 'gatsby-plugin-image';

//Assumptions
//Similar design as the mission component
//Takes in three props image, flow-direction (picture left or picture right), bio content(name, bio)
// need to use a top level page query to get the pictures for each element

const HostContainer = styled.div`
    width: 100%;
    display:flex;
`

/// look into gatsbyImage component
export default function Host({ image, flowDirection, bioContent }) {
    console.log(image, flowDirection, bioContent);


    return (
        <HostContainer>
            hi
        </HostContainer>
    )
}