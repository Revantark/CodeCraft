import React from 'react'
import './dates.css'
export default function Dates() {  
    
    return (
        <div id='dates' className='fullscreen dates-container'  >

        <p className='dates-title' >Events this October</p>
        <section  className=' date-page' >
            <div className="date0">
                <p className='date' >
                    20                                  
                </p>                
                <div className="dateCard">
                <p>Some CP talks</p>
                <p>Mock Contest</p>
                </div>                
            </div>

            <div className="v-line"></div>

            <div className="date1 ">
                <p className='date' >
                    25 
                </p>
                <div className='dateCard' >
                <p>Some CP talks</p>
                <p>Mock Contest</p>
                </div>                
            </div>

            <div className="v-line"></div>

            <div className="date2">
                <p className='date' >
                     26
                </p>
                <div className="dateCard">
                <p>Contest</p>
                <p>Contest</p>
                </div>
            </div>           
        </section>
        <div className="space5"></div>
        </div>
    )
}
