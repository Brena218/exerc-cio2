aa// 1)
let A = true;
let B = true;
let C = false;

let resultadoA;
if ((A && B || A || B)){
    resultadoA = true;
}else{
    resultadoA = false;
}
console.log(resultadoA);

let resultadoB;
if ((A || B && A && C)){
    resultadoB = false;
}else{
    resultadoB = true;
}
console.log(resultadoB);

let resultadoC;
if (A || C && B || A && B){
    resultadoC = true; 
}else{
    resultadoC = false;
}
console.log(resultadoC);
