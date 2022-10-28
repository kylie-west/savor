import React from "react";

function Recipe() {
	return (
		<article className="recipe">
			<section className="recipe-title-section">
				<h1>Title</h1>
				<p>Description</p>
			</section>

			<section>
				<h2>Ingredients</h2>
				<hr />
				<ul>List items go here</ul>
			</section>

			<section>
				<h2>Directions</h2>
				<hr />
				<ol>List items go here</ol>
			</section>
		</article>
	);
}

export default Recipe;
