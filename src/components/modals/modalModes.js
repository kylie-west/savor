export const modes = {
	create: {
		header: "Create a new recipe",
		content: null,
		btnName: "Create",
		btnFunction: () => console.log("Modal mode: Create"),
	},
	edit: {
		header: "Edit recipe",
		content: null,
		btnName: "Update",
		btnFunction: () => console.log("Modal mode: Edit"),
	},
	delete: {
		header: "Delete recipe",
		content: null,
		btnName: "Delete",
		btnFunction: () => console.log("Modal mode: Delete"),
	},
};
