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
			<button onClick={handleClickDelete} className="delete-btn">
				<i className="fa-solid fa-trash"></i>
			</button>
			<button onClick={handleClickEdit}>
				<i className="fa-solid fa-pen-to-square"></i>
			</button>
			<button onClick={handleClickLabels}>
				<i className="fa-solid fa-tag"></i>
			</button>
		</div>
	);
}

export default RecipeToolbar;
