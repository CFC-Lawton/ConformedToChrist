
import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Header from "./header";
import GlobalStyle from "../styles/Global";
import styled from 'styled-components';
import 'normalize.css';



const LargeHeaderContainerBreak = styled.br`
  display:block;
  @media (min-width:1000px){
    display:none;
  }
`;

const LargeHeaderContainer = styled.div`
  width: 100%;
  margin: 100px auto;
  display:none;

  a{
    color:#fff;
    text-decoration:none;
  }

  a:link{
    color:#fff;
    text-decoration:none;
  }

  a:hover{
    color:#fff;
    text-decoration:none;
  }

  a:visited{
    color:#fff;
    text-decoration:none;
  }


  @media (min-width:1000px){
    width:550px; 
    display:block;
  }
  
`;

const LargeHeaderH1 = styled.h1`
line-height: 1.2rem; 
  @media(min-width:399px){
    line-height: 2rem;
  }
  @media (min-width:700px){
    line-height: 3.5rem;
  }
  
`

const LargeHeaderText = styled.span`
  font-size: 60%;
  width:100%;
  margin: 0;
  text-align:center;
  display:block;
  @media (min-width:399px){
    font-size: 80%;
    display:initial;
  }
  @media (min-width:700px){
    font-size: 5rem;
  }
`;

const SmallHeaderText = styled.span`
  font-size:30%;
  width:100%;
  margin:0;
  padding-left: 0px;
  display:block;
  text-align:center;
  @media (min-width:399px){
    font-size: 50%;
    display:initial;
    padding:10px;    
  }
  @media (min-width:700px){
    font-size:3rem;
  }
`;


const Footer = styled.footer`
  color:#fff;
  background: #000;
  position: fixed;
  left:0;
  bottom:0;
  width: 100%;
  z-index:9999;
  fontSize: var(--font-sm);
  p{
    margin: 5px 5px 5px 20px;
    text-align:center;
  }
`


const Layout = ({ children, links }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const headerText = data.site.siteMetadata?.title.toUpperCase().split(' ');


  return (
    <>

      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} links={links} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
             
        <LargeHeaderContainer>
        <Link to="/">  
          <LargeHeaderH1>
            <LargeHeaderText>{headerText[0]}</LargeHeaderText>
            <LargeHeaderContainerBreak />
            <SmallHeaderText>{headerText[1] + " "}</SmallHeaderText>
            <LargeHeaderText>{headerText[2]}</LargeHeaderText>
          </LargeHeaderH1>
          </Link>
        </LargeHeaderContainer>
        


        <main>{children}</main>

        <Footer>
          <p>© {new Date().getFullYear()} &middot; Christ's Fellowship Church</p>
        </Footer>
      </div>
    </>
  )
}

export default Layout
