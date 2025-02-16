import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { createGroup, getGroups } from "../api/api";
import { useAuth } from "../context/useAuth";
import { Link } from "react-router-dom";

const Groups = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const { user } = useAuth();

	const { mutate, data: createdGroup } = useMutation({
		mutationFn: createGroup,
	});
	console.log(createdGroup);

	const { data, isLoading } = useQuery({
		queryKey: ["getGroups"],
		queryFn: getGroups,
	});
	console.log(data?.data);
	const handleCreateGroup = (e) => {
		e.preventDefault();
		mutate({ name, userId: user?._id });
	};
	const handleAddModerator = () => {};
	return (
		<div className=" text-2xl flex flex-col">
			<Link to="/auth">Authentication</Link>
			<Link to="/">Home</Link>
			<Link to="/chat">Chat</Link>
			<form>
				<label htmlFor="">Group name</label>
				<input
					className="border text-xl p-1"
					type="text"
					name="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<button className="text-xl" onClick={handleCreateGroup}>
					Create group
				</button>
			</form>
			<div>{}</div>
			<form>
				<label htmlFor="">Add Moderator</label>
				<input
					className="border text-xl p-1"
					type="text"
					name="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<button className="text-xl" onClick={handleAddModerator}>
					Add this moderator
				</button>
			</form>
		</div>
	);
};

export default Groups;
