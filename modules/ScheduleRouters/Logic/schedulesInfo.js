const objectName = require("../../../config/objectName");
const statusCodes = require("../../../config/statusCode");

const schedulesInfoLogic = (data, res, sfConn) => {
    const objectConn = sfConn.sobject(objectName.schedule);
    const filterData = {
        Id: 1,
        Name: 1,
        TimeEnd__c: 1,
        TimeStart__c: 1,
        Description__c: 1
    }
    objectConn.find({ Id: data.eventId }, filterData).execute((err, response) => {
        if (err) {
            console.log(err);
            return res.status(statusCodes.bad_request).json({
                message: "event not found",
                status: false
            });
        }

        return res.status(statusCodes.ok).json({
            message: "query successfully",
            data: response,
            status: true
        });
    });
}

module.exports = schedulesInfoLogic;