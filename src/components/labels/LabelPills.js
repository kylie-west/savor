export default function LabelPills({ selectedRecipe }) {
	const { labels } = selectedRecipe;

	if (labels) {
		return (
			<ul className="label-pills">
				{labels.map((label, index) => (
					<li key={index} className="pill">
						{label}
					</li>
				))}
			</ul>
		);
	} else return null;
}
