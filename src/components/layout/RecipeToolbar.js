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

	const handleClickLabels = () => {
		setModalMode(modes.labels);
		toggleModal();
	};

	return (
		<div className="recipe-toolbar">
			<button onClick={handleClickDelete}>Delete</button>
			<button onClick={handleClickEdit}>Edit</button>
			<button onClick={handleClickLabels}>Labels</button>
		</div>
	);
}

export default RecipeToolbar;
