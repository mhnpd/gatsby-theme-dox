/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui'

// SVGs from https://github.com/feathericons/feather

const Sun = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
)

const Moon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
)

function ColorModeButton() {
  const [colorMode, setColorMode] = useColorMode()

  return (
    <button
      aria-hidden
      onClick={() => {
        setColorMode(colorMode === 'light' ? 'dark' : 'light')
      }}
      sx={{ bg: 'transparent', border: 0, p: '0.5em' }}
    >
      <span
        sx={{ color: 'text', display: 'block', width: '1em', height: '1em' }}
      >
        {colorMode === 'dark' ? <Moon /> : <Sun />}
      </span>
    </button>
  )
}

export default ColorModeButton