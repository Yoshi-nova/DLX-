const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname)); // Sert les fichiers HTML/CSS/JS

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => {
  console.log(`Serveur DLX+ lancé sur http://localhost:${PORT}`);
});