function Recipe(props) {
	const { recipes } = props;

	const recipe = recipes[0];
	const { title, description, ingredients, directions } = recipe;

	return (
		<article className="recipe">
			<section className="recipe-title-section">
				<h1>{title}</h1>
				<p>{description}</p>
			</section>

			<section>
				<h2>Ingredients</h2>
				<hr />
				<ul>
					{ingredients.map((ingredient, index) => {
						return <li key={index}>{ingredient}</li>;
					})}
				</ul>
			</section>

			<section>
				<h2>Directions</h2>
				<hr />
				<ol>
					{directions.map((step, index) => {
						return <li key={index}>{step}</li>;
					})}
				</ol>
			</section>
		</article>
	);
}

export default Recipe;
