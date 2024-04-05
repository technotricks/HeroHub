export interface Character {
  id: number;
  name: string;
  status: string;
  image: string;
  gender: string;
  type: string;
}

type NameObject = {
  name: string;
};

type Episode = {
  name: string;
  episode: string;
};

export interface CharacterDetail extends Character {
  origin: NameObject;
  location: NameObject;
  episode: Episode[];
}

type Info = {
  id: number;
  name: number;
  status: number;
};

// Create a TypeScript type for the query result
export type GetCharactersData = {
  characters: {
    results: Character[];
    info: Info;
  };
};

// Create a TypeScript type for the query result
export type GetCharacterData = {
  characters: {
    results: CharacterDetail[];
  };
};

export type FetchCharacters = (page: number) => void;
export type FetchCharacter = (id: number) => void;
