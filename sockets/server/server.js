import express from "express";
import { app, io, server } from "./socket/socket.js";
import dotenv from "dotenv";
import { connectToDb } from "./db/connectToDb.js";

dotenv.config();
import authRoutes from "./routes/authRoutes.js";
app.use(express.json());

app.get("/", (req, res) => {
	res.send("hello");
});

app.use("/auth", authRoutes);
connectToDb().then(() => {
	server.listen(5000, () => {
		console.log("server running on http://localhost:5000");
	});
});
