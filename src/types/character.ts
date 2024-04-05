export interface Character {
  id: number;
  name: string;
  status: string;
  image: string;
  gender: string;
  type: string;
}

export interface CharacterDetail extends Character {}

export type Info = {
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

export type FetchCharacters = (page: number) => void;
