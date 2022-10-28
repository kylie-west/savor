import React from "react";

// A toolbar with options to delete, edit, and label the selected recipe

function RecipeToolbar() {
	return (
		<div className="recipe-toolbar">
			<button>Delete</button>
			<button>Edit</button>
			<button>Labels</button>
		</div>
	);
}

export default RecipeToolbar;
