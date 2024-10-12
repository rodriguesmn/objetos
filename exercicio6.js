const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)
// a) será impresso "Juca, 3, SRD", "Juba, 3, SRD" e "Jubo, 3, SRD"
// a sintaxe dos três pontos funciona como um copia e cola, ele copia todas as informações do item anterior 