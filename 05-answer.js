var express = require('express'); 

app = express();
app.get('/:par',function(req,res) {
    const varString  = req.params.par;
    res.send(convertPares(varString));
});
app.listen(3000);
console.log('app rodando na porta 3000');

function convertPares(varString){
    var contArray = 0, posicao=0;
    var array = [""];

    while(posicao < varString.length){
        array[contArray] = varString.substring(posicao,(posicao+2));
        posicao +=2;
        contArray++;
    }
    return(array);
    
}

 