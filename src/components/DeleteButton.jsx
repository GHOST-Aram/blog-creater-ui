import React from 'react'
import Button from '@mui/material/Button'


const DeleteButton = ({handleClick}) => {
    
  return (
    <Button 
        variant='contained' 
        color='error' 
        onClick={handleClick}
    >
        Delete Blog
    </Button>
  )
}

export default DeleteButton