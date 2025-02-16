import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { app, io, server } from "./socket/socket.js";
import { connectToDb } from "./db/connectToDb.js";
import authRoutes from "./routes/authRoutes.js";

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

app.use("/auth", authRoutes);

connectToDb().then(() => {
	server.listen(5000, () => {
		console.log("server running on http://localhost:5000");
	});
});
