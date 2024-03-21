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
     <h2  className='CS'> <a href="https://docs.google.com/document/d/1Bik56QbWPiMN1UFKwcA85ucaD3_oiEUE/edit?usp=sharing&ouid=104736577335456997121&rtpof=true&sd=true">RESSUME/CURRICULUM</a> </h2>
     
         <div className='courses'>
            
      {coursesData.courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
        </div>
  )
}
