import React from 'react'
import Typography from '@mui/material/Typography'

const Title = ({text}) => {
    return (
        <Typography 
            variant={'h5'} 
            component ={'h4'} 
            color={'success'}
        >
            {text}
        </Typography>
    )
}

export default Title