import React from 'react';

class RightArrow extends React.Component {

  render() {
    return(
      <div className='Forward-Arrow' onClick={this.props.goToNextSlide}>
        <i className='fa fa-angle-right fa-3x' aria-hidden='true'></i>
      </div>
    )
  }
}
export default RightArrow;