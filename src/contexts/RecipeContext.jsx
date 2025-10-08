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
	}
}

const RecipeProvider = ({ children }) => {
	const [{ recipes, currentSelection }, dispatch] = useReducer(
		reducer,
		initialState,
	);

	const changeRecipe = function (cuisine) {
		dispatch({ type: "changeSelection", payload: cuisine });
	};

	return (
		<RecipeContext.Provider value={{ recipes }}>
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
