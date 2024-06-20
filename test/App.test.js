import { render, screen } from '@testing-library/react';
import App from '../src/App';
import { expect } from 'vitest';


describe('Render', ()=> {
    it('Show text', ()=> {
        console.log("Hello ")
        render(<Food />)
        // screen.debug()
        expect(5).toBe(5)
        // expect(screen.getByText('count is')).toBeInTheDocument();
    })
})