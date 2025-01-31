const express = require("express")
const app = express();
const port = 3000;


app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/nueva-ruta", (req, res) => {
    res.send("Nueva ruta")
})

app.get("/tickets", (req, res) => {
    res.json({
        title: "Problemas de ingreso",
        message: "Tests de error"
    })
})

// Dentro de endpoint nosotros tenemos lo que llammos REST: Representational State Transfer
// Get: Obtener
// Put: Modificar/Actualizar todos los parametros
// Patch: Modificar/Actualizar es parcial
// Post: Crear
// Delete: Eliminar

app.get("/users/:id", (req, res) => {
    const {id} = req.params;
    res.json({
        id,
        title: "Problemas de ingreso",
        message: "Tests de error"
    })
})

app.listen(port, () => {
    console.log(`Escuchando en http://localhost:${port}`);
});