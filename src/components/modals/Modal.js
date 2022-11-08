import { modes } from "./modalModes";
import RecipeForm from "../forms/RecipeForm";
import { deleteRecipeFromDb } from "../../firebase/firestore";

const Modal = ({
	isShowing,
	toggle,
	modalMode,
	selectedRecipe,
	setSelectedRecipe,
}) => {
	const handleClickDelete = async () => {
		await deleteRecipeFromDb(selectedRecipe.id);
		setSelectedRecipe(null);
		toggle();
	};

	if (isShowing) {
		return (
			<>
				<div className="modal-overlay" />

				<div className="modal-wrapper">
					<div className="modal">
						<div className="modal-header">
							<h1>{modalMode.header}</h1>
						</div>

						<div className="modal-content">
							{modalMode === modes.create || modalMode === modes.edit ? (
								<RecipeForm modalMode={modalMode} toggleModal={toggle} />
							) : modalMode === modes.delete ? (
								"Are you sure you want to delete this recipe? This is irreversible."
							) : null}
						</div>

						<div className="modal-footer">
							<button onClick={toggle} className="btn btn-secondary">
								Cancel
							</button>
							{modalMode === modes.delete ? (
								<button onClick={handleClickDelete} className="btn btn-warning">
									{modalMode.btnName}
								</button>
							) : (
								<button
									type="submit"
									form="recipe-form"
									className="btn btn-primary">
									{modalMode.btnName}
								</button>
							)}
						</div>
					</div>
				</div>
			</>
		);
	} else return null;
};

export default Modal;
