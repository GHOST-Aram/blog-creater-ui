import React from 'react'
import Stack from '@mui/material/Stack'

const BlockContainer = ({children}) => {
  return (
    <Stack display={'block'} spacing={2}>{
        children
    }</Stack>
  )
}

export default BlockContainer