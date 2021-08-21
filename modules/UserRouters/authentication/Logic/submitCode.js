const objectName = require("../../../../config/objectName");
const statusCodes = require("../../../../config/statusCode");
const helperFunc = require("../../../helperFunc");

const submitCodeLogic = (data, res, sfConn) => {
    const objectConn = sfConn.sobject(objectName.participant);
    const conditions = {
        Email__c: data.email
    }
    const filterData = {
        Id: 1,
        verifyCode__c: 1,
        verifyExpired__c: 1,
        isVerified__c: 1
    }

    objectConn.find(conditions, filterData).limit(1).execute((err, response) => {
        if (!response || response.length === 0) {
            console.log(err);
            return res.status(statusCodes.not_found).json({
                message: "user not found",
                status: false
            });
        }

        const user = response[0];

        if(user.isVerified__c) {
            return res.status(statusCodes.conflict).json({
                message: "user has already been verified",
                status: false
            });
        }
        
        if(user.verifyCode__c !== data.code || helperFunc.getTime(0) > user.verifyExpired__c) {
            return res.status(statusCodes.conflict).json({
                message: "invalid or expired code",
                status: false
            });
        }

        const update = {
            Id: user.Id,
            verifyCode__c: null,
            verifyExpired__c: null,
            isVerified__c: true
        }

        objectConn.update(update, (err, response) => {
            if(err || !response.success) {
                console.log(err.message);
                return res.status(statusCodes.service_not_available).json({
                    message: "fail to update verify code",
                    status: false
                });
            }

            return res.status(statusCodes.ok).json({
                message: "succesfully verify code",
                status: true
            });
        });
    });
}

module.exports = submitCodeLogic;