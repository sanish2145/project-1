import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

function App() {

  return (
  <main>
    <div className='bg-red-400 text-2xl'>hello</div>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Register />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
  </main>
  )
}