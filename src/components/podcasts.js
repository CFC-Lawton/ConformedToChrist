import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const PodcastsWrapper = styled.div`
  display: grid;
  width: 80%;
  grid-template-columns: 1fr;
  margin: 50px auto;
  padding-bottom: 400px;

  @media (min-width: 700px) {
    width: 70%;
    grid-template-columns: 1fr 1fr;
    gap: 0.5%;
  }
  @media (min-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
  }
`

const Podcast = styled.div`
  width: 80%;
  margin: 40px auto;
  img {
    width: 100%;
    border-bottom: solid 10px var(--c2c-red);
    border-radius: 5px;
  }

  h3 {
    color: #fff;
  }

  p {
    border-bottom: solid 10px var(--c2c-red);
    padding-bottom: 20px;
  }

  button {
    background: var(--c2c-red);
    border: none;
    width: 100%;
    border-radius: 15px;
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;
    padding: 5px;
    text-align: center;
  }

  @media (min-width: 700px) {
    margin: initial;
  }
`

const SpacerDiv = styled.div`
  width: 100%;
  height: 100px;
  padding-bottom: 600px;
  display: block;
`

export default function Podcasts({ podcasts }) {
  return (
    <PodcastsWrapper>
      {podcasts.map(podcast => {
        return (
          <Podcast key={podcast.node.id}>
            <img
              src={podcast.node.item.itunes.image}
              alt={`Cover Art for Episode #${podcast.node.item.itunes.episode}`}
            />
            <h3>{`Episode #${podcast.node.item.itunes.episode}: ${podcast.node.item.title}`}</h3>
            <p>{`${podcast.node.item.content
              .split(">")[1]
              .split("<")[0]
              .substring(0, 200)}...`}</p>
            <Link to={`/Episode-${podcast.node.item.itunes.episode}`}>
              <button>Listen</button>
            </Link>
          </Podcast>
        )
      })}
      <SpacerDiv />
    </PodcastsWrapper>
  )
}
