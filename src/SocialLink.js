import React from 'react'

function debounce(fn, ms) {
    let timer
    return _ => {
      clearTimeout(timer)
      timer = setTimeout(_ => {
        timer = null
        fn.apply(this, arguments)
      }, ms)
    };
  }

function SocialLink(props){

    const [dimensions, setDimensions] = React.useState({ 
        height: window.innerHeight,
        width: window.innerWidth
      })
    
    const debouncedHandleResize = debounce(function handleResize() {
        setDimensions({
          height: window.innerHeight,
          width: window.innerWidth
        })
      }, 100)
    

    React.useEffect(()=>{
        window.addEventListener('resize', debouncedHandleResize)
        return _ =>{window.removeEventListener('resize', debouncedHandleResize)}
    })

    return(
                <div className="Social-Link">
                    {dimensions.width > 768 ? ( 
                        <div className="Sub-Social-Link">
                            <img className="Social-BW Social-BW-Desktop" src={props.social.desktopBlackWhiteImg}/> 
                            <div className="Social-Data">
                                <img className="Social-Color Social-Color-Desktop" src={props.social.desktopColoredImg} />
                            </div> 
                        </div> 
                        
                    ) : ( 
                        <div className="Sub-Social-Link">
                            <img className="Social-BW Social-BW-Mobile" src={props.social.blackWhiteImg}/> 
                            <div className="Social-Data">
                                <img className="Social-Color Social-Color-Mobile" src={props.social.colorImg} />
                            </div> 
                        </div> 
                    )}   
                </div>
            )
    }

export default SocialLink