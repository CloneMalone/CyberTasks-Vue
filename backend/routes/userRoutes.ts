import express from "express";
import { getUserProfile, registerUser, loginUser, updateUserProfile, deleteUserProfile } from "../controllers/userController";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", getUserProfile);
router.put("/profile", updateUserProfile);
router.delete("/profile", deleteUserProfile);

export default router;