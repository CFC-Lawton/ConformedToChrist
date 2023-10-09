import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Episode = styled.div`
  width: 80%;
  margin: 0 auto;
  h3 {
    text-align: center;
  }
  button {
    background: var(--c2c-red);
    border: none;
    width: 80%;
    margin: 30px auto;
    border-radius: 15px;

    color: #fff;
    text-transform: uppercase;
    cursor: pointer;
    padding: 5px;
    text-align: center;
    display: block;
  }
`

const ImgTextWrapper = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px auto;
  border-top: solid 4px var(--c2c-red);
  border-bottom: solid 4px var(--c2c-red);
  padding: 20px;
  img {
    flex: 1;
    width: 80%;
    border-radius: 15px;
    margin: 0 auto;
  }

  p {
    flex: 3;
    padding: 10px;
  }

  @media (min-width: 1000px) {
    flex-direction: row;

    img {
      width: 200px;
      margin-right: 20px;
    }
  }
`

export default function LatestEpisode({ title, image, description, episode }) {
  return (
    <Episode>
      <h3>{`Episode ${episode}: ${title}`}</h3>
      <ImgTextWrapper>
        <img src={image} alt={`Cover Art for Episode #${episode}`} />
        <p>{`${description
          .split(">")[1]
          .split("<")[0]
          .substring(0, 200)}...`}</p>
      </ImgTextWrapper>
      <Link to={`/Episode-${episode}`}>
        <button>Listen</button>
      </Link>
    </Episode>
  )
}
