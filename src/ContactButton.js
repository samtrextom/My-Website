import React from 'react'

function ContactButton(){
    return(
        <div className="Contact-Button-Div">
            <a href="#Main-Anchor" className="Contact-Button">
                <svg 
                    preserveAspectRatio="none" 
                    viewBox="0 0 100 102" 
                    height="6vh" 
                    width="11vw">
                    <path 
                        d="M0,28.33 L50,0 L100,28.33 L100,38.33 L50,10 L0,38.33 Z" 
                        fill="#00FF00"
                        stroke="none">
                    </path>
                    <path 
                        d="M0,61.66 L50,33.33 L100,61.66 L100,71.66 L50,43.33 L0,71.66 Z" 
                        fill="#00FF00"
                        stroke="none">
                    </path>
                    <path 
                        d="M0,95 L50,66.66 L100,95 L100,105 L50,76.66 L0,105 Z" 
                        fill="#00FF00"
                        stroke="#none">
                    </path>
                </svg>
            </a>
        </div>
    )
}

export default ContactButton