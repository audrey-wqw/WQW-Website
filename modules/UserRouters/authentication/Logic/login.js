const statusCodes = require("../../../../config/statusCode");
const helperFunc = require("../../../helperFunc");
const objectName = require("../../../../config/objectName");
const CONFIG = require("../../../../config/config");

const loginLogic = (data, res, sfConn) => {
    const objectConn = sfConn.sobject(objectName.participant);
    const filterData = {
        Id: 1,
        email__c: 1,
        password__c: 1,
    }

    const conditions = {
        email__c: data.email,
        isVerified__c: true,
        role__c: data.role
    }
    objectConn.find(conditions, filterData).limit(1).execute((err, records) => {
        if (!records || records.length == 0) {
            console.log(err);
            return res.status(statusCodes.not_found).json({
                message: "account not found or is not verified",
                status: false
            });
        }

        const user = records[0];
        helperFunc.compareHashed(data.password, user.password__c, (err, match) => {
            if (err) {
                console.log(err.message);
                return res.status(statusCodes.internal_err).json({
                    message: "internal error",
                    status: false
                });
            }

            if (!match) {
                return res.status(statusCodes.unauthorized).json({
                    message: "check your email or password",
                    status: false
                });
            }

            const payload = {
                email: user.email__c,
                id: user.Id,
                role: CONFIG.roles[data.role]
            }

            helperFunc.generateJWT(60 * 24 * 7, payload, (err, token) => {
                if (err) {
                    console.log(err.message);
                    return res.status(statusCodes.internal_err).json({
                        message: "internal error",
                        status: false
                    });
                }

                const authToken = `Bearer ${token}`;
                return res.status(statusCodes.ok).json({
                    message: "login successfully",
                    data: {
                        token: authToken
                    },
                    status: true
                });
            });
        });
    });
}

module.exports = loginLogic;