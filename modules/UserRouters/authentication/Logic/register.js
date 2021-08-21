const statusCodes = require("../../../../config/statusCode");
const helperFunc = require("../../../helperFunc");
const objectName = require("../../../../config/objectName");

const registerLogic = (data, res, sfConn) => {
    const objectConn = sfConn.sobject(objectName.participant);
    // Check if email exists
    objectConn.find({ email__c: data.email }).execute((err, records) => {
        if (!records || records.length > 0) {
            console.log(records);
            return res.status(statusCodes.conflict).json({
                message: "user email existed",
                status: false
            });
        } else {
            helperFunc.hashingPassword(data.password, (err, hashPwd) => {
                if(err) {
                    return res.status(statusCodes.internal_err).json({
                        message: "internal error",
                        status: false
                    });
                }
                const insertData = {
                    email__c: data.email,
                    Name: data.firstName,
                    Last_Name__c: data.lastName,
                    password__c: hashPwd,
                    isVerified__c: false,
                    role__c: data.role
                }
                objectConn.create(insertData, (err, result) => {
                    if(err || !result.success) {
                        console.log(err.message);
                        return res.status(statusCodes.service_not_available).json({
                            message: "service not available",
                            status: false
                        })
                    }
                    return res.status(statusCodes.ok).json({
                        message: "successfully registered",
                        status: true,
                        data: {
                            userId: result.id
                        }
                    });
                });
            });
        }
    })
}

module.exports = registerLogic;