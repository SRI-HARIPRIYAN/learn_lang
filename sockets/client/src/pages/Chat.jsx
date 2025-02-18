import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getGroups, getMessages, postMessage } from "../api/api";
import { useSocket } from "../context/useSocket.jsx";
const Chat = () => {
	const { user } = useAuth();
	const { socket } = useSocket();
	const [message, setMessage] = useState("");
	const [selectedGroup, setSelectedGroup] = useState(null);

	//get groups
	const { data: groupsData, isLoading } = useQuery({
		queryKey: ["getGroups"],
		queryFn: () => getGroups(user._id),
	});

	//get messages
	const { data: messageData } = useQuery({
		queryKey: ["msgs", selectedGroup],
		queryFn: () => getMessages(selectedGroup?._id),
		enabled: !!selectedGroup?._id,
	});

	//send message
	const { mutate: sendmsg } = useMutation({
		mutationFn: postMessage,
		onSuccess: (data) => {
			console.log(data.data);
		},
	});
	const sendMessage = (e) => {
		e.preventDefault();
		console.log("send clicked");
		if (selectedGroup && selectedGroup._id && message.trim()) {
			sendmsg({ groupId: selectedGroup._id, message, userId: user._id });
		} else {
			console.error("Message or group not selected");
		}
	};
	useEffect(() => {
		if (selectedGroup) socket.emit("join_room", { groupId: selectedGroup._id, userId: user._id });
	}, [selectedGroup]);
	return (
		<div className="flex">
			<div className="flex flex-col">
				<Link to="/auth">Authentication</Link>
				<Link to="/groups">Groups</Link>
				<Link to="/">Home</Link>
				<div>
					<h1>Groups</h1>
					<div className="border cursor-pointer">
						{groupsData?.data.map((el, i) => (
							<div
								className={`${
									i % 2 == 0 ? "bg-gray-400" : "bg-gray-500"
								} hover:bg-blue-400 ${
									selectedGroup?._id === el?._id ? "bg-green-500" : ""
								}`}
								onClick={() => setSelectedGroup(el)}
								key={i}
							>
								{el?._id}
							</div>
						))}
					</div>
				</div>
			</div>
			<div>
				<h1>Chat :{selectedGroup?.name}</h1>
				<div className="border flex flex-col gap-2">
					messages
					{messageData?.data?.map((mess, i) => (
						<p key={i}>{mess.message}</p>
					))}
				</div>
				<div>
					<input
						type="text"
						className="p-1 pl-2 border"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
					<button className="bg-gray-400" onClick={(e) => sendMessage(e)}>
						Send
					</button>
				</div>
			</div>
		</div>
	);
};

export default Chat;
