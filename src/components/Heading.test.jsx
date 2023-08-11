import { render, screen } from '@testing-library/react';
import Heading from './Heading'

test('renders Blogs text', () => {
    render(<Heading text={'Blogs'} level={1}/>);
    const heading = screen.getByText(/Blogs/i);
    expect(heading).toBeInTheDocument();
});
test('renders h1', () => {
    render(<Heading text={'Blogs'} level={1}/>);
    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument();
});
