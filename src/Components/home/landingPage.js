import React, { useLayoutEffect,useEffect, useState } from 'react'
import './landingPage.css'
import {ReactComponent as DownArrow} from '../../assets/down.svg'
import {ReactComponent as CClogo} from '../../assets/cclogo.svg'

import { useHistory } from 'react-router'
export default function LandingPage() {

    const history = useHistory()
    const [height,setHeight] = useState(0)

    useLayoutEffect(()=>{
        setHeight(document.getElementById('nav-bar').scrollHeight)
    },[])
    return (
        <div id='landingPage' className="lp_root fullscreen">
            {
                
            }
                <div style={{
                    height:`${height}px`
                }}></div>
            
                <div className='caption' >

                <span className='title' >CodeCraft
                <span style={{color:'blue'}}> 3.0</span> </span>
                {/* <span className="subtitle">Something here idk</span>  */}
                <div className="cchef">
                <span>Powered by </span>
                
                <CClogo/>
                

                </div>
                </div>
                <Timer/>
                <button onClick={()=>history.replace('register')} className='btn-reg'>
                    Register Now
                </button>
                <div className='space5' ></div>
                <a href="#dates">
                <div className="downIcon" >
                <DownArrow/>
                </div>
                </a>
                </div>
    )
}

 const Timer = ()=>{
    const [time,setTime] = useState(['00','00','00','00'])
    const countDownDate = new Date("Oct 24, 2021 00:00:00").getTime();
    
    useEffect(()=>{
        const x = setInterval(function() {

            const now = new Date().getTime();
          
            const distance = countDownDate - now;
          
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
          
            setTime([days,hours,minutes,seconds])
            if (distance < 0) {
              clearInterval(x);
              
            }
          }, 1000);
          return ()=>clearInterval(x)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    return (
    <>
    <span style={{
        fontSize:'1.25rem',
        textAlign:'center'
    }} >Registration closes in</span>
        <div className="timer" >

            <div className='timer-b timer' >
                <span>{time[0]}</span>
                <span>Days</span>
            </div>
            <div className='sep' ></div>
            <div className='timer-b timer' >
                <span>{time[1]}</span>
                <span>Hours</span>
            </div>
            <div  className='sep' ></div>

            <div className='timer-b timer' >
                <span>{time[2]}</span>
                <span>Mins</span>
            </div>
            <div className='sep' ></div>

            <div className='timer-b timer' >
                <span>{time[3]}</span>
                <span>Seconds   </span>
            </div>
        </div>
        </>
    )
}
