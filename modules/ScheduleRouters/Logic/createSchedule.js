const objectName = require("../../../config/objectName");
const statusCodes = require("../../../config/statusCode");

const createScheduleLogic = (data, res, sfConn) => {
    const scheduleConn = sfConn.sobject(objectName.schedule);
    const eventConn = sfConn.sobject(objectName.event);
    eventConn.find({ Id: data.eventId }, { Id: 1 }).execute((err, response) => {
        if (err) {
            console.log(err);
            return res.status(statusCodes.bad_request).json({
                message: "event not found",
                status: false
            });
        }

        const insertData = {
            Event_WQW_ID__c: response[0].Id,
            Name: data.name,
            Description__c: data.desc,
            TimeStart__c: data.timeStart,
            TimeEnd__c: data.timeEnd
        }
        scheduleConn.create(insertData, (err, response) => {
            if (err || !response.success) {
                console.log(err);
                return res.status(statusCodes.internal_err).json({
                    message: "insert schedule fail",
                    status: false
                });
            }

            return res.status(statusCodes.ok).json({
                message: "insert schedule successfully",
                status: true
            });
        });
    });
}

module.exports = createScheduleLogic;