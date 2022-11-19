export default function LabelPills({ selectedRecipe }) {
	const { labels } = selectedRecipe;

	if (labels) {
		return (
			<ul className="label-pills">
				{labels.map((label) => (
					<li className="pill">{label}</li>
				))}
			</ul>
		);
	} else return null;
}
