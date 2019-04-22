const config = {


	entry: __dirname + /src/'index', //ya sabemos que dirname tiene toda la ruta hasta la raiz
	output: {

		path: '/', //Donde creo el archivo traducido
		filename: 'boundle.js' //Como se llama el archivo que contiene la traduccion

	}
	devtool: 'source-map', //Segun el guarda ciertos errores

	module: {

		loaders: [

			{

				test: /\.js$/,
				loader: 'babel-loader',
				query:{ //Esto reemplazaria al archivo .babelrc, por eso le pongo aca lo de es2015
					presets: ['es2015']
				}

			}

		]

	}

};




module.exports = config;









