import React from 'react'
import PortfolioCard from './PortfolioCard'
import Row from 'react-bootstrap/Row'


function Portfolio(){
    return (
        <div className="Portfolio" id="Portfolio-Anchor">
          <div className="Section-Header">Portfolio</div>
          <div className="Section-Header-Underscore-Portfolio">i</div>
          <div className="Portfolio-Wrap">
                <Row className="Portfolio-Row">
                    <PortfolioCard></PortfolioCard>
                    <PortfolioCard></PortfolioCard>
                    <PortfolioCard></PortfolioCard>
                    <PortfolioCard></PortfolioCard>
                </Row>
            </div>       
        </div>
      );
}

export default Portfolio