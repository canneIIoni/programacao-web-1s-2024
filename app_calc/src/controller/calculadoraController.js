const path = require('path');
const calculadora = require('../calculadora/calculadora');

exports.renderIndex = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
};

exports.calcularOperacao = (req, res) => {
    const { num1, num2, operacao } = req.body;

    if (isNaN(num1) || isNaN(num2)) {
        return res.redirect('/?mensagem=Por%20favor,%20insira%20valores%20numéricos%20válidos.');
    }

    const resultado = calculadora.calcular(parseFloat(num1), parseFloat(num2), operacao);
    res.redirect(`/resultado.html?resultado=${resultado}`);
};