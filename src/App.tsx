import './App.css'
import Navigation from './components/Navigation/navigation'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './screens/Home/home'
import About from './screens/About/about'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutme" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
