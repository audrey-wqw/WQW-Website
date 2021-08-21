const objectName = require("../../../config/objectName");
const statusCodes = require("../../../config/statusCode");

const createEvent = (data, res, sfConn) => {
    const objectConn = sfConn.sobject(objectName.event);
    const insertData = {
        Name: data.eventName,
        EventDate__c: data.eventDate,
        EventOwner__c: data.eventOwner
    }
    objectConn.create(insertData, (err, response) => {
        if (err || !response.success) {
            console.log(err);
            return res.status(statusCodes.service_not_available).json({
                message: "unable to insert data",
                status: false
            });
        }

        return res.status(statusCodes.ok).json({
            message: "add event successfully",
            status: true
        });
    });
}

module.exports = createEvent;