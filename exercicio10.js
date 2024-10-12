const carrinho = [] 

const fruta1 = { nome: "morango", disponibilidade: true }
const fruta2 = { nome: "abacaxi", disponibilidade: true }
const fruta3 = { nome: "kiwi", disponibilidade: true }

function addFrutas(fruta) {
    carrinho.push (fruta)
}

addFrutas(fruta1)
addFrutas(fruta2)
addFrutas(fruta3)

console.log(carrinho)