import React from 'react'

function Main(){
    return (
        <div className="Main">
          <div className="main-message">
              Welcome I am <span className="header-text">Sam Tom</span>, I make websites and software.
          </div>
          <button className="main-button">
              Check It Out
          </button>
          <img
                    alt=""
                    src="/dragonsamtomwhite.svg"
                    width="1250"
                    height="600"
                    className="Main-Background-Pic"
                />
        </div>
      );
}

export default Main