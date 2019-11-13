/**
 * 
 * @param {string} [name] 
 * @param {number} [age] 
 * @param {string} [email] 
 * @returns {User}
 */
function hadouken(name, age, email) {
    if (name) {
        if (age) {
            if (email) {
                return {
                    name: name,
                    age: age,
                    email: email,
                }
            } {
                throw new Error("Missing Email");
            }
        } else {
            throw new Error("Missing age");
        }
    } else {
        throw new Error("Missing name");
    }
}


/**
 * 
 * @param {string} [name] 
 * @param {number} [age] 
 * @param {string} [email] 
 * @returns {User}
 */
function earlyExit(name, age, email) {
    if (!name) {
        throw new Error("Missing name");
    }
    if (!age) {
        throw new Error("Missing age");
    }
    if (!email) {
        throw new Error("Missing Email");
    }
    return {
        name: name,
        age: age,
        email: email,
    }
}

