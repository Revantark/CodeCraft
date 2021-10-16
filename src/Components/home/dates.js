import React from 'react'
import './dates.css'
export default function Dates() {  
    
    return (
        <div id='dates' className='fullscreen dates-container'  >

        <p className='dates-title' >Events this October</p>
        <section  className=' date-page' >
            <div className="e-dates">
                <p className='date'>
                    20                                  
                </p>                
                <div className="dateCard">
                <p>Introduction to CP</p>
                <p>CP Talk </p>
                </div>                
            </div>

            <div className="v-line"></div>

            <div className="e-dates">
                <p className='date' >
                    25 
                </p>
                <div className='dateCard' >
                <p>Introduction to codeCraft</p>
                <p>Basic Programming challenges</p>
                </div>                
            </div>

            <div className="v-line"></div>

            <div className="e-dates">
                <p className='date' >
                     26
                </p>
                <div className="dateCard">
                <p>codeCraft 3.0 contest</p>
                <p>Results announcement</p>
                </div>
            </div>           
        </section>
        <div className="space5"></div>
        </div>
    )
}
