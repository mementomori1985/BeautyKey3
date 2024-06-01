const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//configurando o módulo do salão
const salao = new Schema({
    nome: {type: String, required: true},
    foto: String,
    capa: String,
    email: {type: String, required: true, unique: true},
    senha: {type: String, required: true, defaut: null},
    confirmarSenha: {type: String, required: true, defaut: null},
    telefone: {type: String, required: true},
    endereco: {
        cep: String,
        numero: String,
        cidade: String,
            uf: String,
        pais: String,      
    },
    geo: {
        tipo: String,
        coordinates: Array,

    },
    dataCadastro: {type: Date, defaut:Date.now}
});

//adicionando o index para geolocalização
salao.index ({geo: '2Dsphere'});


//exportando as configurações do módulo salao
module.exports = mongoose.model('Salao', salao);
