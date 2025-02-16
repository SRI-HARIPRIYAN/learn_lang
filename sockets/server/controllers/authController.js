import User from "../models/userModel.js";

export const login = async (req, res) => {
	try {
		console.log(req.body);
		let user = await User.findOne({ userName: req.body.userName, email: req.body.email });
		if (!user) return res.status(404).json({ message: "User no found" });
        //generate token

        res.status(200).json(user);
	} catch (error) {
		console.log("Error in login controller " + error);
		res.status(500).json({ message: "Internal server error", error: error.message });
	}
};
