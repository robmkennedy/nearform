import { Button } from '@mantine/core';
import type { PokemonResult } from '@features/pokemon/types/pokemonTypes';
import { nextIcon, prevIcon } from '@assets/images/icons';

type PokemonCatalogControlProps = {
    data: PokemonResult | undefined;
    onPrev: () => void;
    onNext: () => void;
};

/**
 */
export function PokemonCatalogControl({ data, onPrev, onNext }: PokemonCatalogControlProps) {
    return (
        <Button.Group>
            <Button variant='outline' size='compact-md' onClick={onPrev} disabled={!data?.previous}>
                {prevIcon}
            </Button>
            <Button variant='outline' size='compact-md' onClick={onNext} disabled={!data?.next}>
                {nextIcon}
            </Button>
        </Button.Group>
    );
}
