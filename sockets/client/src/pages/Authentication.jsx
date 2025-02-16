import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { login, logout, signup } from "../api/api";
import { useAuth } from "../context/useAuth";
const Authentication = () => {
	const { user } = useAuth();
	const { mutate, data } = useMutation({
		mutationFn: signup,
		onSuccess: (data) => {
			console.log(data);
		},
	});
	const { mutate: loginMutate } = useMutation({
		mutationFn: login,
		onSuccess: (data) => console.log(data),
	});
	const { mutate: logoutMutate } = useMutation({
		mutationFn: logout,
		onSuccess: (data) => console.log(data),
	});
	const handleSignup = (e) => {
		e.preventDefault();
		mutate({ userName, email });
	};
	const handleLogin = (e) => {
		e.preventDefault();
		loginMutate({ userName, email });
	};
	const handleLogout = (e) => {
		e.preventDefault();
		logoutMutate();
	};
	return (
		<div>
			<form>
				<label htmlFor="">
					User name
					<input type="text" name="userName" id="name" />
				</label>
				<label htmlFor="">
					email
					<input type="email" name="email" id="email" />
				</label>
			</form>
			<button type="submit" onClick={() => handleSignup}>
				Signup
			</button>
			<button type="submit" onClick={() => handleLogin}>
				Login
			</button>
			<button onClick={() => handleLogout}>Logout</button>
		</div>
	);
};

export default Authentication;
