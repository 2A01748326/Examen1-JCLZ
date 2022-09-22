//importar las bibliotecas
//const { response } = require('express');
const express = require('express');
const path = require('path');
const consolaRoutes = require('./routes/consola');

const app = express(); //Crear la aplicacion de express y la guardamos en app


//MiddleWare
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/consola',consolaRoutes);

//Definicion de neustra aplicacion
//En los argumentos se especifica la entrada y la salida (argumentos y valores a regresar)
app.get('/bigote', (request, response)=>{
    console.log('Hola mundo');
    response.send('<h1>Hola mundo</h1>');
});

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/home', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views', 'pagina1.html'));
});

app.get('/NewHome', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'pag2.html'));
});
//Prueba query
app.get('/prueba1', (req, res)=>{
    console.log(req.query);
    res.send("Datos enviados por query " + req.query.name);
});

//Prueba params
app.get('/prueba2/:name/:age', (req, res)=>{
    console.log(req.params);
    console.log(req.query);
    res.send("Datos enviados por params " + req.params.name);
});

app.post('/prueba3', (req, res) =>{//mandados por postman
    console.log(req.body);
    res.send("Datos recibidos");
});
//Lanzar la aplicacion
app.listen(8080, ()=>{
    console.log('Servidor en linea');
});//Los parametros son el puerto donde funcionara y el callback (arrowFnct)
