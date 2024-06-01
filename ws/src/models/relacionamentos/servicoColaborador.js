const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//configurando o módulo do relacionamento serviçoColaborador
const servicoColaborador = new Schema({
    servicoId:{
        type: mongoose.Types.ObjectId,
        ref: 'Servico',
        required:true
    },
    colaboradorId:{
        type: mongoose.Types.ObjectId,
        ref: 'Colaborador',
        required:true
    },
    status: {type: String, enum: ['ativo', 'inativo'], defaut: 'ativo'},
    dataCadastro: {type: Date, defaut:Date.now},

    
});


//exportando as configurações do módulo salaocolaborador
module.exports = mongoose.model('ServicoColaborador', servicoColaborador);