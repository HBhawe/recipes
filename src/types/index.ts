export interface Ingredient {
  ingredient: string;
  quantity: number | string;
  unit?: string;
}

export interface SimpleRecipe {
  id: number;
  name: string;
  ingredients: Ingredient[];
  steps: string[];
  variations?: string[];
}

export interface RecipePart {
  name: string;
  ingredients: Ingredient[];
  steps: string[];
}

export interface PartsRecipe {
  id: number;
  name: string;
  parts: RecipePart[];
}

export type Recipe = SimpleRecipe | PartsRecipe;

export interface RecipeState {
  recipes: Recipe[];
  currentSelection: string | null;
  currentRecipe: Recipe | null;
}

export type RecipeAction =
  | { type: "changeSelection"; payload: string }
  | { type: "selectRecipe"; payload: number };

export interface RecipeContextValue {
  recipes: Recipe[];
  selectRecipe: (id: number) => void;
  currentSelection: string | null;
  currentRecipe: Recipe | null;
  changeRecipeList: (cuisine: string) => void;
}
