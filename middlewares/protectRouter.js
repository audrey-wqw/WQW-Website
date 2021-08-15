const authorizedSO = require("./authorizedSO");

const protectRouter = (req, res, next) => {
    const redisClient = require("../config/redisConn")();
    redisClient.get("so-accessToken", (err, accessToken) => {
        if (err) {
            redisClient.set("so-accessToken", null);
            next();
        } else {
            if (!accessToken) {
                authorizedSO(response => {
                    if (response.status === 200) {
                        redisClient.set("so-accessToken", response.data.accessToken);
                        next()
                    } else {
                        redisClient.set("so-accessToken", null);
                        req.authorizationHeaders = {
                            Authorization: `Bearer `
                        };
                        next()
                    }
                });
            } else {
                req.authorizationHeaders = {
                    Authorization: `Bearer ${accessToken}`
                };
                next();
            }
        }
    });
}

module.exports = protectRouter;