import mongoose from "mongoose";

export const connectToDb = () =>
	mongoose
		.connect(process.env.MONGO_DB_URL)
		.then(() => {
			console.log("Database connected");
		})
		.catch((error) => {
			console.log("Error connecting database: " + error);
		});
