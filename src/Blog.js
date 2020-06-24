import React from 'react'
import BlogFooter from './BlogFooter'
import Row from 'react-bootstrap/Row'
import BlogCard from './BlogCard'

function Blog(){
    return(
        <div className="Blog" id="Blog-Anchor">
            <div className="Section-Header">Blog</div>
            <div className="Section-Header-Underscore-Blog">i</div>
            <div className="Blog-Wrap">
                <Row className="Blog-Row">
                    <BlogCard></BlogCard>
                    <BlogCard></BlogCard>
                    <BlogCard></BlogCard>
                    <BlogCard></BlogCard>
                </Row>
            </div>            
            <BlogFooter></BlogFooter>
        </div>
    )
}

export default Blog