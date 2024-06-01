const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const calculadoraRoutes = require('./src/routes/calculadoraRoutes');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'src', 'views'))); // Servir arquivos estáticos

app.use('/', calculadoraRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});