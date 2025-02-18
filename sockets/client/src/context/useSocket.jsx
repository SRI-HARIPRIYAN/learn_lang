import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./useAuth";
import { io } from "socket.io-client";

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
	const { user } = useAuth();
	const [socket, setSocket] = useState(null);

	useEffect(() => {
		const socket = io(import.meta.env.VITE_BACKEND_URL);
		socket.on("welcome", (data) => {
			console.log(data);
		});
		setSocket(socket);
		return () => {
			socket.disconnect();
		};
	}, [user]);
	return <SocketContext.Provider value={{ socket }}>{children}</SocketContext.Provider>;
};

export const useSocket = () => {
	return useContext(SocketContext);
};
