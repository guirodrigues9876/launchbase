/*======================================================

OPERADORES DE COMPARAÇÃO

> Maior
< Menor
>= Maior igual a
<= Menor igual a
== igual
=== igual do mesmo tipo
!= Diferente de
!== Diferente, inclusive do tipo

==========================================================*/

console.log(4 == "4") // true
console.log(4 === "4") // false
console.log( 4 != "5") // true
console.log( 4 !== "5") // true


//DESAFIO 1

const idade = 16
//Verificar se a pessoa é maior igual a 18 anos

console.log(idade >= 18)


// Se sim, deixar entrar, se não, bloquear a entrada

if(idade >= 18){
    console.log('Deixar entrar')
} else{
    console.log('Bloquear a entrada')
}

// se a pessoa tiver 17 anos

if(idade = 17){
    console.log('Volte quando tiver 18')
}