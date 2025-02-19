import User from "../models/userModel.js";
import Group from "../models/groupModel.js";

export const createGroup = async (req, res) => {
	try {
		console.log(req.body);
		const { name, userId } = req.body;
		const group = await Group.create({
			name: name,
			members: [userId],
			admin: userId,
		});

		res.status(200).json(group);
	} catch (error) {
		console.log("Error in  create group controller " + error);
		res.status(500).json({ message: "Internal server error", error: error.message });
	}
};
export const getGroups = async (req, res) => {
	try {
		const groups = await Group.find({
			$or: [
				{ admin: req.params.userId }, // User is an admin
				{ moderators: { $in: [req.params.userId] } }, // User is in the moderators array
			],
		})
			.populate("moderators", "_id userName")
			.populate("admin", "_id userName");
		res.status(200).json(groups);
	} catch (error) {
		console.log("Error in  get groups controller " + error);
		res.status(500).json({ message: "Internal server error", error: error.message });
	}
};

export const addModerator = async (req, res) => {
	try {
		console.log(req.body);
		const { email, groupId } = req.body;
		const user = await User.findOne({ email: email });
		console.log("user", JSON.stringify(user));
		const group = await Group.findById(groupId);
		group.moderators.push(user._id);
		await group.save();
		res.status(200).json({ message: "Moderator added!" });
	} catch (error) {
		console.log("Error in add moderator controller " + error);
		res.status(500).json({ message: "Internal server error", error: error.message });
	}
};
