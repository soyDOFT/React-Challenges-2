// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Details from './pages/Details'
import PageNotFound from './pages/PageNotFound'
import './App.css'

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Notes/>}/>
          <Route path="/details" element={<Details/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
