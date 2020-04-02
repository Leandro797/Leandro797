
let [, ,numero]= process.argv;


let limit = parseInt((numero.length/2));
let length = numero.length;


let contador = 0;
for(let i = 0; i < limit; i++){
    if (numero[i] == numero[length-(i+1)]){
    contador ++;
    }
}


if (contador == limit){
    console.log('capicua');
}else{
    console.log('No es capicua');
}



