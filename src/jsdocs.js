// @ts-check

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
 * @type {import("./area").Area}
 */
const area = {
    width: 1,
    height: 2,
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
