import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components";

const headerStyle = styled.header`
  margin: 0 auto;
  padding: var(--space-4), var(--size-gutter);
  display: flex;
  alignItems: center;
  justifyContent: space-between;
  background: var(--color-code-bg);
`;

const Header = ({ siteTitle }) => (
  <headerStyle>
    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      {siteTitle}
    </Link>
    <nav>
      <ul style={{ display: "inline" }}>
        <li style={{ listStyle: "none" }}>Home</li>
        <li style={{ listStyle: "none" }}>Podcasts</li>
      </ul>
    </nav>
  </headerStyle >
)

export default Header
