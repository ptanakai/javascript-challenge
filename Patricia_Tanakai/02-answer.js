var express = require('express'); 

app = express();
app.get('/:letras',function(req,res) {
    const conjunto = req.params.letras;
    res.send(verifica(conjunto));
});
app.listen(3000);
console.log('app rodando na porta 3000');

function verifica(conj){
    //transforemei a string recebida por url para array somente para seguir o anunciado..
    var array = conj.split('');

    const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var x = new String(); //criei uma variável string somente para usar UpperCase e evitar erros..

    for (b in array){
            x = array[b];
            if (x.toLocaleUpperCase() != alfabeto.charAt(b)){
                return alfabeto.charAt(b);
        }
    }
    return("");
    
}
