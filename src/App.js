import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Add from "./Pages/Add"
import Books from "./Pages/Books"
import Update from "./Pages/Update"
import "./style.css"

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="/update/:id" element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App