import axios from "axios";
const backendUrl = import.meta.env.VITE_BACKEND_URL;
export const signup = (userData) =>
	axios.post(`${backendUrl}/auth/signup`, userData, { withCredentials: true });
export const login = (userData) =>
	axios.post(`${backendUrl}/auth/login`, userData, { withCredentials: true });
export const logout = () => axios.post(`${backendUrl}/auth/logout`, { withCredentials: true });
