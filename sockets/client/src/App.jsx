import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import Authentication from "./pages/Authentication.jsx";
import Groups from "./pages/Groups.jsx";
import Chat from "./pages/Chat.jsx";
import { useAuth } from "./context/useAuth.jsx";
const App = () => {
	const { user } = useAuth();
	return (
		<BrowserRouter>
			{user && <div>Logged user: {user?.userName}</div>}
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/auth" element={<Authentication />} />
				<Route path="/groups" element={<Groups />} />
				<Route path="/chat" element={<Chat />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
