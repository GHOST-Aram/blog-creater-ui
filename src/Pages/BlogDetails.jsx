import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BlockContainer from '../components/BlockContainer'
import Title from '../components/Title'
import Subtitle from '../components/Subtitle'
import Paragraph from '../components/Paragraph'
import { getBlogs } from '../utils/fectch'
import ErrorAlert from '../components/ErrorAlert'
import EditButton from '../components/EditButton'
import DeleteButton from '../components/DeleteButton'
import { deleteBlogById } from '../utils/fectch'
import { useNavigate } from 'react-router-dom'


const BlogDetails = () => {
    const [blog, setBlog] = useState({})
    const [isError, setIsError] = useState(false)
    const {id} = useParams()
    const navigate = useNavigate()

    const editBlog = () =>{
        navigate('edit', { state: blog})
    }

    const deleteBlog = () =>{
        deleteBlogById(`http://localhost:8000/blog/${id}`).then(
            result => navigate('/blogs', {replace: true})
        ).catch(error => setIsError(true))
    }

    useEffect(() =>{
        getBlogs(`http://localhost:8000/blog/${id}`).then(
            blog => {
                if(blog.body && blog.title && blog.snippet)
                    setBlog(blog)
                else
                    setIsError(true)
            }
        ).catch(error => setIsError(true))
    }, [id])

    return (
        <BlockContainer>
            {
            !isError && blog ? (
                <BlockContainer>
                    <Title text={blog.title}/>
                    <Subtitle text={blog.snippet}/>
                    <EditButton handleClick={editBlog}/>
                    <Paragraph>{blog.body}</Paragraph>
                    
                    <DeleteButton handleClick={deleteBlog}/>
                    
                </BlockContainer>
            )
            : <ErrorAlert closeAlert={() => setIsError(false)}/>
            }
        </BlockContainer>
    )
}

export default BlogDetails