function Recipe({ selectedRecipe }) {
	if (selectedRecipe) {
		const { title, description, ingredients, directions } = selectedRecipe;

		return (
			<article className="recipe">
				<section className="recipe-title-section">
					<h1>{title ? title : null}</h1>
					<p>{description ? description : null}</p>
				</section>

				<section>
					<h2>Ingredients</h2>
					<hr />
					<ul>
						{ingredients
							? ingredients.map((ingredient, index) => {
									return <li key={index}>{ingredient}</li>;
							  })
							: null}
					</ul>
				</section>

				<section>
					<h2>Directions</h2>
					<hr />
					<ol>
						{directions
							? directions.map((step, index) => {
									return <li key={index}>{step}</li>;
							  })
							: null}
					</ol>
				</section>
			</article>
		);
	} else return null;
}

export default Recipe;
