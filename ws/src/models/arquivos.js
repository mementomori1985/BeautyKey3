const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//referenciando e armazenando os arquivos salvos no app
const arquivos = new Schema({
  referenciaId: {
    type: Schema.Types.ObjectId,
    refPath: 'model',
  },
  model: {
    type: String,
    required: true,
    enum: ['Servico', 'Salao'],
  },
  arquivo: {
    type: String,
    required: true,
  },
  dataCadastro: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Arquivos', arquivos);
