import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import DesignGuidelines from './pages/DesignGuidelines'
import ExamplesPage from './pages/ExamplesPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/guidelines" element={<DesignGuidelines />} />
          <Route path="/examples" element={<ExamplesPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
