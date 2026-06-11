import { useState } from 'react'
import {Login} from './pages/Login';
import {Dashboard} from './pages/Dashboard';
import {Routes,Route} from 'react-router-dom';
function App() {
 
  return (
    
    <Routes>
      <Route index element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
   
  )
}

export default App
