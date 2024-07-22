// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import './App.css'

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Notes/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
