import './App.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { ColorModeContext, useMode } from './Themes'
function App() {
  const [theme, colorMode] = useMode()
  return (
    <ColorModeContext.Provider value={colorMode}>
      <div className='app'>Hello</div>
    </ColorModeContext.Provider>
  )
}

export default App
