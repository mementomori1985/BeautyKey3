//configurando o web service e as rotas 
const express = require ('express');
const app = express ();
const morgan = require ('morgan');
const cors = require ('cors');

require ('./database');

//configurando o get e o set da aplicação
app.use (morgan('dev'));
app.use(express.json());
app.use(cors());

app.set ('port', 27017);

//rotas da aplicação
app.use('/salao', require('./src/routes/salao.routes'));
app.use('/cliente', require('./src/routes/cliente.routes'));
app.use('/servico', require('./src/routes/servico.routes'));
app.use('/colaborador', require('./src/routes/colaborador.routes'));
app.use('/horario', require('./src/routes/horario.routes'));
app.use('/agendamento', require('./src/routes/agendamento.routes'));

app.listen (app.get('port'), () => {
    console.log (`Web Service escuta na porta ${app.get('port')}`)
});
 

