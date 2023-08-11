import React from 'react'
import Typography from '@mui/material/Typography'

const Subtitle = ({text}) => {
  return (
    <Typography 
        variant={'Subtitle2'} 
        style={{textAlign: 'start'}}
    >
        {text}
    </Typography>
  )
}

export default Subtitle