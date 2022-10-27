import React from "react";
import Sidebar from "../components/layout/Sidebar";
import RecipeBar from "../components/layout/RecipeList";
import RecipeViewer from "../components/layout/RecipeViewer";

function Dashboard() {
	return (
		<div>
			<Sidebar />
			<RecipeBar />
			<RecipeViewer />
		</div>
	);
}

export default Dashboard;
