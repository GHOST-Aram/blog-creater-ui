import { render, screen } from "@testing-library/react";
import BlockContainer from "./BlockContainer";

test('Renders Div with text', () =>{
    render(<BlockContainer>World</BlockContainer>)
    const text = screen.getByText(/World/i)
    expect(text).toBeInTheDocument()
})