import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components";

const HeaderStyle = styled.header`
  margin: 0 auto;
  padding: var(--space-4), var(--size-gutter);
  display: flex;
  flex-direction: row;
  alignItems: center;
  justifyContent: space-between;
  background: var(--color-code-bg);
  position: fixed;
  width:100%;
  
  h1{
    flex:1;
    justifyContent:flex-start;
    display:flex;
    padding-left: 10px;
    a{
      color: var(--color-text);
      text-decoration:none;
      :hover{
        color: var(--color-text);

      }
      :visted{
        color: var(--color-text);
      }
    }

    @media (min-width:999px){
      display:none;
    }
  
  }

  nav{
    display:flex;
    flex-direction: row-reverse;
    flex:3;
    marginLeft:10px;
    ul{
      display: flex;
      flex-direction:row;
      justifyContent: flex-end;
      
      li{
        padding-right:10px;
        list-style:none;
        alignSelf:flex-end;
        display:flex;
      }
    }

  }
`;

//what needs to be done next 
//H1 appears when CF2C Logo is off screen
//or
//H1 appears when screen is less than 999px

const Header = ({ siteTitle }) => (
  <HeaderStyle>
    <h1>
      <Link
        to="/"
        style={{
          fontSize: `var(--font-sm)`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link></h1>
    <nav>
      <ul>
        <li>Home</li>
        <li>Podcasts</li>
      </ul>
    </nav>
  </HeaderStyle >
)

export default Header
