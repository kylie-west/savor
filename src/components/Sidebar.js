import React from "react";

// The main tool/nav bar, w/ options to create a recipe, view labels, view account info, and log out

function Sidebar() {
	return (
		<nav className="sidebar">
			<div>
				<button>Create</button>
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
