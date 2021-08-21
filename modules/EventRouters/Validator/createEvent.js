const CONFIG = require("../../../config/config");
const statusCodes = require("../../../config/statusCode");
const helperFunc = require("../../helperFunc");
const createEventLogic = require("../Logic/createEvent");

const createEvent = (sfConn) => {
    return (req, res) => {
        if (!req.body?.eventName) {
            return res.status(statusCodes.bad_request).json({
                message: "lack Key: eventName",
                status: false
            });
        }

        if (!req.body?.eventDate) {
            return res.status(statusCodes.bad_request).json({
                message: "lack Key: eventDate",
                status: false
            });
        }

        if (!helperFunc.validateDate(req.body.eventDate)) {
            return res.status(statusCodes.bad_request).json({
                message: "bad format: eventDate",
                status: false
            });
        }

        const dateSplit = req.body.eventDate.split("/");

        let data = {
            eventName: String(req.body.eventName),
            eventDate: parseFloat(Date.UTC(dateSplit[2], dateSplit[1], dateSplit[0])),
            eventOwner: req.user.Id
        }
        return createEventLogic(data, res, sfConn);
    }
}

module.exports = createEvent;