//chamando o mongoose
const mongoose = require('mongoose');

const URI = 'mongodb+srv://beauty:projeto2420@cluster1.xhbtagc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1';

const env = process.env.NODE_ENV || 'dev';

let options = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
};

//configurando o promisse do BD
mongoose.connect(URI)
.then (() => console.log('Banco de dados conectado!'))
.catch((error) => console.log('Erro ao conectar ao banco de dados:',error));

