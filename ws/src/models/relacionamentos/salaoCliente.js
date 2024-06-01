const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//configurando o módulo do relacionamento salaoCliente
const salaoCliente = new Schema({
    salaoId:{
        type: mongoose.Types.ObjectId,
        ref: 'Salao',
        required:true
    },
    clienteId:{
        type: mongoose.Types.ObjectId,
        ref: 'Cliente',
        required:true
    },
    status: {type: String, enum: ['ativo', 'inativo'], defaut: 'ativo'},
    dataCadastro: {type: Date, defaut:Date.now},
    
});


//exportando as configurações do módulo salaoCliente
module.exports = mongoose.model('SalaoCliente', salaoCliente);