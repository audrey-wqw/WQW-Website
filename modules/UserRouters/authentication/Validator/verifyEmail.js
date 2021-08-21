const verifyEmailLogic = require("../Logic/verifyEmail");
const helperFunc = require("../../../helperFunc");

const verifyEmail = (sfConn) => {
    return (req, res) => {
        if (!req.body?.email) {
            return res.status(statusCode.bad_request).json({
                message: "lack Key: email",
                status: false
            });
        }

        if (!helperFunc.validateEmail(String(req.body.email))) {
            return res.status(statusCode.bad_request).json({
                message: "bad format: email",
                status: false
            });
        }

        let data = {
            email: String(req.body.email)
        }
        return verifyEmailLogic(data, res, sfConn);
    }
}
module.exports = verifyEmail;