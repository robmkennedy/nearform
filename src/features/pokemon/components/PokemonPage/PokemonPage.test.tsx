import { describe, it } from 'vitest';
import { render } from '@test/testUtils';
import { PokemonPage } from '@features/pokemon/components/PokemonPage/PokemonPage';

describe('PokemonPage', () => {
    it('renders pokemon page', () => {
        render(<PokemonPage />);

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
