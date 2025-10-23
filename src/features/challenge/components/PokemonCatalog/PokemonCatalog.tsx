import { PokemonCard } from '@features/challenge/components/PokemonCard/PokemonCard';
import { Section } from '@common/components/Section/Section';
import { Flex } from '@mantine/core';
import { useGetPokemonQuery } from '@features/challenge/state/pokemonApiSlice';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { pokemonSelected } from '@features/challenge/state/pokemonDeckSlice';
import { useAppDispatch } from '@common/hooks/useAppDispatch';
import { PokemonCatalogControl } from '@features/challenge/components/PokemonCatalogControl/PokemonCatalogControl';
import type { Pokemon } from '@features/challenge/types/pokemonTypes';

/**
 */
export function PokemonCatalog() {
    const [pokemonUrl, setPokemonUrl] = useState<string>('https://pokeapi.co/api/v2/pokemon');
    const { data, isLoading, isSuccess, isError } = useGetPokemonQuery(pokemonUrl);
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    const pokemonList = data ? data.results : [];

    const handlePokemonSelected = (pokemon: Pokemon) => {
        dispatch(pokemonSelected(pokemon));
    };

    const handleNext = () => {
        if (data && data.next) {
            setPokemonUrl(data.next);
        }
    };
    const handlePrev = () => {
        if (data && data.previous) {
            setPokemonUrl(data.previous);
        }
    };

    const pokemonDeckCards = pokemonList.map((pokemon) => {
        return <PokemonCard onClick={handlePokemonSelected} key={pokemon.name} pokemon={pokemon} />;
    });

    return (
        <Section title={t('pokemon.catalog')}>
            <PokemonCatalogControl data={data} onPrev={handlePrev} onNext={handleNext} />
            <Flex wrap='wrap' gap='sm'>
                {pokemonDeckCards}
            </Flex>
        </Section>
    );
}
