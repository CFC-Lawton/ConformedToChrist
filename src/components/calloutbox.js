import * as React from 'react';
import styled from 'styled-components';

const CalloutBoxStyle = styled.div`
  width: 80%;
  margin:100px auto 20px auto;
  border-left: 15px solid var(--c2c-red);
  p{
    font-size: 1rem;
    padding: 10px;
    font-weight:700;
  }
  @media (min-width: 399px){
    font-size: 1.2rem;
    padding: 15px;
  }
  @media (min-width:700px){
    width:100%;
    p{
        font-size:1.7rem;
        padding:25px;
    }
  }

  @media (min-width:1000px){
    margin: 50px auto;
  }
`


export default function CalloutBox({ children }) {

    return (
        <CalloutBoxStyle>
            {children}
        </CalloutBoxStyle>
    )
}

//This Component will be a reusable component that allows text data to be taken in and create a callout box with the correct styling dictated in the mockup 