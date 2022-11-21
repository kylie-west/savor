import React from "react";
import Recipe from "../recipes/Recipe";
import RecipeToolbar from "./RecipeToolbar";
import LabelPills from "../labels/LabelPills";

// The section of the dashboard where the selected recipe is displayed

function RecipeViewer({ setModalMode, toggleModal, selectedRecipe }) {
	return (
		<div className="recipe-viewer">
			{selectedRecipe ? (
				<div className="recipe-top">
					<RecipeToolbar
						setModalMode={setModalMode}
						toggleModal={toggleModal}
						className="recipe-toolbar"
					/>
					<LabelPills selectedRecipe={selectedRecipe} />
				</div>
			) : null}
			<Recipe selectedRecipe={selectedRecipe} />
		</div>
	);
}

export default RecipeViewer;
