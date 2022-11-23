import { modes } from "../modals/modalModes";
import Tooltip from "react-tooltip";

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
			<button
				onClick={handleClickDelete}
				className="delete-btn"
				data-tip
				data-for="delete">
				<i className="fa-solid fa-trash"></i>
			</button>
			<Tooltip
				id="delete"
				backgroundColor="#ef4444"
				place="bottom"
				effect="solid"
				className="tooltip">
				Delete recipe
			</Tooltip>

			<button onClick={handleClickEdit} data-tip data-for="edit">
				<i className="fa-solid fa-pen-to-square"></i>
			</button>
			<Tooltip
				id="edit"
				backgroundColor="#2aa59b"
				place="bottom"
				effect="solid"
				className="tooltip">
				Edit recipe
			</Tooltip>

			<button onClick={handleClickLabels} data-tip data-for="recipe-labels">
				<i className="fa-solid fa-tag"></i>
			</button>
			<Tooltip
				id="recipe-labels"
				backgroundColor="#2aa59b"
				place="bottom"
				effect="solid"
				className="tooltip">
				Edit labels
			</Tooltip>
		</div>
	);
}

export default RecipeToolbar;
