import express from "express";
import { handleGetUserProfile, handleRegisterUser, handleLoginUser, handleUpdateUserProfile, handleDeleteUserProfile } from "../controllers/userController";

const router = express.Router();

router.post("/register", handleRegisterUser);
router.post("/login", handleLoginUser);
router.get("/profile", handleGetUserProfile);
router.put("/profile", handleUpdateUserProfile);
router.delete("/profile", handleDeleteUserProfile);

export default router;