import { Button, Group, Text } from '@mantine/core';
import type { PokemonResult } from '@features/pokemon/types/pokemonTypes';
import { useTranslation } from 'react-i18next';

type PokemonCatalogControlProps = {
    data: PokemonResult | undefined;
    onPrev: () => void;
    onNext: () => void;
};

/**
 */
export function PokemonCatalogControl({ data, onPrev, onNext }: PokemonCatalogControlProps) {
    const { t } = useTranslation();

    return (
        <Group>
            <Button onClick={onPrev} disabled={!data?.previous}>
                {t('pokemon.previous')}
            </Button>
            <Button onClick={onNext} disabled={!data?.next}>
                {t('pokemon.next')}
            </Button>
            {data && <Text>{t('pokemon.total', { count: data.count })}</Text>}
        </Group>
    );
}
