import { render, screen } from '@testing-library/react'
import Header from './Header'
import { BrowserRouter } from 'react-router-dom'

test('Renders header', () =>{
    render(<Header/>, { wrapper: BrowserRouter})
    const banner = screen.getByRole('banner')
    expect(banner).toBeInTheDocument()
})

test('Renders Navbar', () =>{
    render(<Header/>, { wrapper: BrowserRouter})
    const navbar = screen.getByRole('navigation')
    expect(navbar).toBeInTheDocument()
})
