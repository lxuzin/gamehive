import { Character } from '@/types';

interface CharacterCardProps {
  character: Character;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{character.name}</h2>
          <p className="mt-1 text-gray-600">Lv.{character.level} {character.class}</p>
        </div>
      </div>
      
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-900">스탯</h3>
        <div className="mt-2 grid grid-cols-2 gap-4">
          <div className="flex justify-between">
            <span className="text-gray-600">HP</span>
            <span className="font-medium">{character.stats.hp}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">MP</span>
            <span className="font-medium">{character.stats.mp}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">공격력</span>
            <span className="font-medium">{character.stats.attack}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">방어력</span>
            <span className="font-medium">{character.stats.defense}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">이동속도</span>
            <span className="font-medium">{character.stats.speed}</span>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-900">인벤토리</h3>
        <div className="mt-2 space-y-2">
          {character.inventory.map((item) => (
            <div key={item.id} className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <div>
                <span className="font-medium text-gray-900">{item.name}</span>
                <span className="ml-2 text-sm text-gray-500">{item.type}</span>
              </div>
              <span className={`text-sm ${
                item.rarity === '레어' ? 'text-blue-600' : 'text-gray-600'
              }`}>
                {item.rarity}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
