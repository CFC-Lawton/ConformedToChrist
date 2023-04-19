import * as React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

const MissionContainer = styled.div`
    width:80%;
    margin: 0 auto;
    display:flex;
    flex-direction:column;
    @media (min-width:700px){
        flex-direction:row;
    }
`;

const HostImage = styled.div`
    display:block;
    flex:5;
    justify-content:center;
    
`
const HostImageWrap = styled.div`
    width:80%;
    margin:0 auto;
    @media (min-width:700px){
        width:250px;
        margin:10% 0;
    }
    @media (min-width:1000px){
        width: 196px;
    }
`;




const HostContainer = styled.div`
    display:flex;
    flex-direction: column;
    @media (min-width: 700px){
        flex-direction:row;
        justify-content:center;
    }
`;

const HostDecorator = styled.div`
    width: 80%;
    flex:1;
    margin: 10px auto 10px auto;
    border-bottom: 10px solid var(--c2c-red);
    @media (min-width:700px){
        height:80%;
        width: 0; 
        margin: 10px 10px 10px 10px;
        border-left: 15px solid var(--c2c-red);
        border-bottom:none;
        align-self:center;
    }
`

const MissionText = styled.div`
    flex:1;
    flex-direction:column;
    justify-content:center;
    p{
        padding 10px 10px 10px 20px;
    }
    
`

const TopMissionDecorator = styled.div`
display:none;
@media (min-width:700px){
    align-self:center;
    width:80%;
    display:block;
    margin: 10% auto 20px auto;
    border-bottom: 10px solid var(--c2c-red);
}
@media (min-width:1000px){
    margin: 27px auto 20px auto;
}

`
const BottomMissionDecorator = styled.div`
width:80%;
margin: 20px auto 20px auto;
border-bottom: 10px solid var(--c2c-red);
@media (min-width:700px){
    align-self:center;
    margin: 20px auto 20px auto;
}
`

export default function Mission() {

    const missionQuery = useStaticQuery(graphql`query missionQuery {
  site {
    siteMetadata {
      siteContentData {
        mission
      }
    }
  }
}`)

    const mission = missionQuery.site.siteMetadata.siteContentData.mission;

    return (
        <MissionContainer>
            <HostContainer>
                <HostImage>
                    <HostImageWrap>
                        <StaticImage style={{ width: '100%', borderRadius: '10px', marginRight: '10px' }} src="../images/JayAndGeorge.jpg" alt="Picture of Jay and George Recording a Podcast together and smiling" placeholder='blurred' layout='fullWidth' />
                    </HostImageWrap>
                </HostImage>
                <HostDecorator />
            </HostContainer>
            <MissionText>
                <TopMissionDecorator />
                <p>{mission}</p>
                <BottomMissionDecorator />
            </MissionText>
        </MissionContainer>
    )
}


