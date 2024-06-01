const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//configurando o módulo do horário
const horario = new Schema({
    salaoId:{
        type: mongoose.Types.ObjectId,
        ref: 'Salao',
        required:true
    },
    //array de especialidades
    especialidades:[{
        type: mongoose.Types.ObjectId,
        ref: 'Servico',
        required:true
    }],
    //array de colaboradores
    colaboradores:[{
        type: mongoose.Types.ObjectId,
        ref: 'Colaborador',
        required:true
    }],
    dias: {type:[Number], required: true},
    //especificando a agenda para colaboradores e servicos específicos
    inicio: {type:Date, required: true},
    fim:{type:Date, required: true},
    dataCadastro:{type: Date, defaut:Date.now}   
});

//exportando as configurações do módulo horário
module.exports = mongoose.model('Horario', horario);