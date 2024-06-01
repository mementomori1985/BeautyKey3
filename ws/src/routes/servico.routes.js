const express = require('express');
const router = express.Router();
const Busboy = require('busboy');
const Servico = require('../models/servico');
const Arquivos = require('../models/arquivos');
const moment = require('moment');

//Metodo Post para a rota de serviço:
router.post('/', async (req, res) => {
  var busboy = new Busboy({ headers: req.headers });
  busboy.on('finish', async () => {
    try {
      let errors = [];
      let arquivos = [];

      if (req.files && Object.keys(req.files).length > 0) {
        for (let key of Object.keys(req.files)) {
          const file = req.files[key];

          const nameParts = file.name.split('.');
          const fileName = `${new Date().getTime()}.${
            nameParts[nameParts.length - 1]
          }`;
          const path = `servicos/${req.body.salaoId}/${fileName}`;

          arquivos.push(path);
        }
      }

      if (errors.length > 0) {
        res.json(errors[0]);
        return false;
      }

      // CRIAR SERVIÇO
      let jsonServico = JSON.parse(req.body.servico);
      jsonServico.salaoId = req.body.salaoId;
      const servico = await new Servico(jsonServico).save();

      // CRIAR ARQUIVO
      arquivos = arquivos.map((arquivo) => ({
        referenciaId: servico._id,
        model: 'Servico',
        arquivo,
      }));
      await Arquivos.insertMany(arquivos);

      res.json({ error: false, arquivos });
    } catch (err) {
      res.json({ error: true, message: err.message });
    }
  });
  req.pipe(busboy);
});

/*
  Atualizar arquivos
*/
router.put('/:id', async (req, res) => {
  var busboy = new Busboy({ headers: req.headers });
  busboy.on('finish', async () => {
    try {
      let errors = [];
      let arquivos = [];

      if (req.files && Object.keys(req.files).length > 0) {
        for (let key of Object.keys(req.files)) {
          const file = req.files[key];

          const nameParts = file.name.split('.');
          const fileName = `${new Date().getTime()}.${
            nameParts[nameParts.length - 1]
          }`;
          const path = `servicos/${req.body.salaoId}/${fileName}`;

          arquivos.push(path);
        }
      }

      if (errors.length > 0) {
        res.json(errors[0]);
        return false;
      }

      //  ATUALIZAR SERVIÇO
      let jsonServico = JSON.parse(req.body.servico);
      await Servico.findByIdAndUpdate(req.params.id, jsonServico);

      // CRIAR ARQUIVO
      arquivos = arquivos.map((arquivo) => ({
        referenciaId: req.params.id,
        model: 'Servico',
        arquivo,
      }));
      await Arquivos.insertMany(arquivos);

      res.json({ error: false });
    } catch (err) {
      res.json({ error: true, message: err.message });
    }
  });
  req.pipe(busboy);
});

/*
  trazer dados do salão
*/
router.get('/salao/:salaoId', async (req, res) => {
  try {
    let servicosSalao = [];
    const servicos = await Servico.find({
      salaoId: req.params.salaoId,
      status: { $ne: 'E' }, //diferente de excluído
    });

    for (let servico of servicos) {
      const arquivos = await Arquivos.find({
        model: 'Servico',
        referenciaId: servico._id,
      });
      servicosSalao.push({...servico._doc, arquivos });
    }

    res.json({
      error: false,
      servicos: servicosSalao,
    });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});


router.post('/remove-arquivo', async (req, res) => {
  try {
    const { arquivo } = req.body;

    // EXCLUIR DO BANCO DE DADOS
    await Arquivos.findOneAndDelete({
      arquivo,
    });

    res.json({ error: false, message: 'Erro ao excluir o arquivo!' });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

/*
  Deletar serviço
*/
router.delete('/:id', async (req, res) => {
  try {
    await Servico.findByIdAndDelete(req.params.id);

    res.json({ error: false, message: 'Serviço deletado com sucesso!' });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

module.exports = router;