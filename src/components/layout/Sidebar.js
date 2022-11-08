import { modes } from "../modals/modalModes";
import { logOut } from "../../firebase/firebaseAuth";
import { useNavigate } from "react-router-dom";

// The main tool/nav bar, w/ options to create a recipe, view labels, view account info, and log out

function Sidebar({ setModalMode, toggleModal }) {
	const navigate = useNavigate();

	const handleClickCreate = () => {
		setModalMode(modes.create);
		toggleModal();
	};

	return (
		<nav className="sidebar">
			<div>
				<button onClick={handleClickCreate}>Create</button>
				<button>Labels</button>
			</div>

			<div>
				<button>Account</button>
				<button
					onClick={() => {
						logOut();
						navigate("/login");
					}}>
					Log Out
				</button>
			</div>
		</nav>
	);
}

export default Sidebar;
