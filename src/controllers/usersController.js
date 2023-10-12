// Esta es la funcion que maneja el endpoint GET /api/users
function getUsers(req, res) {
	res.send("GET /users");
}

// Esta es la funcion que maneja el endpoint GET /api/users/:id
function getById(req, res) {
	res.send("Usuario con id: ");
}

// Esta es la funcion que maneja el endpoint PUT /api/users/:id
function putUser(req, res) {
	res.send("Usuario con id: ");
}

// Esta es la funcion que maneja el endpoint POST /api/users/
function postUser(req, res) {
	res.send("Usuario creado");
}

// Esta es la funcion que maneja el endpoint DELETE /api/users/:id
function deleteUser(req, res) {
	res.send("Usuario eliminado");
}
