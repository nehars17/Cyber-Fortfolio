export interface IStorage {
  // Empty for static site
}

export class MemStorage implements IStorage {}

export const storage = new MemStorage();
