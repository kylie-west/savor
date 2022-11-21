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
				<button onClick={handleClickCreate}>
					<i className="fa-solid fa-circle-plus"></i>
				</button>
				<button>
					<i className="fa-solid fa-tags"></i>
				</button>
			</div>

			<div>
				<button>
					<i className="fa-solid fa-user"></i>
				</button>
				<button
					onClick={() => {
						logOut();
						navigate("/login");
					}}>
					<i className="fa-solid fa-right-from-bracket"></i>
				</button>
			</div>
		</nav>
	);
}

export default Sidebar;
