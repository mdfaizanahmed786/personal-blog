import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Auth from './components/auth/Auth'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<NotFound />} />
      <Route path='/auth' element={<Auth/>}>
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
      </Route>

    </Routes>
  )
}

export default App
