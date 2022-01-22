export interface PokemonDetails {
    imageUrl: string;
    weight: number;
    height: number;
    types: string[];
}

export interface Pokemon {
    name: string;
    url: string;
    details?: PokemonDetails
}

