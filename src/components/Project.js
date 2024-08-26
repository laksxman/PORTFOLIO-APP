import React from 'react'
import './Project.css'
import Banner from '../assets/project.jpg'

function Project() {
  return (
    <section id="project">
        <h2 className='projectTitle'>My Projects</h2>
        <span className='projectDesc'> Here are my Projects</span>

        <div className='project-item'>
            <div className='item-details'>
                <p className='p1'>Project-1</p>
                <p className='p2'>TechStac: -HTML and CSS</p>
            </div>
            <a href=''> <img src={Banner} alt='Project-1' className='projectImg'/> </a>
        </div>

        <div className='project-item'>
            <div className='item-details'>
                <p className='p1'>Project-2</p>
                <p className='p2'>TechStac: -HTML and CSS</p>
            </div>
            <a href=''> <img src={Banner} alt='Project-2' className='projectImg'/> </a>
        </div>

        <div className='project-item'>
            <div className='item-details'>
                <p className='p1'>Project-3</p>
                <p className='p2'>TechStac: -HTML and CSS</p>
            </div>
            <a href=''> <img src={Banner} alt='Project-3' className='projectImg'/> </a>
        </div>

        <div className='project-item'>
            <div className='item-details'>
                <p className='p1'>Project-4</p>
                <p className='p2'>TechStac: -HTML and CSS</p>
            </div>
            <a href=''> <img src={Banner} alt='Project-4' className='projectImg'/> </a>
        </div>
    </section>
  )
}

export default Project
