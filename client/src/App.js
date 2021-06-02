import React from 'react'
import { HomePage } from './components/HomePage'
import { Navbar } from './components/Navbar'
import './styling/app.css'

const App = () => {
  return (
    <div>
      <Navbar/>
      <HomePage/>
    </div>
  )
}

export default App