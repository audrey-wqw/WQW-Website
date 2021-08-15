const statusCodes = require("../../../../config/statusCode");
const { retrieveData, insertData } = require("../../../SOInteraction");
const helperFunc = require("../../../helperFunc");
const CONFIG = require("../../../../config/config");

const registerLogic = (data, res) => {
    const query = `select Email__c from Participant__c where Email__c = '${data.email}'`;
    retrieveData(query, data.headers, (err, response) => {
        if(err) {
            return res.status(statusCodes.service_not_available).json({
                message: err.message,
                status: false
            });
        } else if (response.status !== 200) {
            return res.status(statusCodes.service_not_available).json({
                message: err.message,
                status: false
            });
        }
        if (response.data.totalSize > 0) {
            return res.status(statusCodes.conflict).json({
                message: "user email existed",
                status: false
            });
        }
        helperFunc.hashingPassword(data.password, (err, hashedPwd) => {
            if(err) {
                return res.status(statusCodes.internal_err).json({
                    message: "internal error",
                    status: false
                });
            }

            // Insert Data
            const filterData = {
                OwnerId: CONFIG.so_id,
                Email__c: data.email,
                Password__c: hashedPwd,
                Name: data.firstName,
                Participant_Last_Name__c: data.lastName
            }

            insertData(filterData, "Participant__c", data.headers, (err, response) => {
                if (err || response.status !== 200) {
                    return res.status(statusCodes.service_not_available).json({
                        message: "service unavailable",
                        status: false
                    });
                }

                return res.status(statusCodes.ok).json({
                    message: "register successfully",
                    status: true
                });
            });
        })
    });
}

module.exports = registerLogic;