const bcrypt = require("bcrypt");
const CONFIG = require("../config/config");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const e = require("cors");

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
    return regexPassword.test(String(password));
}

const validateDate = (dateString) => {
    const regexDate = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    return regexDate.test(String(dateString));
}

const validateTime = (timeString) => {
    const regexTime = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
    return regexTime.test(String(timeString));
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
    jwt.sign(data, CONFIG.jwt_secret, { expiresIn: minutes * 60 }, (err, token) => {
        next(err, token);
    });
}

/**
 * Comparing hash password
 */
const compareHashed = (plainPwd, hashedPwd, next) => {
    bcrypt.compare(plainPwd, hashedPwd, (err, match) => {
        next(err, match);
    });
}

const sendVerifyCode = async (userEmail, code) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAUTH2',
            user: CONFIG.mail_service_email,
            pass: CONFIG.mail_service_password,
            clientId: CONFIG.mail_service_key,
            clientSecret: CONFIG.mail_service_secret,
            refreshToken: CONFIG.mail_service_refresh_token
        }
    });
    const mailOptions = {
        from: {
            name: "Warriors and Quiet Water",
            address: CONFIG.mail_service_email
        },
        to: userEmail,
        subject: "Confirmation PassCode",
        text: `Dear ${userEmail},` + "\n" +
            `Thank you for choosing using our service.` + "\n" +
            `Here is the code: ${code}`
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if (err != null) {
            console.log('Error sending link to user - sendVerifyCode(): ', err);
            return;
        } else {
            console.log('Email sent: ', info.response);
            return;
        }
    });
}

const generateCode = () => {
    var result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (var i = 0; i < 6; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const getTime = (minutes) => {
    return Date.now() + 1000 * 60 * minutes
}

const checkRole = (role) => {
    return CONFIG.roles.indexOf(role);
}

module.exports = { 
    validateEmail, validatePassword, hashingPassword, generateJWT, compareHashed, sendVerifyCode, 
    generateCode, getTime, checkRole, validateDate, validateTime
};