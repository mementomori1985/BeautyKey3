const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Configurando os valores em reais
const formatCurrency = (value) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };
  
  //Converter o valor em porcentagem
  const formatPercentage = (value) => {
    return `${value.toFixed(2)}%`;
  };

//configurando o módulo do agendamento
const agendamento = new Schema({
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
    dataAgendamento: {type: Date, defaut:Date.now},
    comissão:{type: Number, required:true, get:(value) => formatPercentage(value)},
    valor:{type: Number, required: true, get:(value) => formatCurrency(value)},
    transactionId:{type: String, required: true},
    dataCadastro: {type: Date, defaut:Date.now}
    
});


//exportando as configurações do módulo agendamento
module.exports = mongoose.model('Agendamento', agendamento);