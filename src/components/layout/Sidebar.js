import { modes } from "../modals/modalModes";
import { logOut, logOutAnon } from "../../firebase/firebaseAuth";
import { useNavigate } from "react-router-dom";
import Tooltip from "react-tooltip";

// The main tool/nav bar, w/ options to create a recipe, view labels, view account info, and log out

function Sidebar({
	user,
	recipes,
	setModalMode,
	toggleModal,
	labelDrawerOpen,
	setLabelDrawerOpen,
	clearState,
}) {
	const navigate = useNavigate();

	const handleClickCreate = () => {
		setModalMode(modes.create);
		toggleModal();
	};

	const handleClickLabels = () => {
		setLabelDrawerOpen(!labelDrawerOpen);
	};

	const handleClickLogout = async () => {
		if (!user.email) {
			logOutAnon(recipes);
		} else logOut();

		clearState();

		navigate("/login");
	};

	return (
		<nav className="sidebar">
			<div>
				<button onClick={handleClickCreate} data-tip data-for="create">
					<i className="fa-solid fa-circle-plus"></i>
				</button>
				<Tooltip
					id="create"
					backgroundColor="#2aa59b"
					effect="solid"
					className="tooltip">
					Create new recipe
				</Tooltip>

				<button onClick={handleClickLabels} data-tip data-for="labels">
					<i className="fa-solid fa-tags"></i>
				</button>
				<Tooltip
					id="labels"
					backgroundColor="#2aa59b"
					effect="solid"
					className="tooltip">
					View all labels
				</Tooltip>
			</div>

			<div>
				{/* <button>
					<i className="fa-solid fa-user"></i>
				</button> */}
				<button onClick={handleClickLogout} data-tip data-for="logout">
					<i className="fa-solid fa-right-from-bracket"></i>
				</button>
				<Tooltip
					id="logout"
					backgroundColor="#2aa59b"
					effect="solid"
					className="tooltip">
					Log out
				</Tooltip>
			</div>
		</nav>
	);
}

export default Sidebar;
