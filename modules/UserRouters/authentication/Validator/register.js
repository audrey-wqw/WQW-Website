const statusCode = require("../../../../config/statusCode");
const helperFunc = require("../../../helperFunc");
const registerLogic = require("../Logic/register");

const registerValidator = (req, res) => {
    if (!req.authorizationHeaders) {
        return res.status(statusCode.service_not_available).json({
            message: "service unavailable",
            status: false
        });
    }

    if (!req.body?.firstName) {
        return res.status(statusCode.bad_request).json({
            message: "Lack Key: firstName",
            status: false
        });
    }

    if (!req.body?.lastName) {
        return res.status(statusCode.bad_request).json({
            message: "Lack Key: lastName",
            status: false
        });
    }

    if (!req.body?.email) {
        return res.status(statusCode.bad_request).json({
            message: "Lack Key: email",
            status: false
        });
    }

    if (!req.body?.password) {
        return res.status(statusCode.bad_request).json({
            message: "Lack Key: password",
            status: false
        });
    }

    if (!helperFunc.validateEmail(String(req.body.email))) {
        return res.status(statusCode.bad_request).json({
            message: "Bad format: email",
            status: false
        });
    }

    if (!helperFunc.validatePassword(String(req.body.password))) {
        return res.status(statusCode.bad_request).json({
            message: "Bad format: password",
            status: false
        });
    }

    let data = {
        firstName: String(req.body.firstName),
        lastName: String(req.body.lastName),
        email: String(req.body.email),
        password: String(req.body.password),
        headers: req.authorizationHeaders
    }
    return registerLogic(data, res);
}

module.exports = registerValidator;