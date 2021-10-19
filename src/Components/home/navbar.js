import React, { useEffect,useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import wlogo from '../../assets/white_logo.png'

export default function NavBar() {
    const [color,setColor] = useState('var(--txt-color)')
    const changeColor = ()=>{
        const scroll = document.documentElement.scrollTop || document.body.scrollTop
        
            const es = document.getElementById('dates').scrollHeight-100
            const landingPageSh = document.getElementById('landingPage').scrollHeight + es +100
            if(scroll >= es && scroll <= landingPageSh){
                setColor('black')
                
            }else setColor('var(--txt-color)')
    }
    
    useEffect(()=>{

        window.addEventListener("scroll",changeColor);
        return ()=>window.removeEventListener('scroll',changeColor)
    },[])

    return (
        <div id='nav-bar' className='nav-bar'
        style={{
            color:`${color}`,
            
            boxShadow:`0 2px 1px 1px hsla(0, 0%, 0%,0.2)`
        }}
        >
        <div onClick={()=>{
             window.open('https://codingstudio.club/', '_blank').focus();

        }} className="logo">
            <img alt='logo' src={color==='black'?logo:wlogo} ></img>
        </div>    
        <div  className='nav-links'>
      
            <a  href="#landingPage">Home</a>
            <a  href="#dates">Event details</a>       
            <a  href="#codeCraft" >About codeCraft</a>
        
        </div>
        
        </div>
    )
}
