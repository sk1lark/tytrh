export interface Choice {
  text: string;
  nextScene: string;
  requiresItem?: string | string[];
  action?: 'attack' | 'defend' | 'observe' | 'use_item' | 'flee';
}

export interface Observable {
  keyword: string;
  description: string;
}

export interface Enemy {
    id: string;
    name: string;
    description: string;
    health: number;
    attack: number;
    observations: string[]; // Different observations as health decreases
}

export interface Encounter {
    enemyId: string;
    winScene: string;
    loseScene: string;
    fleeScene?: string;
}

export interface Scene {
  id: string;
  text: string[];
  choices: Choice[];
  addItem?: string | string[];
  removeItem?: string;
  isEnd?: boolean;
  observables?: Observable[];
  encounter?: Encounter;
}

export type StoryData = Record<string, Scene>;
export type EnemyData = Record<string, Enemy>;
