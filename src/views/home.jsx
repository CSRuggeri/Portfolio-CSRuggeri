import React from 'react'
import { NavBar } from "../components/navBar"
import { Intro } from '../components'
import { Profile } from '../components/profile'
import "./home.css"
export const Home = () => {
  return (
    <div className='home-cont'>
       <NavBar/>
<div className='profile'>
<Profile/>
</div>
       <div className='intro'>
       <Intro/>
        </div>

      


    </div>
  )
}
