import { useEffect, useState } from 'react';
import { Card, Flex, Image, Text } from '@mantine/core';
import type { Pokemon } from '@features/challenge/types/pokemonTypes';
import styles from './PokemonCard.module.css';

type PokemonCardProps = {
    pokemon: Pokemon;
    onClick: (pokemon: Pokemon) => void;
};

/**
 */
export function PokemonCard({ pokemon, onClick }: PokemonCardProps) {
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    useEffect(() => {
        const fetchImage = async () => {
            const response = await fetch(pokemon.url);
            const json = await response.json();
            const imageUrl = json.sprites.front_default;
            setImageUrl(imageUrl);
        };
        fetchImage().catch(console.error);
    }, [pokemon.url]);

    const handleClick = () => {
        onClick(pokemon);
    };

    return (
        <Card classNames={styles} onClick={handleClick} shadow='sm' padding='xs' radius='md' withBorder>
            <Flex direction='column' align='center'>
                <Image w={96} h={96} src={imageUrl} alt='image' fallbackSrc='https://placehold.co/96x96?text=loading' />
                <Text className={styles.name}>{pokemon.name}</Text>
            </Flex>
        </Card>
    );
}
