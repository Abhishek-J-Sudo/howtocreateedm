import React from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HomePage />
      <Footer />
    </div>
  )
}

export default App
