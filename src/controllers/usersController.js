// Esta es la funcion que maneja el endpoint GET /api/users
export function getUsers(req, res) {
	res.send("Lista de usuarios");
}

// Esta es la funcion que maneja el endpoint GET /api/users/:id
export function getById(req, res) {
	res.send("Usuario con id: ");
}

// Esta es la funcion que maneja el endpoint PUT /api/users/:id
export function putUser(req, res) {
	res.send("Usuario con id: ");
}

// Esta es la funcion que maneja el endpoint POST /api/users/
export function postUser(req, res) {
	res.send("Usuario creado");
}

// Esta es la funcion que maneja el endpoint DELETE /api/users/:id
export function deleteUser(req, res) {
	res.send("Usuario eliminado");
}
