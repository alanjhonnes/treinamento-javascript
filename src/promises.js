
/**
 * @template T
 * @param {T} value
 * @returns {Promise<T>}
 */
function returnsPromise(value) {
    return new Promise((resolve, reject) => {
        console.log(`Promise resolvida com valor: ${value}`);
        resolve(value);
    })
}

/**
 * @template T
 * @param {T} value
 * @returns {Promise<T>}
 */
function rejectsPromise(value) {
    return new Promise((resolve, reject) => {
        reject(new Error("Boom"));
    })
}

const x = 1;

// encadeamento
returnsPromise(x)
.then(v => returnsPromise('a'))
.then(v => rejectsPromise(v)
    .catch(e => {
        console.log('Catch específico para uma determinada promise');
        // retorna um valor substituto como fallback da operação
        return 5;
    })
)
.then(v => returnsPromise(v))
.catch(e => {
    console.log('Catch para qualquer erro no encadeamento das promises');
})

// paralelismo
const request1 = returnsPromise(1);
const request2 = returnsPromise(2);
const request3 = returnsPromise(3);
Promise.all([request1, request2, request3])
.then(values => {
    console.log(`Resolved values: ${values}`);
})
