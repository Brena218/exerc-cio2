// 17)
let códigoDoUsuario = 1234;
let senhaDoUsuario = 3225;
const códigoCorreto = 1234;
const senhaCorreta = 9999;

//testes.
if(códigoDoUsuario !== códigoCorreto){
    console.log("usuário inválido!")
}else if (senhaDoUsuario !== senhaCorreta){
    console.log("senha  incorreta!");
}else{
    console.log("acesso permitido!");
}