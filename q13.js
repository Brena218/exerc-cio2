// 13)
let numeroDaConta = 157495;
let saldoDaConta = 15000;
let débito = 10000;
let crédito = 10000;

let saltoAtual = saldoDaConta - débito + crédito;
console.log(saltoAtual);

if(saltoAtual >= 0) {
    console.log("saldo positivo");
}else{
    console.log("saldo negativo");
}