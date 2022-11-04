import { modes } from "../modals/modalModes";

// A toolbar with options to delete, edit, and label the selected recipe

function RecipeToolbar({ setModalMode, toggleModal }) {
	const handleClickDelete = () => {
		setModalMode(modes.delete);
		toggleModal();
	};

	const handleClickEdit = () => {
		setModalMode(modes.edit);
		toggleModal();
	};

	return (
		<div className="recipe-toolbar">
			<button onClick={handleClickDelete}>Delete</button>
			<button onClick={handleClickEdit}>Edit</button>
			<button>Labels</button>
		</div>
	);
}

export default RecipeToolbar;
