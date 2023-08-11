import React from 'react'
import { List } from '@mui/material'
import ListItem from '@mui/material'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <nav>
                <List>
                    <ListItem>
                        <Link to={'/blogs'}>Blogs</Link>
                    </ListItem>
                    <ListItem>
                        <Link to={'/'}>Create Blog</Link>
                    </ListItem>
                </List>
            </nav>
        </header>
    )
}

export default Header