import { Divider, Grid } from '@mantine/core';
import { Page } from '@/common/components/Page/Page';
import { PokemonCatalog } from '@features/pokemon/components/PokemonCatalog/PokemonCatalog';
import { PokemonDeck } from '@features/pokemon/components/PokemonDeck/PokemonDeck';

/**
 */
export function PokemonPage() {
    return (
        <Page>
            <Grid h='100%' gutter={70}>
                <Grid.Col span='content'>
                    <PokemonDeck />
                </Grid.Col>
                <Divider orientation='vertical' />
                <Grid.Col span='auto'>
                    <PokemonCatalog />
                </Grid.Col>
            </Grid>
        </Page>
    );
}
