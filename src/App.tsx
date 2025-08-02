import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Landing from './views/Landing'
import Navbar from './components/Navbar'

function App() {

  return (<div className="w-full">
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>)
}

export default App
