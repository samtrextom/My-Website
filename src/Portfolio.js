import React from 'react'
import PortfolioCard from './PortfolioCard'
import Carousel from './Carsouel'
import slides from './slides'


function Portfolio(){

    return (
        <div className="Portfolio" id="Portfolio-Anchor">
          <div className="Section-Header">Portfolio</div>
          <div className="Section-Header-Underscore-Portfolio">i</div>
          <div className="Portfolio-Wrap">
                <div className="Portfolio-Row">
                    <PortfolioCard></PortfolioCard>
                    <PortfolioCard></PortfolioCard>
                    <PortfolioCard></PortfolioCard>
                    <PortfolioCard></PortfolioCard>
                </div>
                <Carousel slides={slides} type={"P"}></Carousel>
            </div>    
        </div>
      );
}

export default Portfolio