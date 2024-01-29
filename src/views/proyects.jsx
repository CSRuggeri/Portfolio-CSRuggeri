import React from 'react'
import { NavBar } from "../components/navBar"
import  projects from "../data/proyects.json"
import { Card } from '../components'
import "./project.css"
export const Projects = () => {
 
 
    return (
    <div>
         <NavBar/>

         <h2>🌟Here are some of my proyects, some are still being developed and are all made with lots of love🌟 </h2>
         <div className='cardsxd'>
         {projects.projects.map((project) => (
        <Card key={project.id} project={project} />
      ))}</div>
        </div>
  )
}
