const objectName = require("../../../config/objectName");
const statusCodes = require("../../../config/statusCode");

const eventsInfoLogic = (res, sfConn) => {
    const objectConn = sfConn.sobject(objectName.event);
    const filterData = {
        Name: 1,
        EventDate__c: 1,
        Id: 1
    }
    objectConn.find({}, filterData).execute((err, results) => {
        if(err) {
            console.log(err.message);
            return res.status(statusCodes.service_not_available).json({
                message: "service unavailable",
                status: false
            }); 
        }

        return res.status(statusCodes.ok).json({
            message: "successfully query",
            status: true,
            data: results
        })
    })
}

module.exports = eventsInfoLogic;