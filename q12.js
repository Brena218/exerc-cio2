// 12)
let sálarioFixo = 1400;
let vendas = 1000;

let comissão;
if(vendas >= 1500) {
    comissão = vendas * 0.03;
}else{
    comissão = 1500 * 0.03+ (vendas - 1500) *0.05;
}

let sálarioTotal = sálarioFixo + comissão;
console.log(sálarioTotal);


