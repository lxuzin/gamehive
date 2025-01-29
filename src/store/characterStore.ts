import { create } from 'zustand';
import { Character } from '@/types';
import charactersData from '@/data/characters.json';

interface CharacterStore {
  characters: Character[];
  setCharacters: (characters: Character[]) => void;
}

export const useCharacterStore = create<CharacterStore>((set) => ({
  characters: charactersData.characters,
  setCharacters: (characters) => set({ characters }),
}));
