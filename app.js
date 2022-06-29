const express    = require('express');
const app        = express();
const db         = require('./db/connection');
const bodyParser = require('body-parser');



const PORT = 3000;

app.listen(PORT, function() {
    console.log(`Express rodando na porta ${PORT}`);
});

// body parser
app.use(bodyParser.urlencoded({ extended: false }));

// db connection
db
    .authenticate()
    .then(() => {
        console.log('Conectou ao bd com sucesso!');
    })
    .catch(err => {
        console.log('Ocorreu um erro ao tentar conectar ao bd', err);
    });


// routes
app.get('/', (req, res) => {
    res.send('Está funcionando 5');
});

// jobs routes
app.use('/jobs', require('./routes/jobs'));