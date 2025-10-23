export type Pokemon = {
    name: string;
    url: string;
};

export type PokemonResult = {
    count: number;
    next: string;
    previous: string;
    results: Pokemon[];
};