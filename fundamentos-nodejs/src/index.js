const express = require('express');

const app = express();

app.use(express.json());

/***
 * Tipos de parâmetros
 * 
 * Route params => indentificam um recurso para buscar/editar/deletar o mesmo
 * Query params => Paginação / Filtro
 * Body params => Os objetos para inserção/alteração de algum recurso
 */

app.get("/courses", (req, res) => {
    const { query } = req;
    console.log(query);
    return res.json(["Curso 01", "Curso 02", "Curso 03"]);
});

app.post("/courses", (req, res) => {
    return res.json(["Curso 01", "Curso 02", "Curso 03", "Curso 04"]);
});

app.put("/courses/:id", (req, res) => {
    const { id } = req.params;
    console.log(id);
    return res.json(["Curso 06", "Curso 02", "Curso 03", "Curso 04"]);
})

app.patch("/courses/:id", (req, res) => {
    return res.json(["Curso 06", "Curso 02", "Curso 08", "Curso 04"]);
})

app.delete("/courses/:id", (req, res) => {
    return res.json(["Curso 06", "Curso 02", "Curso 08"]);
})

app.listen(7777);