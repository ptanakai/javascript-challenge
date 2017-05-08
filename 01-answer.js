var express = require('express'); 

app = express();
app.get('/:num',function(req,res) {
    const number = req.params.num;
    res.send(multiplos(number));
});
app.listen(3000);
console.log('app rodando na porta 3000');

function multiplos(number){
    var soma=0;
    for (i=0; i<number; i++){
        if( i%3 == 0){
            soma += i;
        } else if (i%5 == 0){
            soma += i;
        }
    }
    return(`Soma de multiplos de 3 e 5 até ${number} = ${soma}`);
}