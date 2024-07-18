import express from 'express'
import { addTask, getTask, removeTask, showAllTask, UpdateTask } from '../controllers/taskController.js';
const taskRoutes = express.Router();
//iske bad takcontroller.

taskRoutes.route("/").get(showAllTask);
taskRoutes.route("/").post(addTask);
taskRoutes.route("/:id").patch(UpdateTask);
taskRoutes.route("/:id").delete(removeTask);
taskRoutes.route("/:id").get(getTask);

export default taskRoutes;





