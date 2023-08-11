import React, { useState, useEffect } from 'react'
import BlockContainer from '../components/BlockContainer'
import Heading from '../components/Heading'
import BlogCard from '../components/BlogCard'
import UnorderedList from '../components/UnorderedList'
import { getBlogs } from '../utils/fectch'
import Paragraph from '../components/Paragraph'
import ErrorAlert from '../components/ErrorAlert'

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    const [isError, setIsError] = useState(false)

    useEffect(() =>{
        getBlogs('http://localhost:8000/blogs').then(blogs =>{
            Array.isArray(blogs) ? setBlogs(blogs) : setIsError(true)
        }).catch(error => setIsError(true))

    }, [])
    return (
        <BlockContainer>
            <Heading text={'Blogs'} level={1}/>
            <UnorderedList>
                {
                    (blogs.length > 0 && !isError) && 
                    blogs.map(blog =>(
                        <BlogCard  key ={blog._id} blog={blog}/>  
                    )) 
                } 
                {
                    blogs.length < 1 && !isError &&
                    <Paragraph>{'No Blogs to display'}</Paragraph>
                }
                {
                    (blogs.length < 1 && isError) && 
                    <ErrorAlert closeAlert = {() =>{}}/>
                }
                
            </UnorderedList>
        </BlockContainer>
    )
}

export default Blogs