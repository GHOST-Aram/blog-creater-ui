import React, { useState } from 'react'
import { postBlog } from '../utils/fectch'
import { 
    TextField, 
    Typography,
    Stack, 
    Button,
    Box,
    Alert,
    AlertTitle
} from '@mui/material'


const BlogCreater = () => {
    const [isDone, setIsDone] = useState(false)
    const [isError, setIsError] = useState(false)

    const [title, setTitle] = useState<string>('')
    const [snippet, setSnippet] = useState<string>('')
    const [body, setBody] = useState<string>('')

    //sEND BLOG TODB
    const submitBlog = async() =>{
        try {
            const blog = await postBlog('http://localhost:8000/blog', {
                title: title, snippet: snippet, body: body
            }) 
            //If sucess, clear everything and alert user
            if(blog.title){
                setBody('')
                setTitle('')
                setSnippet('')
                setIsDone(true)
            }
            
        } catch (error) {
            setIsError(true)
        }
       
    
    }
    return (
        <Stack display={'block'} >
            <Typography 
                style ={{textAlign: 'center'}}
                variant='h4' 
                component={'h1'}
                gutterBottom
            >
                Create Blog
            </Typography>

            {
                isDone && 
                    <Alert 
                        onClose={()=> setIsDone(false)} 
                        variant='filled' 
                        severity='success'
                    >
                        <AlertTitle>Well Done!</AlertTitle>
                        Blog Created Successfully
                    </Alert>
            }
            {
                isError && 
                    <Alert onClose={()=> setIsError(false)} variant='filled' severity='error'>
                        <AlertTitle>Failed!</AlertTitle>
                        Something Went Wrong Please Retry.
                    </Alert>
            }
            <Box component={'form'} noValidate autoComplete='off'>
                <Stack direction={'column'} spacing={4}>
                    <Stack direction={'row'} spacing={4} style={{
                        // backgroundColor: 'red'
                    }}>
                        <TextField 
                            style={{
                                width: '100%'
                            }}
                            label='Title'
                            color='secondary'
                            value={title}
                            variant='filled'
                            onChange={(e)=>setTitle(e.target.value)}
                            required
                            error = {(!title)}
                            helperText = {!title ? 'Title is required' : 'Write a descriptive title.'}
                        />
                        <TextField 
                            style={{
                                width: '100%'
                            }}
                            label='Snippet'
                            color='secondary'
                            variant='filled'
                            value={snippet}
                            onChange={(e)=>setSnippet(e.target.value)}
                            required
                            error = {(!snippet)}
                            helperText = {!snippet ? 'Snippet is required' : 'Write a short and informative Snippet.'}
                        />
                    </Stack>
                    <TextField 
                        label = 'Body'
                        multiline
                        minRows ={8}
                        color='secondary'
                        variant='filled'
                        value={body}
                        onChange={(e)=>setBody(e.target.value)}
                        required
                        error = {(!body)}
                        helperText = {!body ? 'Body is required' : 'Enjoy writing your Story all you want.'}
                    />
                    <Button
                        variant='contained'
                        size='large'
                        color='secondary'
                        onClick={submitBlog}
                    >Save and Publish</Button>
                </Stack>
            </Box>
        </Stack>
    )
}

export default BlogCreater