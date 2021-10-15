import React from 'react'
import './dates.css'
export default function Dates() {

    
    

    return (
        <div id='dates' className='fullscreen dates-container'  >

        <p className='dates-title' >Event dates</p>
        <section  className=' date-page' >
            <div className="date1">
                 <p className='date' >
                     19 
                 </p>
                 <p>SomeInfoHere</p>
                 <p>SomeMoreInfoHere</p>
            </div>
            <div className="v-line" ></div>
            <div className="date2">
            <p className='date' >
                     20 
                 </p>
                 <p>SomeInfoHere</p>
                 <p>SomeMoreInfoHere</p>
            </div>
        </section>
        <div className="space5"></div>
        </div>
    )
}
