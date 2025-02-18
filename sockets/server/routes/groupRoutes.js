import { Router } from "express";
import { addModerator, createGroup, getGroups } from "../controllers/groupController.js";

const router = Router();

router.route("/:userId").get(getGroups);
router.route("/createGroup").post(createGroup);
router.route("/addModerator").post(addModerator);

export default router;
