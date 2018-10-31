var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
app.use(bodyParser.json());
app.use(cors());

var _protocolos = [];

app.get('/api/protocolo', (req, res) => {
    if (_protocolos.length == 0){
        _protocolos.push({
            id: 1,
            protocolo: '20181030057000000',
            nome: 'Fernando Haddad',
            descricao: 'Beneficiário solicitou reembolso da mensalidade que foi cobrada a maior.'
        });
    }
    res.status(200).send(_protocolos);
});

app.post('/api/protocolo', (req,  res) => {
    let newProtocolo = {
        id: _protocolos.length + 1,
        protocolo: '2018103005700000' + _protocolos.length,
        nome: req.body.nome,
        descricao: req.body.descricao
    };
    _protocolos.push(newProtocolo);
    res.status(201).send(newProtocolo);
});

app.listen(3000, () => {
    console.log('API de Protocolos no Ar! o/');
});