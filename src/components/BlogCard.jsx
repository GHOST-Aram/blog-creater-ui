import React from 'react'
import Title from './Title'
import Subtitle from './Subtitle'
import MuiListItem from './MuiListItem'
import Stack from '@mui/material/Stack'
import { Link } from 'react-router-dom'


const BlogCard = ({blog}) => {
    return (
        <Link to={`${blog._id}`} state={{blog}}>   
            <MuiListItem>
                <Stack display={'blog'}>
                    <Title text ={blog.title}/>
                    <Subtitle text={blog.snippet}/>
                </Stack>
            </MuiListItem>
        </Link>
    )
}

export default BlogCard