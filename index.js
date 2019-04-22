//Este es el index del back-end

const express = require('express');
const app = express();

//Webpack

const webpack = require('webpack');
const webPackDevMidd = require('webpack-dev-middleware');
const webPackConf = require('./web.config.js');


//Middleware

app.use(webPackMidd(webpack(webPackConf))); 

app.use(express.static(__dirname + '/public')); //Todo lo del front y estatico esta en public


app.listen(3000, ()=>{

	console.log('Escuchando puerto ${3000}');

});









