import { Request, Response } from "express";
import { CreateTask, TaskId } from "../types/Task";
import { AppError } from "../errors/AppError";

export async function getAllTasks(req: Request, res: Response) {
    console.log("🎮 getAllTasks controller pinged!");
    res.json({ message: "getAllTasks controller reached!", status: "Status good yo!" });
}

export async function getOneTask(req: Request<TaskId>, res: Response) {
    const taskId = req.params.id;

    console.log("🎮 getOneTask controller pinged!");
    console.log(`🪪 Task ID: ${taskId}`);
    res.json({ message: "getOneTask controller reached!", status: "Status good yo!" });
}

export async function createTask(req: Request, res: Response) {
    const newTask: CreateTask = req.body;

    console.log("🎮 createTask controller pinged!");

    if (!newTask.name || !newTask.priority) {
        throw new AppError("Task must include a name and a priority.");
    }

    console.log("🧩 New Task:", JSON.stringify(newTask, null, 2));

    res.json({
        message: "createTask controller reached!",
        created: newTask
    });
}

export async function updateTask(req: Request<TaskId>, res: Response) {
    const taskId = req.params.id;

    console.log("🎮 updateTask controller pinged!");
    console.log(`🪪 Task ID: ${taskId}`);
    res.json({ message: "updateTask controller reached!", status: "Status good yo!" });
}

export async function deleteTask(req: Request<TaskId>, res: Response) {
    const taskId = req.params.id;

    console.log("🎮 deleteTask controller pinged!");
    console.log(`🪪 Task ID: ${taskId}`);
    res.json({ message: "deleteTask controller reached!", status: "Status good yo!" });
}



