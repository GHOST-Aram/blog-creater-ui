import React from 'react'
import Button from '@mui/material/Button'


const EditButton = ({handleClick}) => {
    
  return (
    <Button 
        variant='contained' 
        color='primary' 
        onClick={handleClick}
    >
        Edit Blog
    </Button>
  )
}

export default EditButton