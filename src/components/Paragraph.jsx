import React from 'react'
import Typography from '@mui/material/Typography'

function Paragraph({children}) {
  return (
    <Typography
        variant='body2'
    >
        {children}
    </Typography>
  )
}

export default Paragraph