import * as React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const MissionContainer = styled.div`
    width:80%;
    margin: 0 auto;
    display:flex;
`;

const HostImage = styled.div`
    display:block;
    flex:5;
    
`


const HostContainer = styled.div`
    display:flex;
`;

const HostDecorator = styled.div`
    height: 80%;
    flex:1;
    margin: 10px 10px 10px 10px;
    border-left: 15px solid var(--c2c-red);
`

const MissionText = styled.div`
    flex:3;
`


export default function Mission() {
    return (
        <MissionContainer>
            <HostContainer>
                <HostImage>
                    <div>
                        <StaticImage style={{ width: '100%', borderRadius: '10px', marginRight: '10px' }} src="../images/JayAndGeorge.jpg" alt="Picture of Jay and George Recording a Podcast together and smiling" placeholder='blurred' layout='fullWidth' />
                    </div>
                </HostImage>
                <HostDecorator />
            </HostContainer>
            <MissionText>
                <p>LOL I AM TEXT I AM HERE TO FILL SPACELOL I AM TEXT I AM HERE TO FILL SPACELOL I AM TEXT I AM HERE TO FILL SPACELOL I AM TEXT I AM HERE TO FILL SPACELOL I AM TEXT I AM HERE TO FILL SPACE</p>
            </MissionText>
        </MissionContainer>
    )
}


///notes: change the flex to a grid, the flex is making the hostImage to small