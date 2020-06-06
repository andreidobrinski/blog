import React from 'react'
import { Link } from 'gatsby'
import AdLogo from './ad-logo'
import { rhythm, scale } from '../utils/typography'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <HeaderLink title={title} />
      </h1>
    )
  } else {
    header = (
      <h3 style={{ marginTop: 0 }}>
        <HeaderLink title={title} />
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <AdLogo />
      <main>{children}</main>
      <footer style={{ float: 'right' }}>
        Built with&nbsp;
        <span role="img" aria-label="love">
          ❤️
        </span>
        &nbsp; in&nbsp;
        <span role="img" aria-label="canada">
          🇨🇦
        </span>
      </footer>
    </div>
  )
}

const HeaderLink = ({ title }) => (
  <Link
    style={{
      boxShadow: `none`,
      color: `inherit`,
      fontFamily: 'inherit',
    }}
    to="/"
  >
    {title}
  </Link>
)

export default Layout
