import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components";
import scrollTo from 'gatsby-plugin-smoothscroll';

const HeaderStyle = styled.header`
  margin: 0 auto;
  padding: var(--space-4), var(--size-gutter);
  display: flex;
  flex-direction: row;
  alignItems: center;
  justifyContent: space-between;
  background: var(--color-code-bg);
  position: fixed;
  z-index:9999;
  width:100%;
  font-family: var(--font-sans);

  
  h1{
    flex:1;
    justifyContent:flex-start;
    display:flex;
    padding-left: 10px;
    font-size:1.5rem;
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
    color:var(--c2c-red);
    font-size: 1.2rem;
    font-weight:bold;
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

    button{
      background:#000;
      border:none;
      color:var(--c2c-red);
      cursor:pointer;
      margin:0;
      padding:0;
    }

    a{
      color:var(--c2c-red);
      text-decoration:none;
    }

    a:link{
      color:var(--c2c-red);
      text-decoration:none;
    }

    a:hover{
      color:var(--c2c-red);
      text-decoration:none;
    }

    a:visited{
      color:var(--c2c-red);
      text-decoration:none;
    }

  }
`;

//what needs to be done next 
//H1 appears when CF2C Logo is off screen
//or
//H1 appears when screen is less than 999px

export default function Header({ siteTitle, links}){

  function hasPathOrScroll(link){
    if(link.path.includes('#')){
      return(
        <li key={link.title}><button onClick={()=> scrollTo(link.path)}>{link.title}</button></li>
      )
    }else{
      return(
       <li key={link.title}><button><Link to={link.path}>{link.title}</Link></button></li> 
      )
    }
  }
  
  return(
  <HeaderStyle>
    <h1>
      <Link
        to="/"
      >
        {siteTitle}
      </Link></h1>
    <nav>
      <ul>
        {links.map(function(link){
          const navItem = hasPathOrScroll(link);
          return navItem;
        })}
      </ul>
    </nav>
  </HeaderStyle >
)}


