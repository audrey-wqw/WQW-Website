const statusCodes = require("../../../../config/statusCode");
const helperFunc = require("../../../helperFunc");
const submitCodeLogic = require("../Logic/submitCode");

const submitCodeValidator = (sfConn) => {
    return (req, res) => {
        if (!req.body?.email) {
            return res.status(statusCode.bad_request).json({
                message: "lack Key: email",
                status: false
            });
        }

        if (!req.body?.code) {
            return res.status(statusCodes.bad_request).json({
                message: "lack Key: code",
                status: false
            });
        }

        if (!helperFunc.validateEmail(String(req.body.email))) {
            return res.status(statusCode.bad_request).json({
                message: "bad format: email",
                status: false
            });
        }

        if(req.body.code.length !== 6) {
            return res.status(statusCodes.bad_request).json({
                message: "bad format: code",
                status: false
            });
        }

        let data = {
            email: String(req.body.email),
            code: String(req.body.code)
        }

        return submitCodeLogic(data, res, sfConn);
    }
}
module.exports = submitCodeValidator;