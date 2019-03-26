const   mongoose = require('mongoose');

const AlunoSchema = new mongoose.Schema({
    nome: String
});

module.exports = mongoose.model('Aluno', AlunoSchema);