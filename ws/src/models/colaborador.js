const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//configurando o módulo do colaborador
const colaborador = new Schema({
    nome: {type: String, required: true},
    foto: {type: String, required: true},
    dataNascimento: {type: String, required: true},
    sexo: {type: String, enum: ['masculino', 'feminino'], required: true},
    genero: {type: String, enum: ['cisgênero', 'transgênero', 'Não Binário', 'Outro']},
    status: {type: String, enum: ['ativo', 'inativo'], defaut: 'ativo'},
    email: {type: String, required: true, unique: true},
    senha: {type: String, required: true, defaut: null},
    confirmarSenha: {type: String, required: true, defaut: null},
    telefone: {type: String, required: true},
    contaBancaria: {
        titular: {type: String, required: true},
        banco: {type: String, required: true},
        cpfCNPJ: {
            type: String,
            required: true,
        },
        tipo: {type: String, required: true},
        agencia: {type: String, required: true},
        numero: {type: String, required: true},
        dv: {type: String, required: true}
    },
    dataCadastro: {type: Date, defaut:Date.now,},
    //inserindo o id do recebedor
    requirementId: {type: String, required: true}
});


//exportando as configurações do módulo colaborador
module.exports = mongoose.model('Colaborador', colaborador);
