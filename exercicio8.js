const pessoa = {
    nome: "Maria Luiza", 
    apelidos: ["Mari", "Lulu", "Malu"]
 }
 
function nomeApelidos(pessoa) {
 console.log (`Eu sou ${pessoa.nome} , mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} e ${pessoa.apelidos[2]} `)
}

nomeApelidos(pessoa)

const novo = {
    ...pessoa,
    apelidos: ["Lala", "Lele", "Lili"]
}
nomeApelidos(novo)
