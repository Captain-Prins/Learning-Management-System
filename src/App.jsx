import { useState } from 'react'
import {Login} from './pages/Login';
import {Dashboard} from './pages/Dashboard';
import {CourseDetail} from './pages/CourseDetail';
import {LessonDetails} from './pages/LessonDetails'
import {BreadCrumbs} from './components/BreadCrumbs'
import { Header } from "./components/Header";
import {Routes,Route} from 'react-router-dom';
import { ModuleDetails } from './pages/ModuleDetails';
function App() {
 
  return (
    <>
    <Header />
    {/* <BreadCrumbs/> */}
    <Routes>
      <Route index element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/courses/:id" element={<CourseDetail />} />
      <Route path="courses/:courseId/modules/:moduleId" element={<ModuleDetails />}/>
      <Route path="courses/:courseId/modules/:moduleId/lesson/:lessonId" element={<LessonDetails />}/>      
    </Routes></>
    
   
  )
}

export default App
