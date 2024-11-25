import './App.css'
import Navigation from './components/Navigation/navigation'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './screens/Home/home'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
