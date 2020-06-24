import React from 'react'

class SocialLink extends React.Component{

    render(){
        console.log(this.props)
        return(
            <div className="Social-Link">
                <img className="Social-Square" src={this.props.social.blackWhiteImg}/> 
                    <div className="Social-Data">
                        <img src={this.props.social.colorImg} />
                    </div> 
            </div>
        )
    }    
}

export default SocialLink