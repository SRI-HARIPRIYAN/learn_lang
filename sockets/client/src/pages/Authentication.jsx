import React, { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getUsers, login, signup } from "../api/api";
import { useAuth } from "../context/useAuth";
import { Link } from "react-router-dom";
const Authentication = () => {
	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const { user, setUser } = useAuth();
	const { mutate, data } = useMutation({
		mutationFn: signup,
		onSuccess: (data) => {
			console.log(data);
			setUser(data?.data);
		},
	});

	const { mutate: loginMutate } = useMutation({
		mutationFn: login,
		onSuccess: (data) => setUser(data?.data),
	});
	const { data: users } = useQuery({
		queryKey: ["users"],
		queryFn: getUsers,
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
			<div className="flex flex-col">
				<Link to="/groups">Group</Link>
				<Link to="/chat">Chat</Link>
				<Link to="/">Home</Link>
			</div>
			<form className="flex flex-col text-2xl">
				<label htmlFor="">
					User name
					<input
						className="border p-1"
						type="text"
						name="userName"
						id="name"
						onChange={(e) => setUserName(e.target.value)}
					/>
				</label>
				<label htmlFor="">
					email
					<input
						className="border p-1"
						type="email"
						name="email"
						id="email"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</label>
			</form>
			<button type="submit" onClick={handleSignup}>
				Signup
			</button>
			<button type="submit" onClick={handleLogin}>
				Login
			</button>
			<div>
				{data && (
					<div>
						<p>{data?.data?.userName}</p>
						<p>{data?.data?.email}</p>
					</div>
				)}
			</div>
			<div className="text-white ">
				{users?.data?.map((el, i) => (
					<div className="flex gap-3" key={i}>
						<p>{el.userName}</p>
						<p>{el.email}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Authentication;
