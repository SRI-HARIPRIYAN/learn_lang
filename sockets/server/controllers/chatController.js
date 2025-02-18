import User from "../models/userModel.js";
import Group from "../models/groupModel.js";
import Message from "../models/messageModel.js";

export const getMessages = async (req, res) => {
	try {
		console.log(req.params);
		const messages = await Message.find({ group: req.params.groupId })
			.populate("user", "_id userName")
			.populate("group", "_id admin moderators");
		console.log(messages);
		res.status(200).json(messages);
	} catch (error) {
		console.log("Error in  get messages controller " + error);
		res.status(500).json({ message: "Internal server error", error: error.message });
	}
};

export const sendMessage = async (req, res) => {
	try {
		console.log(req.body);
		const newMessage = await Message.create({
			message: req.body.message,
			user: req.body.userId,
			group: req.body.groupId,
		});
		res.status(201).json(newMessage);
	} catch (error) {
		console.log("Error in  send message controller " + error);
		res.status(500).json({ message: "Internal server error", error: error.message });
	}
};
