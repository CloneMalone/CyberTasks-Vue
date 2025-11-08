import express from "express";
import { handleGetAllTasks, handleGetTaskById, handleCreateTask, handleUpdateTaskById, handleDeleteTaskById } from "../controllers/taskController";

const router = express.Router();

router.get("/", handleGetAllTasks);
router.get("/:id", handleGetTaskById);
router.post("/", handleCreateTask);
router.put("/:id", handleUpdateTaskById);
router.delete("/:id", handleDeleteTaskById);

export default router;