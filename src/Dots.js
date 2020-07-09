import React from 'react'

class Dots extends React.Component{

    constructor(props) {
        super(props)
        this.state = {slides: this.props.slides}
      }

    render(){
        
        return(
            <div className="Dots">
                {this.state.slides.map((s,index)=>
                    <div className={index===this.props.activeIndex ? 
                        'Active-Dot Dot' : 'InActive-Dot Dot'}
                        key={index}>
                    </div>
                )}
            </div>)
    }
}

export default Dots