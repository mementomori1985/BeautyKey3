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


//configurando o módulo do servico
const servico = new Schema({
    salaoId:{
        type:mongoose.Types.ObjectId,
        //chamando o id do módulo Salao
        ref: 'Salao'
    },
    titulo: {type:String, required:true},
    preco: {type: Number, required: true, get:(value) => formatCurrency(value)},
    duracaoEstimada: {type: Number, required: true}, //em minutos
    comissão:{type: Number, required:true, get:(value) => formatPercentage(value)}, //em porcentagem
    recorrência:{type:Number, required:true}, // quantidade de remarcações em dias
    descricao:{type:String},
    status:{type:String, enum:['ativo', 'inativo', 'não disponível'], required:true, defaut: 'ativo'},
    dataCadastro: {type: Date, defaut:Date.now}
});


//exportando as configurações do módulo serviço
module.exports = mongoose.model('Servico', servico);
