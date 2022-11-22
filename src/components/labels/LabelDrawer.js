import { useState } from "react";
import RecipeListItems from "../recipes/RecipeListItems";

export default function LabelDrawer({ labels, open, setOpen, recipes }) {
	const [currentLabel, setCurrentLabel] = useState();
	const [filteredRecipes, setFilteredRecipes] = useState();

	const getRecipesByLabel = (label, recipesArray) => {
		const recipesWithLabel = recipesArray.filter((recipe) =>
			recipe.labels.includes(label)
		);
		setFilteredRecipes(recipesWithLabel);
		return recipesWithLabel;
	};

	const handleClickListItem = (e) => {
		getRecipesByLabel(e.target.id, recipes);
		setCurrentLabel(e.target.id);
	};

	const handleClickBack = () => {
		if (!currentLabel) {
			setOpen(!open);
		}

		setCurrentLabel();
	};

	return (
		<div className={`label-drawer ${open ? "open" : ""}`}>
			<div className="header">
				<h1>{currentLabel ? `Recipes in "${currentLabel}"` : "Labels"}</h1>
				<button onClick={handleClickBack}>
					<i class="fa-solid fa-arrow-left"></i>
				</button>
			</div>

			{currentLabel ? (
				<RecipeListItems recipes={filteredRecipes} />
			) : (
				<ul className="label-list">
					{labels
						? labels.map((label, index) => (
								<li
									id={label}
									key={index}
									onClick={handleClickListItem}
									className={`${currentLabel === label ? "active" : ""}`}>
									<i className="fa-solid fa-tag"></i>
									{label}
								</li>
						  ))
						: null}
				</ul>
			)}
		</div>
	);
}
