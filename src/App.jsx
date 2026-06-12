import { useState } from 'react'
import {Login} from './pages/Login';
import {Dashboard} from './pages/Dashboard';
import {CourseDetail} from './pages/CourseDetail';
import {Routes,Route} from 'react-router-dom';
import { ModuleLesson } from './pages/ModuleLesson';
function App() {
 
  return (
    
    <Routes>
      <Route index element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/courses/:id" element={<CourseDetail />} />
      

      <Route path="courses/:courseId/modules/:moduleId" element={<ModuleLesson />}/>
    </Routes>
   
  )
}

export default App
