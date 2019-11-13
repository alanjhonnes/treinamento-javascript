// map -> transformação de um tipo de valor em outro tipo de valor

// filter -> reduzir o número de itens em um vetor

// reduce -> iterador genérico, pode servir para implementar map/filter/find e/ou uma combinação dos mesmos

// find -> procura o primeiro item do vetor que corresponde à função de predicado, se não for encontrado retorna nulo

// findIndex -> procura o primeiro indice do vetor que corresponde à função de predicado, se não for encontrado retorna -1

// slice -> duplica ou pega uma parte do vetor

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
        age: 40,
    },
];

const userNames = users.map(user => user.name);
console.log(userNames);

const emails = users
    .filter(user => Boolean(user.email))
    .map(user => user.email);
console.log(emails);

const alan = users.findIndex(user => user.name === "Alan");
console.log(alan);

const duplicate = users.slice();
console.log(duplicate);

const orderedUsers = users.slice().sort((usera, userb) => usera.email ? 1 : -1);
console.log(users);
console.log(orderedUsers);

const maxAge = users.reduce((highestAge, user, index, arr) => {
    return user.age > highestAge
        ? user.age
        : highestAge
}, 0);
console.log(maxAge);

/**
 * @type {string[]}
 */
const initial = [];
/**
 * @type {string[]}
 */
const emails2 = users.reduce((acc, user) => {
    if (!user.email) {
        return acc;
    }
    acc.push(user.email);
    return acc;
}, initial);
console.log(emails2);