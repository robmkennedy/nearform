import { Group, ScrollArea } from '@mantine/core';
import { Section } from '@common/components/Section/Section';
import type { Pokemon } from '@features/pokemon/types/pokemonTypes';
import { pokemonDeselected } from '@features/pokemon/state/pokemonDeckSlice';
import { PokemonCard } from '@features/pokemon/components/PokemonCard/PokemonCard';
import { useAppDispatch } from '@common/hooks/useAppDispatch';
import { useAppSelector } from '@common/hooks/useAppSelector';
import { useTranslation } from 'react-i18next';

/**
 */
export function PokemonDeck() {
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    const pokemonDeckList = useAppSelector((state) => state.pokemonDeck.pokemonDeckList);

    const handlePokemonSelected = (pokemon: Pokemon) => {
        dispatch(pokemonDeselected(pokemon));
    };

    const pokemonCards = pokemonDeckList.map((pokemon) => {
        return <PokemonCard onClick={handlePokemonSelected} key={pokemon.name} pokemon={pokemon} />;
    });

    return (
        <Section title={t('pokemon.deck')}>
            <ScrollArea scrollHideDelay={0} offsetScrollbars style={{ width: '100%' }}>
                <Group gap='sm' wrap='nowrap'>
                    {pokemonCards}
                </Group>
            </ScrollArea>
        </Section>
    );
}
