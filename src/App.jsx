import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Background from './components/Background'
import Home from './pages/Home'
import ProjectDetails from './pages/ProjectDetails'

function App() {
  return (
    <Router>
      <div className="app">
        <Background />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
