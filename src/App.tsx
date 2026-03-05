import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Tests from './pages/beta/Tests'
import Quranpage from './pages/v2/Quranpage'
import Shalat from './pages/v1/Shalat'
import Countdownpage from './pages/v1/Countdownpage'
import Login from './pages/v1/Login'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/test' element={<Tests/>}/>
      <Route path='/quran/:active' element={<Quranpage/>}/>
      <Route path='/shalat' element={<Shalat/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/countdown' element={<Countdownpage/>}/>
    </Routes>
  )
}

export default App