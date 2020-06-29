import React from 'react'

class SocialLink extends React.Component{

    constructor(props){
        super(props);
        this.state={
            isDesktop: false
        }
        this.resize = this.resize.bind(this)
    }

    componentDidMount(){
        this.resize();
        window.addEventListener("reszie", this.resize)
    }

    componentWillMount(){
        window.removeEventListener("resize", this.resize)
    }

    resize(){
        this.setState({isDesktop: window.innerWidth>768})
    }

    render(){
        const isDesktop = this.state.isDesktop
        console.log(this.props)
        console.log(isDesktop)
        return(
            <div className="Social-Link">
                {isDesktop ? ( 
                    <div>
                        <img className="Social-Square" src={this.props.social.desktopBlackWhiteImg}/> 
                        <div className="Social-Data">
                            <img src={this.props.social.desktopColoredImg} />
                        </div> 
                    </div> 
                    
                ) : ( 
                    <div>
                        <img className="Social-Square" src={this.props.social.blackWhiteImg}/> 
                        <div className="Social-Data">
                            <img src={this.props.social.coloredImg} />
                        </div> 
                    </div> 
                )}   
            </div>
        )
    }    
}

export default SocialLink