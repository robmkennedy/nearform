import { useEffect, useState } from 'react';
import { Card, Flex, Image, Text } from '@mantine/core';
import type { Pokemon } from '@features/pokemon/types/pokemonTypes';
import { StatusIcon } from '@common/components/StatusIcon/StatusIcon';
import { useAppSelector } from '@common/hooks/useAppSelector';
import styles from './PokemonCard.module.css';

type PokemonCardProps = {
    pokemon: Pokemon;
    showStatus?: boolean;
    onClick: (pokemon: Pokemon) => void;
};

const fallbackSrc = 'https://placehold.co/96x96?text=loading';

/**
 */
export function PokemonCard({ pokemon, showStatus = false, onClick }: PokemonCardProps) {
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const isInDeck = useAppSelector((state) => state.pokemonDeck[pokemon.name]);

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
        <div onClick={handleClick} className={styles.pokemonCard}>
            <Card shadow='sm' padding='xs' radius='md' withBorder>
                <Flex direction='column' align='center'>
                    <Image w={96} h={96} src={imageUrl} alt='image' fallbackSrc={fallbackSrc} />
                    <Text className={styles.name}>{pokemon.name}</Text>
                </Flex>
            </Card>
            {showStatus && isInDeck && (
                <div className={styles.status}>
                    <StatusIcon status='success' />
                </div>
            )}
        </div>
    );
}
