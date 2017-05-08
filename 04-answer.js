var express = require('express'); 

app = express();
app.get('/:var',function(req,res) {
    const varString  = req.params.var;
    res.send(verifica(varString));
});
app.listen(3000);
console.log('app rodando na porta 3000');

function verifica(varString){
  //  var contArray = 0, x=0, contChar=0;
    var array = [""];
    var arrayLimites = [""];

  /* //converte a String para array
    while (x <= varString.length){
        //separa os números enviados por espaço
        while ((varString.charAt(x) != " ") && (x < (varString.length))){
            x++;
            contChar++;
        }*/
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

/*        array[contArray] = varString.substring((x-contChar),x);
        x += 2;
        if (contArray == 0){
            arrayLimites[0] = array[contArray];
            arrayLimites[1] = array[contArray];
            console.log('array0' +arrayLimites);
        } else {
            if (array[contArray] < arrayLimites[0]){
                console.log('arraymenor' +arrayLimites +'array e limite0' +array[contArray] +'-' +arrayLimites[0]);
                arrayLimites[0] = array[contArray];
                console.log('arraymenor' +arrayLimites);
            } else if (array[contArray] > arrayLimites[1]){
                 arrayLimites[1] = array[contArray];
                 console.log('maior' +arrayLimites);

            }
        }
        contArray++;

    //}
*/
    return(`Maior número:  ${arrayLimites[1]} . Menor número: ${arrayLimites[0]}`);
    //return (array);
}

