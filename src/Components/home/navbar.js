import React, { useEffect } from 'react'
import { useState } from 'react/cjs/react.development';
import './navbar.css'
export default function NavBar() {

    const [color,setColor] = useState('var(--txt-color)')
    
    useEffect(()=>{
        window.addEventListener("scroll", _ => {
            
            const scroll = document.documentElement.scrollTop || document.body.scrollTop
            const es = document.getElementById('dates').scrollHeight-100
            const landingPageSh = document.getElementById('landingPage').scrollHeight + es +100
            if(scroll >= es && scroll <= landingPageSh){
                setColor('black')
            }else setColor('var(--txt-color)')
        }, true);
        
    },[])

    return (
        <div className='nav-bar'
        style={{
            color:`${color}`
        }}
        >
        <div className="logo">
            coding.Studio();
        </div>    
        <div className='nav-links'>
        <a href="#landingPage">Home</a>
        <a href="#dates">Event details</a>
        
        <a href="#codeCraft" >About codeCraft</a>
        
        </div>
        
        </div>
    )
}
