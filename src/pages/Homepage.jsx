import React from 'react'
import { About, Contact, Experience, Hero, Tech, Works } from '../sections'
import PersonalProject from '../sections/PersonalProject'
import { StarsCanvas } from '../components'

const Homepage = () => {
    return (
        <>
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Hero />
            </div>
            <About />
            <Experience />
            <Tech />
            <Works />
            <PersonalProject />
            <div className="relative z-0">
                <Contact />
                <StarsCanvas />
            </div>
           
        </>
    )
}

export default Homepage