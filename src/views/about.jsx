import React from 'react'
import { NavBar } from "../components/navBar"
import coursesData from '../data/courses.json';
import CourseCard from '../components/courseCard';
import "./about.css"
export const About = () => {
  return (
    <div>
         <NavBar/>

      <div className='conect'>
        <h2 className='CS'>LinkedIn: <a href="https://www.linkedin.com/in/CSRuggeri/">CSRuggeri</a></h2>
        <h2 className='CS'>GitHub: <a href="https://github.com/CSRuggeri"> CSRuggeri</a></h2>
        <h2 className='CS'>Instagram: <a href="https://www.instagram.com/santiruu?igsh=MTdtcWt5cDhjbWhubA%3D%3D&utm_source=qr"> @santiruu</a></h2> 
       
     </div>
     <h2  className='CS'> <a href="https://drive.google.com/file/d/1NLgixZyhuGNaYTGLntqcf7Z708uA9v6-/view?usp=sharing">RESSUME/CURRICULUM</a> </h2>
     
         <div className='courses'>
            
      {coursesData.courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
        </div>
  )
}
