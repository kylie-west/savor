import { modes } from "../modals/modalModes";
import { logOut, logOutAnon } from "../../firebase/firebaseAuth";
import { useNavigate } from "react-router-dom";

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
				<button onClick={handleClickCreate}>
					<i className="fa-solid fa-circle-plus"></i>
				</button>
				<button onClick={handleClickLabels}>
					<i className="fa-solid fa-tags"></i>
				</button>
			</div>

			<div>
				{/* <button>
					<i className="fa-solid fa-user"></i>
				</button> */}
				<button onClick={handleClickLogout}>
					<i className="fa-solid fa-right-from-bracket"></i>
				</button>
			</div>
		</nav>
	);
}

export default Sidebar;
