import React from 'react'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'

const ErrorAlert = ({closeAlert}) => {
  return (
    <Alert onClose={closeAlert} severity='error' variant='filled'>
        <AlertTitle>Failed Fetch</AlertTitle>
        An unexpected error occured. Please try again.
    </Alert>
  )
}

export default ErrorAlert