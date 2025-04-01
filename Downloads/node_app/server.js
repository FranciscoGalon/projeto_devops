const express = require("express");
const app = express();
const port = 3001;

// Endpoint que retorna a hora atual
app.get("/chiquinhoDaTi", (req, res) => {
  const horaAtual = new Date().toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  res.json({ hora: horaAtual });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
