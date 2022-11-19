import { useEffect } from "react";
import { useState } from "react";
import { updateRecipeInDb } from "../../firebase/firestore";

export default function LabelCheckbox({
	label,
	selectedRecipe,
	setSelectedRecipe,
}) {
	const [isChecked, setIsChecked] = useState(false);

	useEffect(() => {
		if (selectedRecipe && selectedRecipe.labels.includes(label)) {
			setIsChecked(true);
		} else setIsChecked(false);
	}, []);

	const handleChange = () => {
		if (!isChecked) {
			setIsChecked(true);

			const updatedRecipe = {
				...selectedRecipe,
				labels: [...selectedRecipe.labels, label],
			};

			updateRecipeInDb(updatedRecipe, selectedRecipe.id);
			setSelectedRecipe(updatedRecipe);
		} else {
			setIsChecked(false);

			const filteredLabels = selectedRecipe.labels.filter(
				(recipeLabel) => recipeLabel !== label
			);
			const updatedRecipe = { ...selectedRecipe, labels: filteredLabels };

			updateRecipeInDb(updatedRecipe, selectedRecipe.id);
			setSelectedRecipe(updatedRecipe);
		}
	};

	return <input type="checkbox" checked={isChecked} onChange={handleChange} />;
}
