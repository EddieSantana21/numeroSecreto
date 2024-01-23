// alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random() * 10 + 1);
//onsole.log(numeroSecreto);
let chute = prompt('Escolha um numero entre 1 e 100');
let tentativas = 1;
// Enquanto chute não for igual ao n.s
while (chute != numeroSecreto) {
    chute = prompt('Escolha um numero entre 1 e 100');
    // Se o chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute} `);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai, você descobriu o numero secreto que era ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

// if(tentativas > 1){
//     alert(`Isso ai, você descobriu o numero secreto que era ${numeroSecreto} com ${tentativas} tentativas`);
// }else{
//     alert(`Isso ai, você descobriu o numero secreto que era ${numeroSecreto} com  tentativa`);
// }
