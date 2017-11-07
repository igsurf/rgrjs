var express = require('express');

let app = express();

app.get('/', (req, res) => res.send('hello nodemon!'));

app.listen(3000, function() {
	console.log("Servidor Rodando");
});
