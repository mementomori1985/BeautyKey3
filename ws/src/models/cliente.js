const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//configurando o módulo do cliente
const Cliente = new Schema({
    nome: {type: String, required: true},
    foto: {type: String, required: true},
    dataNascimento: {type: String, required: true},
    sexo: {type: String, enum: ['masculino', 'feminino'], required: true},
    genero: {type: String, enum: ['cisgênero', 'transgênero', 'Não binário', 'Outro']},
    status: {type: String, enum: ['ativo', 'inativo'], defaut: 'ativo'},
    email: {type: String, required: true, unique: true},
    senha: {type: String, required: true, defaut: null},
    confirmarSenha: {type: String, required: true, defaut: null},
    telefone: {type: String, required: true},
    //tipo de documento a ser cadastrado para a transação bancária
    documento: {
        tipo: {type: String, required: true, enum: ['individual','corporation']},
        numero:{type:String, required: true}
    },
    endereco: {
        cep: String,
        numero: String,
        cidade: String,
            uf: String,
        pais: String,      
    },
    dataCadastro: {type: Date, defaut:Date.now,},
    //inserindo o id do pagador
    customerId: {type: String, required: true}
});

//exportando as configurações do módulo cliente
module.exports = mongoose.model('Cliente', Cliente);