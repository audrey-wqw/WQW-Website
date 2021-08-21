const objectName = require("../../../config/objectName");
const statusCodes = require("../../../config/statusCode");

const createScheduleLogic = (data, res, sfConn) => {
    const scheduleConn = sfConn.sobject(objectName.schedule);
    const eventConn = sfConn.sobject(objectName.event);
    eventConn.find({Id: data.eventId}, {Id: 1}).find((err, response) => {
        if(err) {
            console.log(err);
            return res.status(statusCodes.bad_request).json({
                message: "event not found",
                status: false
            });
        }

        const eventId = response[0].Id;
        scheduleConn.create()
    });
}