import React from "react";

function Recipe() {
	return (
		<article className="recipe">
			<section>
				<h1 className="recipe-title">Title</h1>
				<p className="recipe-description">Description</p>
			</section>

			<section>
				<h2>Ingredients</h2>
				<ul>List items go here</ul>
			</section>

			<section>
				<h2>Directions</h2>
				<ol>List items go here</ol>
			</section>
		</article>
	);
}

export default Recipe;
