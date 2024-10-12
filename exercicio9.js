const pessoaUm = {
    nome: "Luana",
    idade: 18,
    profissao: "estudante"
}
const pessoaDois = {
    nome: "Julia",
    idade: 30,
    profissao: "advogada"
}

function recebaObj(p, p2) {
    const resultado = [] 
    resultado.push (p.nome)
    resultado.push (p.nome.lenght)
    resultado.push (p.idade)
    resultado.push (p.profissao)
    resultado.push (p.profissao.lenght)
    return resultado
}

console.log( recebaObj(pessoaUm) ) //["Luana", 5, 18, "estudante", 9]
console.log( recebaObj(pessoaDois) ) //["Julia", 5, 30, "advogada", 8]
