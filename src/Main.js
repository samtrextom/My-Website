import React from 'react'

function Main(){
    return (
        <div className="Main" id="Main-Anchor">                            
            <img
                alt=""
                src="/dragonsamtomwhite.svg"
                width="1250"
                height="600"
                className="Main-Background-Pic"/>
            <img 
                alt=""
                src='./SLogowhite.svg'
                width='400'
                height='400'
                className='Mobile-Main-Background-Pic'/>
            <div className="Main-Content-Wrapper">
                <div className="Main-Message">
                Welcome I am <span className="Header-Text">Sam Tom</span>, I make websites and software.
                </div>
                <a href="#About-Anchor" className="Main-Button">
                    Check It Out
                </a> 
            </div>  
        </div>
      );
}

export default Main