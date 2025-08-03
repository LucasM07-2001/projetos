/*
Escreva um codigo que exiba "Bom dia", "Boa tarde, ou 
"Boa noite" com base em um valor da variavel hora 

 */

let hora = 22
    if (hora < 12){
        console.log("Bom dia")
    } else if (hora < 19){
        console.log("Boa tarde")
    } else {
        console.log("Boa noite")
    }
        
    // Declaramos a variável nota com o valor 7
let nota = 7;

// Primeiro, verificamos se a nota é maior ou igual a 9
if (nota >= 9) {
  // Se for, mostramos "Excelente!" no console
  console.log("Excelente!");
}

// Se a condição acima for falsa, verificamos se a nota é maior ou igual a 7
else if (nota >= 7) {
  // Se for, mostramos "Bom!" no console
  console.log("Bom!");
}

// Se as condições anteriores forem falsas, testamos se a nota é maior ou igual a 5
else if (nota >= 5) {
  // Se for, mostramos "Regular!" no console
  console.log("Regular!");
}

// Se nenhuma das condições acima for verdadeira, executamos o else (caso contrário)
else {
  // Mostramos "Reprovado!" no console
  console.log("Reprovado!");
}
