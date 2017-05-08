var express = require('express'); 

app = express();
app.get('/:var',function(req,res) {
    const varString  = req.params.var;
    res.send(verifica(varString));
});
app.listen(3000);
console.log('app rodando na porta 3000');

function verifica(varString){
    var array = [""];
    var arrayLimites = [""];

        array=varString.split(' ');
        arrayLimites[0]=array[0];
        arrayLimites[1]=array[0];

        for (x in array){
            if (array[x] < arrayLimites[0]){
                arrayLimites[0] = array[x];
            } else if (array[x] > arrayLimites[1]){
                arrayLimites[1] = array[x];
            }
        }


    return(`Maior número:  ${arrayLimites[1]} . Menor número: ${arrayLimites[0]}`);
}

