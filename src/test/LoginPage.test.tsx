import {describe, expect, test} from 'vitest';
import {render, screen} from '@testing-library/react';
import LoginPage from '../Pages/LoginPage';

describe("LoginPage test", () => {
    test("should show LoginPage", () => {
        
        render(<LoginPage />);

        expect(screen.findAllByText(/LoginPage/i)).toBeDefined()
    })
})
