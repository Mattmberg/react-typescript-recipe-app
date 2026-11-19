import { Recipe, CreateRecipeDTO } from '../types';



export const recipeService = {
  async getAll(): Promise<Recipe[]> {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error('Failed to fetch recipes.');
    return res.json();
  },

  async create(data: CreateRecipeDTO): Promise<Recipe> {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Failed to create recipe.');
    return res.json();
  },

  async update(id: string, data: Partial<Recipe>): Promise<void> {
    const res = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Failed to update recipe.');
  },

  async delete(id: string): Promise<void> {
    const res = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!res.ok) throw new Error('Failed to delete recipe.');
  },
};