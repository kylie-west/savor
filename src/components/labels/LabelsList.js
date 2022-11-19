import LabelCheckbox from "./LabelCheckbox";

export default function LabelsList({
	labels,
	selectedRecipe,
	setSelectedRecipe,
}) {
	return (
		<ul>
			{labels.map((label, index) => (
				<li key={index}>
					<LabelCheckbox
						label={label}
						selectedRecipe={selectedRecipe}
						setSelectedRecipe={setSelectedRecipe}
					/>
					{label}
				</li>
			))}
		</ul>
	);
}
