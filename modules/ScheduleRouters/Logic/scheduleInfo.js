const objectName = require("../../../config/objectName");
const statusCodes = require("../../../config/statusCode");

const scheduleInfoLogic = (data, res, sfConn) => {
    const objectConn = sfConn.sobject(objectName.schedule);
    const conditions = {
        Event_WQW_ID__c: data.eventId,
        Id: data.scheduleId
    };
    const filterData = {
        Id: 1,
        Name: 1,
        TimeEnd__c: 1,
        TimeStart__c: 1,
        Description__c: 1
    }
    objectConn.find(conditions, filterData).execute((err, response) => {
        if(err) {
            console.log(err);
            return res.status(statusCodes.internal_err).json({
                message: "unable to query data",
                status: false
            });
        }

        return res.status(statusCodes.ok).json({
            message: "successfully query",
            data: response,
            status: true
        })
    });
}

module.exports = scheduleInfoLogic