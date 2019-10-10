const express = require("express");

const app = express();

app.get("/", (req, res) => {
   return res.jos("Funciona");
});
app.post("/cursos")
app.listen(3333);
