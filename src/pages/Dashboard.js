import React from "react";
import Sidebar from "../components/Sidebar";
import RecipeBar from "../components/RecipeBar";
import RecipeViewer from "../components/RecipeViewer";

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
