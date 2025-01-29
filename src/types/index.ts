export interface Post {
  id: string;
  title: string;
  content: string;
  category: string;
  author: string;
  createdAt: string;
  likes: number;
  comments: Comment[];
}

export interface Comment {
  id: string;
  content: string;
  author: string;
  createdAt: string;
  likes: number;
}

export interface Character {
  id: string;
  name: string;
  level: number;
  class: string;
  inventory: InventoryItem[];
  stats: CharacterStats;
}

export interface InventoryItem {
  id: string;
  name: string;
  type: string;
  rarity: string;
  stats?: ItemStats;
}

export interface CharacterStats {
  hp: number;
  mp: number;
  attack: number;
  defense: number;
  speed: number;
}

export interface ItemStats {
  attack?: number;
  defense?: number;
  speed?: number;
}
