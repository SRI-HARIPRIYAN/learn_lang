import { Router } from "express";
import { getMessages, sendMessage } from "../controllers/chatController.js";

const router = Router();

router.route("/:groupId").get(getMessages);
router.route("/").post(sendMessage);

export default router;
