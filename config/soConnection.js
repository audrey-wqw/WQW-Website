const salesforce = require("jsforce");
const CONFIG = require("./config");

const createSalesForceConn = (next) => {
    const sfConn = new salesforce.Connection({
        oauth2: {
            clientId: CONFIG.so_consumer_key,
            clientSecret: CONFIG.so_consumer_secret,
            redirectUri: CONFIG.so_url_login
        }
    });

    sfConn.login(CONFIG.so_email, CONFIG.so_password, (err, userInfo) => {
        next(err, sfConn);
    });
}

module.exports = createSalesForceConn;