// 10)
let horasTrabalhadas = 1;
let sálarioPorHora = 55;
let acrescimo = 1.5;

const horasRegulares = 5;
const semanasNoMes = 4;

let horasRegularesNoMes = horasRegulares*semanasNoMes;
console.log(horasRegularesNoMes);

let horasExtras = horasRegularesNoMes-horasTrabalhadas;
console.log(horasExtras);

let valorHoraExtra = sálarioPorHora*acrescimo;
console.log(valorHoraExtra);

let sálario =  (horasTrabalhadas,horasRegulares)*sálarioPorHora;
console.log(sálario);
let sállarioHoraExtra = horasExtras*valorHoraExtra;
console.log(sállarioHoraExtra);

let sálarioTotal = sálario+sállarioHoraExtra;
console.log(sálarioTotal)