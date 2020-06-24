import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'

const fonts = [
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Ubuntu',
  'Cantarell',
  'Fira Sans',
  'Droid Sans',
  'Helvetica Neue',
  'sans-serif',
]

const joinedFonts = fonts.join(',')

export const colours = {
  primary: '#61dbff',
  secondary: '#062f70',
}

Wordpress2016.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    boxShadow: `none`,
  },
  a: {
    color: 'rgba(0, 0, 0, 0.9)',
    textDecoration: 'none',
    padding: '0 1px',
    boxShadow: `inset 0 -6px 0 0 ${colours.primary}`,
    transition: 'box-shadow 0.3s ease-in',
  },
  'a:hover': {
    boxShadow: `inset 0 -40px 0 0 ${colours.primary}`,
  },
  'a:active': {
    boxShadow: `inset 0 -40px 0 0 ${colours.primary}`,
  },
  'h1, h2, h3, h4, h5, h6': {
    fontFamily: `Hind,${joinedFonts}`,
  },
  'li, footer, a, p, small': {
    fontFamily: `Open Sans,${joinedFonts}`,
  },
  blockquote: {
    borderLeft: `0.32813rem solid ${colours.secondary}`,
  },
  code: {
    fontSize: 'inherit',
  },
})

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const { rhythm } = typography
export const { scale } = typography
