import React from 'react';

class LeftArrow extends React.Component {

  render() {
    return(
      <div className='Back-Arrow' onClick={this.props.goToPrevSlide}>
        <i className='fa fa-angle-left fa-3x' aria-hidden='true'></i>
      </div>
    )
  }
}
export default LeftArrow;