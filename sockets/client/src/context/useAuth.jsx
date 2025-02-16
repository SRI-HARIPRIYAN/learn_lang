import { createContext, useContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	useEffect(() => {
		let user = localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null;
		setUser(user);
	}, [user]);
	return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export const useAuth = () => {
	return useContext(UserContext);
};
