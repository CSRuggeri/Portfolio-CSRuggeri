import React from 'react'
import PrimaryButton from './button'
import { useNavigate } from 'react-router-dom';
import "./navBar.css"

export const NavBar = () => {
 const navigate = useNavigate()
    return (
    <div className='nav'>
        <PrimaryButton type='button' text='About' onClick={() => navigate('/About')} />
        <PrimaryButton type='button' text='Projects' onClick={() => navigate('/projects')}/>
        <PrimaryButton type='button' text='Home' onClick={() => navigate('/')} />
    </div>
  )
}
