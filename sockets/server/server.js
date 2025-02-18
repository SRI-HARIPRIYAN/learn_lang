import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { app, io, server } from "./socket/socket.js";
import { connectToDb } from "./db/connectToDb.js";
import authRoutes from "./routes/authRoutes.js";
import groupRoutes from "./routes/groupRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
import User from "./models/userModel.js";
dotenv.config();
app.use(
	cors({
		origin: process.env.CLIENT_URL,
	})
);
app.use(express.json());

app.get("/", (req, res) => {
	res.send("hello");
});
app.use("/users", async (req, res) => {
	const users = await User.find();
	res.status(200).json(users);
});
app.use("/auth", authRoutes);
app.use("/groups", groupRoutes);
app.use("/chats", chatRoutes);

connectToDb().then(() => {
	server.listen(5000, () => {
		console.log("server running on http://localhost:5000");
	});
});
