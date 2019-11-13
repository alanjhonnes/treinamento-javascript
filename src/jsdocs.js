/**
 * @typedef {object} User
 * @property {string} name
 * @property {number} age
 * @property {string} [email]
 */

/**
 * @param {string} name
 * @param {number} age
 * @returns {User}
 */
function createUser(name, age) {
    return {
        name: name,
        age: age,
    }
}

/**
 * @param {string} name
 * @param {number} age
 * @returns {{name: string, age: number, email?: string}}
 * 
 */
function createUserInline(name, age) {
    return {
       name: name,
       age: age,
    }
}
