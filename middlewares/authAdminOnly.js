const statusCodes = require("../config/statusCode");
const CONFIG = require("../config/config");

const authAdminOnly = (req, res, next) => {
    const userInfo = req.user;
    if(CONFIG.roles[userInfo.role__c] !== "admin") {
        return res.status(statusCodes.unauthorized).json({
            message: "not permitted",
            status: false
        });
    }
    next()
}

module.exports = authAdminOnly;