import { Router } from "express";
import {
	getUsers,
	deleteUser,
	getById,
	postUser,
	putUser,
} from "../controllers/usersController.js";

export const usersRouter = Router();

// GET /users
usersRouter.get("/", getUsers);

// GET /users/:id
usersRouter.get("/:id", getById);

// POST /users/
usersRouter.post("/", postUser);

// PUT  /users/:id
usersRouter.put("/:id", putUser);

// DELETE /users/:id
usersRouter.delete("/:id", deleteUser);
