var numeroSecreto = parseInt(Math.random() * 1001)
var quantidadeChute = 0
var quantidadeTentativa = 15


while(quantidadeTentativa > 0){

    var chute = prompt('Você tem ' + quantidadeTentativa + ' tentativas restantes. Digite um número de 1 a 1000!')

    quantidadeTentativa--

    if(chute == numeroSecreto){
        alert('Você acertou! O número secreto é ' + numeroSecreto + '. ')
        break
    }
    else if(chute > numeroSecreto){
            alert('Errou! O número secreto é MENOR que ' + chute + '!')
        }
        else if(chute < numeroSecreto){
            alert('Errou! O número secreto é MAIOR que ' + chute + '!')
        }    

    quantidadeChute++
    alert('Você ja chutou ' + quantidadeChute + ' vezes!')

    if(quantidadeTentativa == 0) alert('Você perdeu!')
 
}


