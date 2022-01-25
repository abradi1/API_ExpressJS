const dotenv = require('dotenv').config()
const express = require('express');
// Cette ligne permet de creer une application express
const app = express();
const port = process.env.PORT;
const apiRouter = require('./routes/apiRouter').router;
const bodyparser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyparser.json());



//create a cors middleware
app.use(function (req, res, next) {
    //set headers to allow cross origin request.
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use('/api/',apiRouter);



app.listen(port, () => {
    console.log('Server listening on port:' + port)
});
// Configuration de la route de la racine, une fonction callback est appelé
//lrsque la route est demandé par l'utilisateur
app.get('/',function(req,res) {
    res.setHeader('Content-Type','text/html');
    res.status(200).send('Chaima Abradi');
});








