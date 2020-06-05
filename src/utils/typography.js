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

Wordpress2016.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    boxShadow: `none`,
  },
  a: {
    color: 'rgba(0, 0, 0, 0.9)',
    textDecoration: 'none',
    padding: '0 1px',
    boxShadow: 'inset 0 -6px 0 0 #61dbff',
    transition: 'box-shadow 0.3s ease-in',
  },
  'a:hover': {
    boxShadow: 'inset 0 -40px 0 0 #61dbff',
  },
  'a:active': {
    boxShadow: 'inset 0 -40px 0 0 #61dbff',
  },
  'h1, h2, h3, h4, h5, h6': {
    fontFamily: `Hind,${joinedFonts}`,
  },
  'li, footer, a, p, small': {
    fontFamily: `Open Sans,${joinedFonts}`,
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
