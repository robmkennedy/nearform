import { describe, expect, it } from 'vitest';
import { render, screen } from '@test/testUtils';
import { ChallengePage } from '@features/challenge/components/ChallengePage/ChallengePage';

describe('ChallengePage', () => {
    it('renders challenge page', () => {
        render(<ChallengePage />);
        const label = screen.getByText('Challenge Start Here');
        expect(label).toBeInTheDocument();

        // const button = screen.getByRole('button', { name: /search/i });
        // const input = screen.getByRole('textbox');
        // expect(button).toBeInTheDocument();
        // expect(input).toBeInTheDocument();

        // fireEvent.change(input, { target: { value: 'test input' } });
        // const inputFilled = screen.getByDisplayValue('test input');
        // expect(inputFilled).toBeInTheDocument();

        // fireEvent.click(button);
        // waitFor(() => {
        //     expect(screen.getByText('Item 1')).toBeInTheDocument();
        //     expect(screen.getByText('Item 2')).toBeInTheDocument();
        // });
    });
});
