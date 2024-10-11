function adicionaInformacoes (pessoa) {
    const novo = {}
    ... pessoa, {
        comidasPreferidas: [sorvete, sushi, hamburguer],
        melhorAmigo: {
            nome: 'Ana',
            idade: 17
        }
    }
console.log (`O nome da pessoa é ${novo.nome} e suas comidas preferidas são ${novo.comidasPreferidas[0]}, ${novo.comidasPreferidas[1]} e ${novo.comidasPreferidas[2]}. Seu melhor amigo se chama ${novo.melhorAmigo.nome} e tem ${novo.melhorAmigo.idade} anos`)
}