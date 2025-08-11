import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Main from './views/Main'

function App() {

  return (<div className="w-full">
      <Navbar />

      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>)
}

export default App
