hardToUnderstand()

/**
 * @returns {User}
 */
function hardToUnderstand() {
    const user = {};

    addNameToUser("alan", user);
    addEmailToUser("alan.sa@mjv.com.br", user);
    addAgeToUser(29, user);
    console.log(user);
    /**
     * @type {User}
     */
    return user; // WTF IS THIS SHIT???
}

/**
 * 
 * @param {string} name 
 * @param {Partial<User>} user 
 */
function addNameToUser(name, user) {
    user.name = name;
}

/**
 * 
 * @param {string} email 
 * @param {Partial<User>} user 
 */
function addEmailToUser(email, user) {
    user.email = email;
}

/**
 * 
 * @param {number} age 
 * @param {Partial<User>} user 
 */
function addAgeToUser(age, user) {
    user.age = age;
}



easyPeasyLemonSqueezy();

/**
 * @returns {User}
 */
function easyPeasyLemonSqueezy() {
    const partialUser = {};
    const userWithName = addNameToUserEasy("alan", partialUser);
    const userWithNameAndEmail = addEmailToUserEasy("alan", userWithName);
    const fullUser = addAgeToUserEasy(29, userWithNameAndEmail);

    console.log(fullUser);
    return fullUser;
}



/**
 * @template {Partial<User>} T
 * @param {string} name 
 * @param {Partial<User>} user 
 */
function addNameToUserEasy(name, user) {
    return {
        ...user,
        name: name,
    }
}


/**
 * @template {Partial<User>} T 
 * @param {string} email 
 * @param {T} user 
 */
function addEmailToUserEasy(email, user) {
    return {
        ...user,
        email: email,
    }
}

/**
 * @template {Partial<User>} T 
 * @param {number} age 
 * @param {T} user 
 */
function addAgeToUserEasy(age, user) {
    return {
        ...user,
        age: age,
    }
}

