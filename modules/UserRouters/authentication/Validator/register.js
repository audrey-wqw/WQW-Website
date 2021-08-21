const statusCode = require("../../../../config/statusCode");
const helperFunc = require("../../../helperFunc");
const registerLogic = require("../Logic/register");
const statusCodes = require("../../../../config/statusCode");

const registerValidator = (sfConn) => {
    return (req, res) => {
        if (!req.body?.firstName) {
            return res.status(statusCode.bad_request).json({
                message: "lack Key: firstName",
                status: false
            });
        }

        if (!req.body?.lastName) {
            return res.status(statusCode.bad_request).json({
                message: "lack Key: lastName",
                status: false
            });
        }

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

        const userRole = req.params.userRole;

        let indexRole = helperFunc.checkRole(userRole);

        if (indexRole === -1) {
            return res.status(statusCodes.bad_request).json({
                message: "invalid user role",
                status: false
            });
        }

        let data = {
            firstName: String(req.body.firstName),
            lastName: String(req.body.lastName),
            email: String(req.body.email),
            password: String(req.body.password),
            role: indexRole
        }
        return registerLogic(data, res, sfConn);
    }
}
module.exports = registerValidator;