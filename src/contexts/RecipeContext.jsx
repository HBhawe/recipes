import { createContext, useContext, useReducer } from "react";

import chineseRecipes from "/src/data/indian_chinese_recipes.json";
import indianRecipes from "/src/data/recipes.json";

const RecipeContext = createContext();

const initialState = {
	recipes: chineseRecipes,
	currentSelection: null,
	currentRecipe: [],
};

function reducer(state, action) {
	switch (action.type) {
		case "changeSelection":
			return { ...state, currentSelection: action.payload };

		case "selectRecipe": {
			const recipe = state.recipes.find((el) => el.id === action.payload);
			return { ...state, currentRecipe: recipe };
		}
	}
}

const RecipeProvider = ({ children }) => {
	const [{ recipes, currentSelection, currentRecipe }, dispatch] = useReducer(
		reducer,
		initialState,
	);

	const changeRecipeList = function (cuisine) {
		dispatch({ type: "changeSelection", payload: cuisine });
	};

	function selectRecipe(id) {
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

const useRecipes = () => {
	const recipe = useContext(RecipeContext);
	if (recipe === undefined) {
		throw new Error("useRecipes must be used within the context");
	}
	return recipe;
};

export { RecipeProvider, useRecipes };
