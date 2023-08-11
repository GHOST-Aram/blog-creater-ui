import {render, screen} from '@testing-library/react'
import Main from './Main'

test('Renders main', () =>{
    render(<Main>Main</Main>)
    const mainElement = screen.getByRole('main')
    expect(mainElement).toBeInTheDocument()
})