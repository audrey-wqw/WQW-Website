/**
 * Email Regex
 */
const validateEmail = (email) => {
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexEmail.test(String(email).toLowerCase());
}

/**
 * Password Regex
 * Min 1 uppercase letter.
 * Min 1 lowercase letter.
 * Min 1 special character.
 * Min 1 number.
 * Min 8 characters.
 * Max 100 characters.
 */
const validatePassword = (password) => {
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,100}$/;
    return regexPassword.test(String(password))
}

/**
 * Hashing password
 */
const hashingPassword = (plainPwd, next) => {
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            console.log("sideMethods - hashingPassword - Generate Salt fails: ", err.message);
            return next(err, null);
        }
        bcrypt.hash(plainPwd, salt, (err, hashPwd) => {
            if (err) {
                console.log("sideMethods - hashingPassword - Generate hash fails: ", err.message);
                return next(err, null);
            }
            return next(null, hashPwd);
        });
    });
}

/**
 * Generate JWT Token
 */
const generateJWT = (minutes, data, next) => {
    jwt.sign(data, config.secretKey, { expiresIn: minutes * 60 }, (err, token) => {
        next(err, token);
    })
}

/**
 * Comparing hash password
 */
const compareHashed = (plainPwd, hashedPwd, next) => {
    bcrypt.compare(plainPwd, hashedPwd, (err, match) => {
        next(err, match);
    });
}

module.exports = { validateEmail, validatePassword, hashingPassword, generateJWT, compareHashed };