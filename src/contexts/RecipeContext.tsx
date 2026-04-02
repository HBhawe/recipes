import { createContext, type ReactNode, useContext, useReducer } from "react";

import chineseRecipes from "../data/indian_chinese_recipes.json";

import type { Recipe, RecipeAction, RecipeContextValue, RecipeState } from "../types/index.ts";

const RecipeContext = createContext<RecipeContextValue | undefined>(undefined);

const initialState: RecipeState = {
  recipes: chineseRecipes as Recipe[],
  currentSelection: null,
  currentRecipe: null,
};

function reducer(state: RecipeState, action: RecipeAction): RecipeState {
  switch (action.type) {
    case "changeSelection":
      return { ...state, currentSelection: action.payload };

    case "selectRecipe": {
      const recipe = state.recipes.find((el) => el.id === action.payload) ?? null;
      return { ...state, currentRecipe: recipe };
    }

    default:
      return state;
  }
}

const RecipeProvider = ({ children }: { children: ReactNode }) => {
  const [{ recipes, currentSelection, currentRecipe }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  const changeRecipeList = function (cuisine: string) {
    dispatch({ type: "changeSelection", payload: cuisine });
  };

  function selectRecipe(id: number) {
    dispatch({ type: "selectRecipe", payload: id });
  }

  return (
    <RecipeContext.Provider
      value={{
        recipes,
        selectRecipe,
        currentSelection,
        currentRecipe,
        changeRecipeList,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

const useRecipes = (): RecipeContextValue => {
  const recipe = useContext(RecipeContext);
  if (recipe === undefined) {
    throw new Error("useRecipes must be used within the context");
  }
  return recipe;
};

export { RecipeProvider, useRecipes };
