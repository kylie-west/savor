import { modes } from "./modalModes";
import RecipeForm from "../forms/RecipeForm";
import { deleteRecipeFromDb } from "../../firebase/firestore";
import Labels from "../labels/Labels";

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
					<div
						className={`modal ${
							modalMode === modes.labels ? "labels-mode" : null
						}`}>
						<div className="modal-header">
							<h1>{modalMode.header}</h1>

							{modalMode === modes.labels ? (
								<div className="close" onClick={toggle}>
									X
								</div>
							) : null}
						</div>

						<div className="modal-content">
							{modalMode === modes.create || modalMode === modes.edit ? (
								<RecipeForm modalMode={modalMode} toggleModal={toggle} />
							) : modalMode === modes.delete ? (
								"Are you sure you want to delete this recipe? This is irreversible."
							) : modalMode === modes.labels ? (
								<Labels />
							) : null}
						</div>

						{modalMode !== modes.labels ? (
							<div className="modal-footer">
								<button onClick={toggle} className="btn btn-secondary">
									Close
								</button>
								{modalMode === modes.delete ? (
									<button
										onClick={handleClickDelete}
										className="btn btn-warning">
										{modalMode.btnName}
									</button>
								) : modalMode === modes.create || modalMode === modes.edit ? (
									<button
										type="submit"
										form="recipe-form"
										className="btn btn-primary">
										{modalMode.btnName}
									</button>
								) : null}
							</div>
						) : null}
					</div>
				</div>
			</>
		);
	} else return null;
};

export default Modal;
