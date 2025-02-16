import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import { useMutation } from "@tanstack/react-query";

const Chat = () => {
	const [message, setMessage] = useState("");
	const [selectedGroup, setSelectedGroup] = useState("");
	const { data: groupsData, isLoading } = useQuery({
		queryKey: ["getGroups"],
		queryFn: getGroups,
	});
	console.log(groupsData);
	const { user } = useAuth();
	const { mutate, data } = useMutation({
		mutationFn: postMessage,
	});
	const sendMessage = (e) => {
		e.preventDefault();
		mutate({ message, userId: user?._id });
	};
	return (
		<div className="flex flex-col">
			<Link to="/auth">Authentication</Link>
			<Link to="/group">Groups</Link>
			<Link to="/">Home</Link>
			<div>
				<h1>Groups</h1>
				<div className="border">Grouplist</div>
			</div>
			<div>
				<h1>Chat</h1>
				<div className="border">Messages</div>
			</div>
		</div>
	);
};

export default Chat;
