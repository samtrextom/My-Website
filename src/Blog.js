import React from 'react'
import BlogFooter from './BlogFooter'
import BlogCard from './BlogCard'
import blogSlideData from './blogSlideData'
import Carousel from './Carsouel'

const blogs = blogSlideData.map(blog=><BlogCard key={blog.id} blog={blog}/>)

function Blog(){

    return(
        <div className="Blog" id="Blog-Anchor">
            <div className="Section-Header">Blog</div>
            <div className="Section-Header-Underscore-Blog">i</div>
            <div className="Blog-Wrap">
                <div className="Blog-Row">
                    {blogs}
                </div>
                <Carousel slides={blogSlideData} type={"C"}/>
            </div>            
            <BlogFooter/>
        </div>
    )
}

export default Blog