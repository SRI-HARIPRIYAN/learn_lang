import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { addModerator, createGroup, getGroups } from "../api/api";
import { useAuth } from "../context/useAuth";
import { Link } from "react-router-dom";

const Groups = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const { user } = useAuth();

	const { mutate, data: createdGroup } = useMutation({
		mutationFn: createGroup,
		onSuccess: () => {
			refetch();
		},
	});
	const { mutate: addModeratorMutation } = useMutation({
		mutationFn: addModerator,
	});
	console.log("createdGroup: ", createdGroup);
	const { data, isLoading, refetch } = useQuery({
		queryKey: ["getGroups"],
		queryFn: () => getGroups(user._id),
	});
	console.log(data?.data);
	const handleCreateGroup = (e) => {
		e.preventDefault();
		mutate({ name, userId: user?._id });
	};
	const handleAddModerator = (e, groupId) => {
		e.preventDefault();
		addModeratorMutation({ groupId, email });
	};
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
			<div className="flex flex-col gap-3">
				{data?.data.map((group, i) => (
					<div key={i} className="flex justify-around items-center">
						<div>{group.name}</div>

						<input
							className="border text-xl h-10 p-1"
							type="text"
							name="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="add mod"
						/>
						<button
							className="text-xl h-10"
							onClick={(e) => handleAddModerator(e, group._id)}
						>
							+
						</button>
					</div>
				))}
			</div>
			<form></form>
		</div>
	);
};

export default Groups;
