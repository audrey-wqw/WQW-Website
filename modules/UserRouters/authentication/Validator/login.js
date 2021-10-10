const statusCode = require("../../../../config/statusCode");
const helperFunc = require("../../../helperFunc");
const loginLogic = require("../Logic/login");
const statusCodes = require("../../../../config/statusCode");

const loginValidator = (sfConn) => {
    return (req, res) => {
        if (!req.body?.email) {
            return res.status(statusCode.bad_request).json({
                message: "lack Key: email",
                status: false
            });
        }

        if (!req.body?.password) {
            return res.status(statusCode.bad_request).json({
                message: "lack Key: password",
                status: false
            });
        }

        if (!helperFunc.validateEmail(String(req.body.email))) {
            return res.status(statusCode.bad_request).json({
                message: "bad format: email",
                status: false
            });
        }

        if (!helperFunc.validatePassword(String(req.body.password))) {
            return res.status(statusCode.bad_request).json({
                message: "bad format: password",
                status: false
            });
        }

        let data = {
            email: String(req.body.email),
            password: String(req.body.password)
        }
        return loginLogic(data, res, sfConn);
    }
}
module.exports = loginValidator;