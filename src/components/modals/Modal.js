const Modal = ({ isShowing, toggle, modalMode }) => {
	if (isShowing) {
		return (
			<>
				<div className="modal-overlay" />

				<div className="modal-wrapper">
					<div className="modal">
						<div className="modal-header">
							<h1>{modalMode.header}</h1>
						</div>

						<div className="modal-content">{modalMode.content}</div>

						<div className="modal-footer">
							<button onClick={modalMode.btnFunction}>
								{modalMode.btnName}
							</button>
							<button onClick={toggle}>Close</button>
						</div>
					</div>
				</div>
			</>
		);
	} else return null;
};

export default Modal;
