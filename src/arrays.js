// map -> transformação de um tipo de valor em outro tipo de valor

// filter -> reduzir o número de itens em um vetor

// reduce -> iterador genérico, pode servir para implementar map/filter/find e/ou uma combinação dos mesmos

// find -> procura o primeiro item do vetor que corresponde à função de predicado, se não for encontrado retorna nulo

// findIndex -> procura o primeiro indice do vetor que corresponde à função de predicado, se não for encontrado retorna -1



/**
 * @type {User[]}
 */
const users = [
    {
        name: "Alan",
        age: 29,
        email: "alan.sa@mjv.com.br",
    },
    {
        name: "Jhonnes",
        age: 15,
    },
]

const userNames = users.map(user => user.name);
console.log(userNames);

const emails = users
.filter(user => Boolean(user.email))
.map(user => user.email);
console.log(emails);

const alan = users.find(user => user.name.includes("Alan"));
console.log(alan);
