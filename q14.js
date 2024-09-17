// 14)
let atualEstoque = 6000;
let estoqueMáximo = 8000;
let estoqueMínimo = 5500;

let quantidadeMédia = (estoqueMáximo + estoqueMínimo)/2;
console.log(quantidadeMédia);

if(atualEstoque >= quantidadeMédia){
    console.log("não efetuar compra.");
}else{
    console.log("efetuar compra.");
}