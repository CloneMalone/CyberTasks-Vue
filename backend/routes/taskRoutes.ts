import express from "express";
import { getAllTasks, getOneTask, createTask, updateTask, deleteTask } from "../controllers/taskController";

const router = express.Router();

router.get("/", getAllTasks);
router.get("/:id", getOneTask);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;