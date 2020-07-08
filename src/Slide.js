import React from 'react'
import PortfolioCard from './PortfolioCard';
import BlogCard from './BlogCard';

class Slide extends React.Component {
    constructor(props) {
      super(props);
      this.state = {landing: this.props.slides};
    }
  render() {

      return(
        <section>
        {
          this.state.landing.map((s, index) =>
            <div className={
              index === this.props.activeIndex ? 'Active' : 'Inactive'}
              key={index}>
                  {this.props.type==="P"?
                  (<PortfolioCard cardData={s}></PortfolioCard>):
                  (<BlogCard blog={s}></BlogCard>)}
                
            </div>
          ) }
          </section>
        )
    }
  }
  export default Slide;