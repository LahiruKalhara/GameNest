import { useState } from 'react'

import './App.css'
import HomePage from './pages/HomePage'
import AppRoutes from './routes/AppRoutes'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppRoutes />
    </>
  )
}

export default App
