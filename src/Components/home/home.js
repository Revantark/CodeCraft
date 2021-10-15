import React from 'react'
import About from './about'
import Dates from './dates'
import './home.css'
import LandingPage from './landingPage'
import NavBar from './navbar'
export default function Home() {
    return (
        <div className='root' >
            <NavBar/>
            <LandingPage/>
            <Dates/>
            <About/>    
            
        </div>
    )
}

