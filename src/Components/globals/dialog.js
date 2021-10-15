import React from 'react'
import './dialog.css'

function Dialog({message,setstatus,onOK}) {
    return (
        <div className="overlay">
            <div className="overlay-content">  
                <p style={{fontSize:'30px'}}>
                   {
                       message
                   }
                </p>  
                     
                {/* Buttons Performing Operations */}
                <span className="btn-container">
                    <button className="btn" onClick={function() {
                        setstatus(null)
                        onOK()
                        
                    }}>OK</button>
                </span>
            </div>              
        </div>
    );
}

export default Dialog
