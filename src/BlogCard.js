import React from 'react'

class BlogCard extends React.Component{

    render(){

        

        return(
            <div className="Blog-Card">
                <img className="Blog-Pic" src={this.props.blog.photo}></img>
                <div className="Blog-Title">
                    {this.props.blog.title}
                    <div className="Blog-Date">
                        {this.props.blog.date}
                    </div>
                </div>
                <div className="Blog-Line">
                </div>
                <div className="Blog-Summary">
                    {this.props.blog.summary}
                </div>
            </div>
        )
    }   
}

export default BlogCard