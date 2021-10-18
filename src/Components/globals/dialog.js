import React from 'react'
import './dialog.css'

function Dialog({message,setstatus,onOK}) {
    return (
        <div className="overlay">
            <div className="overlay-content">  
                <p style={{fontSize:'25px'}}>
                   {
                       message.status
                   }
                </p> 

                <div>
                    <p style={{fontSize:'15px'}}>
                    {
                        message.desc
                    }
                    </p>  
                        
                    {/* Buttons Performing Operations */}
                    <span className="btn-container">
                        <button className="btn" onClick={function() {
                            setstatus(null)
                            onOK()
                            
                        }}>HOME</button>
                    </span>
                </div>
                
            </div>              
        </div>
    );
}

export default Dialog
