export type PokemonData = {
    abilities: Ability[];
    base_experience: number;
    cries: Cries;
    forms: Species[];
    game_indices: GameIndex[];
    height: number;
    held_items: any[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Move[];
    name: string;
    order: number;
    past_abilities: any[];
    past_types: any[];
    species: Species;
    sprites: Sprites;
    stats: Stat[];
    types: Type[];
    weight: number;
};

export type Ability = {
    ability: Species;
    is_hidden: boolean;
    slot: number;
};

export type Species = {
    name: string;
    url: string;
};

export type Cries = {
    latest: string;
    legacy: string;
};

export type GameIndex = {
    game_index: number;
    version: Species;
};

export type Move = {
    move: Species;
    version_group_details: VersionGroupDetail[];
};

export type VersionGroupDetail = {
    level_learned_at: number;
    move_learn_method: Species;
    version_group: Species;
};

export type Versions = Record<string, any>;

export type Other = Record<string, any>;

export type Sprites = {
    back_default: string;
    back_female: null;
    back_shiny: string;
    back_shiny_female: null;
    front_default: string;
    front_female: null;
    front_shiny: string;
    front_shiny_female: null;
    other?: Other;
    versions?: Versions;
    animated?: Sprites;
};

export type Home = Record<string, string | null>;

export type Stat = {
    base_stat: number;
    effort: number;
    stat: Species;
};

export type Type = {
    slot: number;
    type: Species;
};
