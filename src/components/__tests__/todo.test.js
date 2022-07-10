import { render, screen, cleanup } from '@testing-library/react'
import {Card} from '../cards'
import '@testing-library/jest-dom/extend-expect';

test('should render cards component',() => {
    render(<Card/>);
    const todoElement = screen.getByTestId('cards-1');
    expect(todoElement).toBeInTheDocument();


})

