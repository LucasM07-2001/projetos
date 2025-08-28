// uma string é uma cadeia de caracteres que podem ser letras, numeros ou simbolos
// as strings são representadas por aspas simples, aspas duplas ou crases
let nome = "Lucas"
let sobrenome = 'Monteiro'

let mensagem = `Olá, eu me chamo` // template string ou template literal
let mensagemCompleta = mensagem + " " + nome + " " + sobrenome // concatenação de strings
// ou 
mensagemCompleta = `${mensagem} ${nome} ${sobrenome}` // interpolação de strings com codigos, lembrando que as chaves são blocos de codigo
console.log(mensagemCompleta.length)// length é uma propriedade que retorna a quantidade de caracteres da string  
console.log(mensagemCompleta.toUpperCase()) // toUpperCase() é um método que transforma a string em maiusculo
console.log(mensagemCompleta.toLowerCase()) // toLowerCase() é um método que transforma a string em minusculo

/*
DESAFIO
CRIE UM PROGRMA QUE 
1 ARMAZENE O NOME DE UM PRODUTO
2 EXBE UMA MENSAGEM FALANDO QUE O PRODUTO ESTA COM DESCONTO
3 O NOME DO PRODUTO DEVE SER EXIBIDO EM MAIUSCULO
*/

let produto = "monitor"
let mensagem2 = " com desconto imperdivel"

let mensagemCompleta2 = `${produto} ${mensagem2}`

console.log(mensagemCompleta2.toUpperCase())

/*
feito pelo professor 

let produto = monitor 
let mensagemProduto = `O produto ${produto.toUppercase()} está com 20% de desconto`
console.log(mensagemProduto)
*/