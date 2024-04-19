alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 5000;
let  numSecreto = parseInt(Math.random() * numeroMaximo +1);
let chute ;
let tentativas = 1;

while (chute  != numSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}:`);
    if(numSecreto == chute){
        break;
    }else{
        if(numSecreto > chute){
            alert(`O número secreto é maior que ${chute}`);
        }else{
            alert(`O número secreto é menor que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Aeeee acertamos, ${numSecreto} com ${tentativas} ${palavraTentativa}`);




/* if(tentativas > 1){
    alert(`Aeeee acertamos, ${numSecreto} com ${tentativas} tentativa(s)`);
}else{
    alert(`Aeeee acertamos, ${numSecreto} com ${tentativas} tentativa`);
} */