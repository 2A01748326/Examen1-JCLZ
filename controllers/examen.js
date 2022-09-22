 const path = require("path");

// Proceso cuando se llame a la ruta 
exports.getInfo = (req, res)=>{
    //res.send('<h1>Formulario de consola</h1>');
    res.sendFile(path.join(__dirname, '..', 'views', 'info.html'));
}

exports.postValidacion = (req, res)=>{
    let arr = []
    var bandera = false;
    var sum = 0;
    arr.push(req.body['d1']);
    arr.push(req.body['d2']);
    arr.push(req.body['d3']);
    console.log(req.body); //los post van en el body
    for(var i =0; i<arr.length; i++)
        sum += arr[i];
    for(var i =0; i<arr.length; i++){
        if (arr[i]== 90){
            bandera = true;
            break;
        }
    }
    if (bandera == true && sum == 180)
        res.json({trianguloRect:"positivo"});
    else
        res.json({trianguloRect:"negativo"});
}

