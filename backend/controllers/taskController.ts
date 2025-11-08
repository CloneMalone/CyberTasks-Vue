import { Request, Response } from "express";
import { TaskId } from "../types/Task";
import { AppError } from "../errors/AppError";
import TaskService from "../services/TaskService";

export async function handleGetAllTasks(req: Request, res: Response) {
    console.log("🎮 handleGetAllTasks controller pinged!");
    res.json({ message: "handleGetAllTasks controller reached!", status: "Status good yo!" });
}

export async function handleGetTaskById(req: Request<TaskId>, res: Response) {
    const taskId = req.params.id;

    console.log("🎮 handleGetTaskById controller pinged!");
    console.log(`🪪 Task ID: ${taskId}`);
    res.json({ message: "handleGetTaskById controller reached!", status: "Status good yo!" });
}

export async function handleCreateTask(req: Request, res: Response) {
    const newTask = req.body;

    if (!newTask.name || !newTask.priority) {
        throw new AppError("Task must include a name and a priority.");
    }

    const addedTask = TaskService.addTaskToDB(newTask);
    console.log("🧩 New Task:", JSON.stringify(addedTask, null, 2));

    res.json({
        message: "handleCreateTask controller reached!",
        created: addedTask
    });
}

export async function handleUpdateTaskById(req: Request<TaskId>, res: Response) {
    const taskId = req.params.id;

    console.log("🎮 handleUpdateTaskById controller pinged!");
    console.log(`🪪 Task ID: ${taskId}`);
    res.json({ message: "handleUpdateTaskById controller reached!", status: "Status good yo!" });
}

export async function handleDeleteTaskById(req: Request<TaskId>, res: Response) {
    const taskId = req.params.id;

    console.log("🎮 handleDeleteTaskById controller pinged!");
    console.log(`🪪 Task ID: ${taskId}`);
    res.json({ message: "handleDeleteTaskById controller reached!", status: "Status good yo!" });
}



