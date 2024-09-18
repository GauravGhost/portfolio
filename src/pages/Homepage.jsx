import React from 'react'
import { About, Contact, Experience, Hero, Tech, Works } from '../sections/Homepage'
import PersonalProject from '../sections/Homepage/PersonalProject'
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