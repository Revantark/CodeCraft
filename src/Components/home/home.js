import React from 'react'
import About from './about'
import Dates from './dates'
import './home.css'
import LandingPage from './landingPage'
export default function Home() {
    return (
        <div className='root' >
            <LandingPage/>
            <Dates/>
            <About/>    
            
        </div>
    )
}

