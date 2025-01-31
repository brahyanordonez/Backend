const express = require("express")
const routerApi = require("./routes")
const cors = require("cors")

const app = express();
const port = 3000;

app.use(express.json()); // Middleware para parsear el body a JSON
app.use(cors()); // Middleware para permitir peticiones de otros dominios

app.get("/", (req, res) => {
    res.send("Hello World!");
});

routerApi(app);

app.listen(port, () => {
    console.log(`Escuchando en http://localhost:${port}`);
});