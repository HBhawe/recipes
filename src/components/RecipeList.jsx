import { useRecipes } from "../contexts/RecipeContext.jsx";
import styles from "./RecipeList.module.css";

function RecipeList() {
	const { recipes } = useRecipes();

	return (
		<div>
			<ul className={styles.list}>
				{recipes.map((recipe) => (
					<li key={recipe.id}>{recipe.name}</li>
				))}
			</ul>
		</div>
	);
}

export default RecipeList;
