import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
	message: {
		type: String,
		required: true,
	},
	sender: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
	receiver: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
});

const User = mongoose.model("User", messageSchema);

export default User;
