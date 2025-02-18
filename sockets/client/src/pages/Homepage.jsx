import React from "react";
import { Link } from "react-router-dom";
const Homepage = () => {
	return (
		<div className="flex flex-col gap-2 text-2xl">
			<Link to="/groups">Groups</Link>
			<Link to="/chat">Chats</Link>
			<Link to="/auth">Authentication</Link>
		</div>
	);
};

export default Homepage;
