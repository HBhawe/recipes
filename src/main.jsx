import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";
import { RecipeProvider } from "./contexts/RecipeContext.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RecipeProvider>
			<App />
		</RecipeProvider>
	</StrictMode>,
);
