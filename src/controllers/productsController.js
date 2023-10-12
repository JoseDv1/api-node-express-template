// Esta es la funcion que maneja el endpoint GET /api/users
export function getProducts(req, res) {
	res.send("Lista de Productos");
}

// Esta es la funcion que maneja el endpoint GET /api/products/:id
export function getById(req, res) {
	res.send("Producto con id: ");
}

// Esta es la funcion que maneja el endpoint PUT /api/products/:id
export function putProduct(req, res) {
	res.send("Producto con id: ");
}

// Esta es la funcion que maneja el endpoint POST /api/products/
export function postProduct(req, res) {
	res.send("Producto creado");
}

// Esta es la funcion que maneja el endpoint DELETE /api/products/:id
export function deleteProduct(req, res) {
	res.send("Producto eliminado");
}
