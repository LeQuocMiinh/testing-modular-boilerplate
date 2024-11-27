import type { Hono } from "hono";
import { createTodolist } from "../api/todo-list/create-todo-list/create-todo-list.service";
import { TodoList } from "../utils/interfaces/todo-list";
import typia from "typia";
import { typiaValidator } from "@hono/typia-validator";
import { getTodolist } from "../api/todo-list/get-todo-list/get-todo-list.service";
import { APIError } from "../utils/common/error-handler";
import { updateTodolist } from "../api/todo-list/update-todo-list/update-todo-list.service";
import { deleteTodolist } from "../api/todo-list/delete-todo-list/delete-todo-list.service";

function routes(app: Hono) {
    app.post('/todo-list/create', createTodolist);
    app.get('/todo-list/get/:id?', getTodolist);
    app.put('/todo-list/update/:id?', updateTodolist);
    app.delete('/todo-list/delete/:id?', deleteTodolist);
}

export default routes