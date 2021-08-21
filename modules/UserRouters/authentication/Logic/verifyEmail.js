const statusCodes = require("../../../../config/statusCode");
const helperFunc = require("../../../helperFunc");
const objectName = require("../../../../config/objectName");

const verifyEmailLogic = (data, res, sfConn) => {
    const objectConn = sfConn.sobject(objectName.participant);
    objectConn.find({ Email__c: data.email }, { Email__c: 1, Id: 1 }).limit(1).execute((err, response) => {
        if (err) {
            console.log(err.message);
            return res.status(statusCodes.service_not_available).json({
                message: "service unavailable",
                status: false
            });
        }

        if (response.length === 0) {
            return res.status(statusCodes.not_found).json({
                message: "account not found",
                status: false
            });
        }

        const user = response[0];
        const code = helperFunc.generateCode();

        const update = {
            Id: user.Id,
            verifyCode__c: code,
            verifyExpired__c: helperFunc.getTime(5)
        }

        objectConn.update(update, (err, response) => {
            if (err || !response.success) {
                console.log(err.message, response);
                return res.status(statusCodes.service_not_available).json({
                    message: "fail to send verify code",
                    status: false
                });
            }

            helperFunc.sendVerifyCode(user.email__c, code);

            return res.status(statusCodes.ok).json({
                message: "you have 5 minutes to verify your code",
                status: true
            });
        });
    });
}

module.exports = verifyEmailLogic;