import React from 'react'
import NavBar from './NavBar'
import AboutFooter from './AboutFooter'

function About(){
    return (
        <div className="About">
            <NavBar></NavBar>            
            <div className="About-Left-Background-Shade"></div>
            <div className="Section-Header">About</div>
            <div className="About-Wrapper">
                <div className="About-Left-Side">
                    <div className="Big-Word Speed">Speed
                        <div className="Section-Description">
                            Interactions that are smooth, fast and fun.
                        </div>
                    </div>
                    <div className="Big-Word Response">Responsive
                        <div className="Section-Description">
                            Websites that look great on any device.
                        </div>
                    </div>
                    <div className="Big-Word Unique">Unique
                        <div className="Section-Description">
                            Designs that celebrate how special each project is. 
                        </div>
                    </div>
                    <div className="Big-Word Passion">Passion
                        <div className="Section-Description">
                            My passion is to help you with what you are passionate about.
                        </div>
                    </div>
                </div>           
                <div className="About-Right-Side">
                    <div className="Skills">
                        <div className="Skill React">React</div>
                        <div className="Skill Redux">Redux</div>
                        <div className="Skill Node">Node.js</div>
                        <div className="Skill Bootstrap">Bootstrap</div>
                        <div className="Skill CSS">CSS</div>
                        <div className="Skill Sass">Sass</div>
                        <div className="Skill Html">Html</div>
                        <div className="Skill Jquery">jQuery</div>
                        <div className="Skill Javascript">JavaScript</div>
                        <div className="Skill DotNet">.Net MVC</div>
                        <div className="Skill Firebase">Firebase</div>
                        <div className="Skill Angular">Angular</div>
                        <div className="Skill Vue">Vue.js</div>
                    </div>
                    <div className="Horizontal-Line-1"></div>
                    <div className="Horizontal-Line-2"></div>
                    <div className="Horizontal-Line-3"></div>
                    <div className="Horizontal-Line-4"></div>
                    <div className="Horizontal-Line-5"></div>
                    <div className="Horizontal-Line-6"></div>
                    <div className="Vertical-Line-1"></div>
                    <div className="Vertical-Line-2"></div>
                    <div className="Vertical-Line-3"></div>
                    <div className="About-Pic"></div>
                    <div className="About-Description">I’m a Developer from Milwaukee, WI.
                        I creating unique websites that can help 
                        your passion become a reality.
                        <a href="/Home">Lets make something sweet!</a>
                    </div>
                </div>
            </div>                       
            <AboutFooter></AboutFooter>
        </div>
      );
}

export default About