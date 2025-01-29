'use client';

import { useCharacterStore } from '@/store/characterStore';
import CharacterCard from '@/components/characters/CharacterCard';

export default function CharactersPage() {
  const characters = useCharacterStore((state) => state.characters);

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">캐릭터 정보</h1>
      <div className="space-y-6">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}
