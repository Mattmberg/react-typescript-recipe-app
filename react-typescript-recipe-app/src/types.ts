export type RecipeCardType = {
    id: number;
    name: string;
    cookTemp: number;
    description: string;
    ingredients: string[];
}

export interface Recipe {
  id: string;
  title: string;
  completed: boolean;
}

export type CreateRecipeDTO = Omit<Recipe, 'id'>;
