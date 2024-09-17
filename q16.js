// 16)
let idadeHomem1 = 20;
let idadeHomem2 = 35;
let idadeMulher1 = 12;
let idadeMulher2 = 40;

let homemMaisVelho = Math.max(idadeHomem1,idadeHomem2);
let homemMaisNovo = Math.min(idadeHomem1,idadeHomem2);

let mulherMaisVelha = Math.max(idadeMulher1,idadeMulher2);
let mulherMaisNova = Math.min(idadeMulher1,idadeMulher2);

//soma do homem mais velho com a mulher mais nova.
let soma1 = homemMaisVelho + mulherMaisNova;
console.log(soma1);

//soma do homem mais novo com a mulher mais velha.
let soma2 = homemMaisNovo + mulherMaisVelha;
console.log(soma2);