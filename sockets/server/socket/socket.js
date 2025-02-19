import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const server = createServer(app);
const io = new Server(server, {
	cors: {
		origin: process.env.CLIENT_URL,
	},
});

io.on("connection", (socket) => {
	console.log("user connected", socket.id);
	socket.emit("welcome", "Welcome to the server");
	socket.on("join_room", ({ groupId, userId }) => {
		socket.join(groupId);
		io.to(groupId).emit("newJoiner", `user ${userId} joined the room ${groupId} `);
	});
	/* socket.on("join_room", ({ groupId, userId }) => {
		if (groups[groupId]) groups[groupId] = [...groups[groupId], userId];
		else groups[groupId] = [userId];
		console.log("groups after selected a chat: ", JSON.stringify(groups));
	}); */
});

export { app, server, io };
