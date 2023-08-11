import React from 'react'

const Main = ({children}) => {
  return (
    <main aria-live='polite'>{children}</main>
  )
}

export default Main