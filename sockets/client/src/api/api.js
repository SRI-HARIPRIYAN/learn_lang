import axios from "axios";
const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const signup = (userData) => axios.post(`${backendUrl}/auth/signup`, userData);
export const login = (userData) => axios.post(`${backendUrl}/auth/login`, userData);

export const createGroup = (groupData) => axios.post(`${backendUrl}/groups/createGroup`, groupData);

export const addModerator = (moderatorData) =>
	axios.post(`${backendUrl}/groups/add`, moderatorData);

export const getGroups = () => axios.get(`${backendUrl}/groups`, { userData });

export const getMessages = () => axios.get(`${backendUrl}/chat`, { userData });

export const postMessage = () => axios.post(`${backendUrl}/chat/message`, { chatData });
