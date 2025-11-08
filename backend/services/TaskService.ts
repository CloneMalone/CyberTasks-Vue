import { CreateTask } from "../types/Task";


class TaskService {

    static addTaskToDB(task: CreateTask) {
        console.log("createTask service reached!");

        return task;
    }
}

export default TaskService;