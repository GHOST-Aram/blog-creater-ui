import { render, screen } from '@testing-library/react'
import Paragraph from './Paragraph'


test('Renders paragraph text' ,() =>{
    render(<Paragraph>Hello world</Paragraph>)
    const text = screen.getByText(/Hello World/i)
    expect(text).toBeInTheDocument()
})
