import { Divider, Stack } from '@mantine/core';
import { Page } from '@/common/components/Page/Page';
import { PokemonCatalog } from '@features/pokemon/components/PokemonCatalog/PokemonCatalog';
import { PokemonDeck } from '@features/pokemon/components/PokemonDeck/PokemonDeck';

/**
 */
export function PokemonPage() {
    return (
        <Page>
            <Stack>
                <PokemonDeck />
                <Divider />
                <PokemonCatalog />
            </Stack>
        </Page>
    );
}
