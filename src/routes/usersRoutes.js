import { Router } from "express";

export const usersRouter = Router();

// GET /users
usersRouter.get("/", (req, res) => {
	res.send("Usuarios");
});

// GET /users/:id
usersRouter.get("/:id", () => {
	return;
});

// POST /users/
usersRouter.post("/", () => {
	return;
});

// PUT  /users/:id
usersRouter.put("/:id", () => {
	return;
});

// DELETE /users/:id
usersRouter.delete("/:id", () => {
	return;
});
