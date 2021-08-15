const CONFIG = require("../config/config");
const axios = require("axios");
const createRedisConn = require("../config/redisConn");

const authorizedSO = (next) => {
    const params = {
        grant_type: "password",
        client_id: CONFIG.so_consumer_key,
        client_secret: CONFIG.so_consumer_secret,
        username: CONFIG.so_email,
        password: CONFIG.so_password
    }
    const redisClient = createRedisConn();

    axios.post(CONFIG.so_url_login, null, { params: params })
        .then(response => {
            if (response?.status === 200) {
                redisClient.set("so-accessToken", response.data.access_token);
            } else {
                redisClient.set("so-accessToken", null);
            }
            next(response);
        })
        .catch(error => {
            redisClient.set("so-accessToken", null);
            next(error);
        });
}

module.exports = authorizedSO;