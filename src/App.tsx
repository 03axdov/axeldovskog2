import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Main from './views/Main'
import { useTheme } from './contexts/ThemeContext'

function App() {
  const { theme } = useTheme()

  return (<div className={"w-full theme-" + theme}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>)
}

export default App
