import React, { useState } from 'react'
import { postBlog } from '../utils/fectch'
import { 
    TextField, 
    Typography,
    Stack, 
    Button,
    Box
} from '@mui/material'


const Form = () => {
    const [title, setTitle] = useState<string>('')
    const [snippet, setSnippet] = useState<string>('')
    const [body, setBody] = useState<string>('')
    const submitBlog = async() =>{
        const blog = await postBlog('http://localhost:3000/blog', {
            title: title, snippet: snippet, body: body
        }) 

        console.log(blog)
    }
  return (
    <Stack display={'block'} >
        <Typography 
            variant='h4' 
            component={'h1'}
            gutterBottom
        >
            Create Blog
        </Typography>
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
                >Create Blog</Button>
            </Stack>
        </Box>
    </Stack>
  )
}

export default Form