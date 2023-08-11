import React from 'react'
import Typography from '@mui/material/Typography'

const Heading = ({text, level}) => {
    switch(level) {
        case 1: return(
            <Typography 
                variant={'h2'} 
                component ={'h1'} 
                gutterBottom
                style={{textAlign: 'start'}}
                color={'success'}
            >
                {text}
            </Typography>
        )
        case 2: return(
            <Typography 
                variant={'h3'} 
                component ={'h2'} 
                gutterBottom
                style={{textAlign: 'start'}}
            >
                {text}
            </Typography>
        )
        case 3: return(
            <Typography 
                variant={'h4'} 
                component ={'h3'} 
                gutterBottom
                style={{textAlign: 'start'}}
            >
                {text}
            </Typography>
        )
        case 4: return(
            <Typography 
                variant={'h4'} 
                component ={'h4'} 
                gutterBottom
                style={{textAlign: 'start'}}
            >
                {text}
            </Typography>
        )
        case 5: return(
            <Typography 
                variant={'h4'} 
                component ={'h5'} 
                gutterBottom
                style={{textAlign: 'start'}}
            >
                {text}
            </Typography>
        )
        case 6: return(
            <Typography 
                variant={'h5'} 
                component ={'h6'} 
                gutterBottom
                style={{textAlign: 'start'}}
            >
                {text}
            </Typography>
        )
        default: return(
            <Typography 
                variant={'h4'} 
                component ={'h1'} 
                gutterBottom
                style={{textAlign: 'start'}}
            >
                {text}
            </Typography>

        )

    }
    

}

export default Heading