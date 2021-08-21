const objectName = require("../../../config/objectName");
const statusCodes = require("../../../config/statusCode");

const eventInfoLogic = (data, res, sfConn) => {
    const objectConn = sfConn.sobject(objectName.event);
    const conditions = {
        Id: data.eventId
    }
    const filterData = {
        Name: 1,
        EventDate__c: 1,
        EventOwner__c: 1
    }
    objectConn.find(conditions, filterData).limit(1).execute((err, response) => {
        if (err) {
            console.log(err.message);
            return res.status(statusCodes.not_found).json({
                message: "event not found",
                status: false
            });
        }

        return res.status(statusCodes.ok).json({
            message: "successfully query",
            status: true,
            data: response[0]
        });
    });
}

module.exports = eventInfoLogic;