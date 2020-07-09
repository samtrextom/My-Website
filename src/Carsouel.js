import React from 'react'
import Slide from './Slide'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'
import Dots from './Dots'

class Carousel extends React.Component {
    constructor(props) {
      super(props);
  this.state = {
        activeIndex: 0,
        length: this.props.slides.length
      };
    }

    componentDidMount(){
      this.startCarousel()
    }

    componentWillUnmount() {
      clearInterval(this.carouselInterval)
  }

    startCarousel = () => {
      this.carouselInterval = setInterval(() => {
          this.goToNextSlide()
      }, 4000)
  }

    goToPrevSlide() {
        let index = this.state.activeIndex
        let length = this.state.length
        if(index < 1) {
          index = length - 1
        }
        else {
          index--
        }
        this.setState({
          activeIndex: index
        })
      }

    goToNextSlide() {
          let index = this.state.activeIndex
          let length = this.state.length
        if(index === length - 1) {
            index = 0
          }
          else {
            index++
          }
        this.setState({
            activeIndex: index
          })
      }

      render() {

        return (
          <div className='Carousel'>
            <div className='Carousel-Items'>
                <LeftArrow goToPrevSlide={() => this.goToPrevSlide()}/>
                <Slide
                  activeIndex={this.state.activeIndex}
                  slides={this.props.slides}
                  type={this.props.type}/>
                <RightArrow goToNextSlide={() => this.goToNextSlide()}/>
                <Dots activeIndex={this.state.activeIndex} 
                  slides={this.props.slides}/>
            </div>  
          </div>
        );
      } 
}

export default Carousel