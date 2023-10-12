import Express from "express";

// Routes Imports
import { usersRouter } from "./routes/usersRoutes.js";

const app = Express();
const port = 3000;

// App Routes
app.use("/api/users", usersRouter);
app.use("/", (req, res) => {
	res.send("Hola mundo!");
});

app.use("*", (req, res) => {
	res.status(404).send("No se pudo encontrar la ruta");
});

app.listen(port, () => {
	console.log(`Server running on port 3000! 🚀`);
});
