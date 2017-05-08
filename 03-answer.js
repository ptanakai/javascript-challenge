var express = require('express'); 

app = express();
app.get('/:listagem',function(req,res) {
    const listagem = req.params.listagem;
    res.send(listar(listagem));
});
app.listen(3000);
console.log('app rodando na porta 3000');

function listar(listagem){
    //converti a string para vetor para seguir o enunciado
    var array = listagem.split('');
    var newArray = [""];
    var txt = new String();
    var cont = 0;

    for (x in array){
        txt = isNaN(array[x]);
        if(txt == false){
            newArray[cont] = array[x];
            cont++;
        }
    }
    return (newArray);
    
}
