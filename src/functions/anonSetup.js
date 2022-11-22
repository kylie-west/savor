import { addRecipeToDb } from "../firebase/firestore";

export default function anonSetup(uid) {
	return sampleRecipes.map((recipe) => {
		recipe.uid = uid;
		recipe.createdAt = new Date();
		addRecipeToDb(recipe);
		return recipe;
	});
}

const sampleRecipes = [
	{
		title: "Chicken & Veggie Stir Fry",
		description:
			"An easy, quick stir fry. Feel free to change up the protein or vegetables. Serves 4-6.",
		ingredients: [
			"1 lb chicken breast, cubed",
			"1 lb broccoli florets",
			"8 oz mushroom, sliced",
			"3 tablespoons oil, for frying",
			"salt",
			"pepper",
			"FOR SAUCE:",
			"3 cloves garlic, minced",
			"2 teaspoons sesame oil",
			"⅓ cup reduced sodium soy sauce",
			"1 tablespoon brown sugar",
			"1 cup chicken broth",
			"¼ cup flour",
		],
		directions: [
			"In a large pan on medium-high heat, add 1 tablespoon of oil. Once the oil is hot, add chicken, season with salt and pepper, and sauté until cooked through and browned. Remove cooked chicken from pan and set aside.",
			"In the same pan, heat 1 tablespoon of oil and add mushrooms. When the mushrooms start to soften, add broccoli florets and stir-fry until the broccoli is tender. Remove cooked mushrooms and broccoli from the pan and set aside.",
			"Add 1 tablespoon of oil to the pan and sauté garlic and ginger until fragrant. Add the remaining sauce ingredients and stir until smooth.",
			"Return the chicken and vegetables to the saucy pan and stir until heated through.",
			"Serve with hot rice or noodles.",
		],
		labels: ["easy", "chicken", "dinner"],
	},
	{
		title: "Butter Chicken",
		description:
			"This simplified version of the Indian classic combines chicken, tomato sauce, and a slew of aromatic spices all in one pot to make a flavorful dinner that's just as good as the version you'll get at restaurants — only way easier to make.  Serve it over rice with a bit of cilantro to balance the heat and dinner is done. Serves 4.",
		ingredients: [
			"2 lb boneless, skinless chicken breast, cubed",
			"salt, to taste",
			"pepper, to taste",
			"2 teaspoons chili powder, divided",
			"½ teaspoon turmeric",
			"6 tablespoons butter, divided",
			"1 ½ cups yellow onion, diced",
			"3 teaspoons garam masala",
			"1 teaspoon cumin",
			"1 teaspoon cayenne pepper",
			"1 tablespoon ginger, grated",
			"3 cloves garlic, minced",
			"1 cinnamon, 3 inch (8 cm) stick",
			"14 oz tomato sauce",
			"1 cup water",
			"1 cup heavy cream",
			"rice, for serving",
			"fresh cilantro, chopped for garnish",
		],
		directions: [
			"In a large bowl, season the chicken breast with salt, pepper, 1 teaspoon of chili powder, and the teaspoon of turmeric. Let sit for 15 minutes to marinate.",
			"Melt 2 tablespoons of butter in a large pot over medium heat. Brown the chicken, then remove from the pot.",
			"Melt another 2 tablespoons of butter in the pot, then add the onion, garam masala, remaining teaspoon of chili powder, the cumin, ginger, garlic, cayenne, cinnamon, salt and pepper. Cook until fragrant.",
			"Add the tomato sauce and bring to a simmer.",
			"Add the water and cream and return to a simmer.",
			"Return the chicken to the pot, cover, and simmer for another 10-15 minutes.",
			"Stir in the last 2 tablespoons of butter and season with more salt and pepper to taste.",
			"Serve the chicken over rice and garnish with cilantro.",
		],
		labels: ["chicken", "Indian", "dinner"],
	},
	{
		title: "One-Pot Garlic Parmesan Pasta",
		description: "Serves 4.",
		ingredients: [
			"2 tablespoons unsalted butter",
			"4 cloves garlic, minced",
			"2 cups chicken broth",
			"1 cup milk",
			"8 oz fettuccine",
			"salt, to taste",
			"pepper, to taste",
			"¼ cup grated parmesan cheese",
			"2 tablespoons fresh parsley, chopped",
		],
		directions: [
			"Heat unsalted butter in a large skillet over medium high heat. Add garlic and cook, stirring frequently, until fragrant, about 1-2 minutes.",
			"Add in the chicken broth, milk, and fettuccine. Season with salt and pepper.",
			"Bring the pot to a boil, then reduce heat and simmer, stirring occasionally, until pasta is cooked through, about 18-20 minutes.",
			"Stir in Parmesan. If the mixture is too thick, add more milk as needed until desired consistency is reached.",
			"Serve immediately, and top with parsley.",
		],
		labels: ["easy", "cheesy", "pasta"],
	},
];
