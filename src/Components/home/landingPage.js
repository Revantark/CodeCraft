import React, { useEffect, useState } from 'react'
import './landingPage.css'
import {ReactComponent as DownArrow} from '../../assets/down.svg'
export default function LandingPage() {



    return (
        <div className="lp_root fullscreen">
            
                <div>
                <span className='title' >CodeCraft</span>
                <span className="subtitle">Something here idk</span>
                </div>
                <Timer/>
                <button className='btn'>
                    Register Now
                </button>
                <div className="downIcon" >
                <DownArrow/>
                </div>
        </div>
    )
}

const Timer = ()=>{
    const [time,setTime] = useState(['00','00','00','00'])
    const countDownDate = new Date("Oct 19, 2021 00:00:00").getTime();
    const updateTime = ()=>{
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
    }
    useEffect(()=>{
        updateTime()
    },[])
    
    return (
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
    )
}
