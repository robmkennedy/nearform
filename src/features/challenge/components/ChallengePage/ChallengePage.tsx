import { Divider, Grid } from '@mantine/core';
import { Page } from '@/common/components/Page/Page';
import { PokemonCatalog } from '@features/challenge/components/PokemonCatalog/PokemonCatalog';
import { PokemonDeck } from '@features/challenge/components/PokemonDeck/PokemonDeck';

/**
 */
export function ChallengePage() {
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
