import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { login, signup } from "../api/api";
import { useAuth } from "../context/useAuth";
import { Link } from "react-router-dom";
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

	const handleSignup = (e) => {
		e.preventDefault();
		mutate({ userName, email });
	};
	const handleLogin = (e) => {
		e.preventDefault();
		loginMutate({ userName, email });
	};

	return (
		<div>
			<Link to="/group">Group</Link>
			<Link to="/chat">Chat</Link>
			<form className="flex flex-col text-2xl">
				<label htmlFor="">
					User name
					<input className="border p-1" type="text" name="userName" id="name" />
				</label>
				<label htmlFor="">
					email
					<input className="border p-1" type="email" name="email" id="email" />
				</label>
			</form>
			<button type="submit" onClick={() => handleSignup}>
				Signup
			</button>
			<button type="submit" onClick={() => handleLogin}>
				Login
			</button>
		</div>
	);
};

export default Authentication;
