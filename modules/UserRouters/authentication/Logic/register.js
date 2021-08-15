const statusCodes = require("../../../../config/statusCode");
const { retrieveData, insertData } = require("../../../SOInteraction");

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
        return res.status(statusCodes.ok).json({
            message: "register successfully",
            data: response.data
        });
    });
}

module.exports = registerLogic;