import axios from "axios";
const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const signup = (userData) => axios.post(`${backendUrl}/auth/signup`, userData);
export const login = (userData) => axios.post(`${backendUrl}/auth/login`, userData);

export const createGroup = (groupData) => axios.post(`${backendUrl}/groups/createGroup`, groupData);

export const addModerator = (moderatorData) =>
	axios.post(`${backendUrl}/groups/addModerator`, moderatorData);

export const getGroups = (userId) => axios.get(`${backendUrl}/groups/${userId}`);

export const getMessages = (groupId) => axios.get(`${backendUrl}/chats/${groupId}`);

export const postMessage = (chatData) => {
	console.log(chatData);
	return axios.post(`${backendUrl}/chats`, chatData);
};

export const getUsers = () => axios.get(`${backendUrl}/users`);
