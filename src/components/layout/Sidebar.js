import { modes } from "../modals/modalModes";

// The main tool/nav bar, w/ options to create a recipe, view labels, view account info, and log out

function Sidebar({ setModalMode, toggleModal }) {
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
				<button>Log Out</button>
			</div>
		</nav>
	);
}

export default Sidebar;
