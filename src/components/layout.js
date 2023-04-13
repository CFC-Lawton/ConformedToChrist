/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header";
import GlobalStyle from "../styles/Global";
import styled from 'styled-components';
import 'normalize.css';

const LargeHeaderContainerBreak = styled.br`
  display:none;
  @media (min-width:399px){
    display:block;
  }
`;

const LargeHeaderContainer = styled.div`
  width: 100%;
  margin: 100px auto;
  @media (min-width:399px){
    width: 50%;  
  }
  @media (min-width:700px){
    width:550px; 
    
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



const Layout = ({ children }) => {
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
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <LargeHeaderContainer>
          <LargeHeaderH1>
            <LargeHeaderText>{headerText[0]}</LargeHeaderText>
            <LargeHeaderContainerBreak />
            <SmallHeaderText>{headerText[1] + " "}</SmallHeaderText>
            <LargeHeaderText>{headerText[2]}</LargeHeaderText>
          </LargeHeaderH1>
        </LargeHeaderContainer>

        <main>{children}</main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          © {new Date().getFullYear()} &middot; Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
