import jwt from "jsonwebtoken";
export const setCookie = async (userId) => {
	const token = await jwt.sign({ userId }, process.env.JWT_SECRET, {
		expiresIn: "1d",
	});
};
