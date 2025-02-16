import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();

const server = createServer(app);
const io = new Server(server, {
	cors: {
		origin: "http://localhost:3000",
	},
});

io.on("connection", (socket) => {
	console.log("user connected: " + socket.id);
	socket.emit("message", { data: "Hi hello" });
});

export { server, io, app };
