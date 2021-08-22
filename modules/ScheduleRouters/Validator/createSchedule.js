const createScheduleLogic = require("../Logic/createSchedule");
const helperFunc = require("../../helperFunc");
const statusCode = require("../../../config/statusCode");

const createSchedule = (sfConn) => {
    return (req, res) => {
        if (!req.body?.scheduleName) {
            return res.status(statusCode.bad_request).json({
                message: "lack key: scheduleName",
                status: false
            });
        }

        if (!req.body?.scheduleDesc) {
            return res.status(statusCode.bad_request).json({
                message: "lack key: scheduleDesc",
                status: false
            });
        }

        if (!req.body?.timeStart) {
            return res.status(statusCode.bad_request).json({
                message: "lack key: timeStart",
                status: false
            });
        }

        if (!req.body?.timeEnd) {
            return res.status(statusCode.bad_request).json({
                message: "lack key: timeEnd",
                status: false
            });
        }

        if(!helperFunc.validateTime(req.body.timeStart)) {
            return res.status(statusCode.bad_request).json({
                message: "bad format: timeStart",
                status: false
            });
        }

        if(!helperFunc.validateTime(req.body.timeEnd)) {
            return res.status(statusCode.bad_request).json({
                message: "bad format: timeEnd",
                status: false
            });
        }

        let data = {
            eventId: req.params.eventId,
            timeStart: req.body.timeStart,
            timeEnd: req.body.timeEnd,
            name: req.body.scheduleName,
            desc: req.body.scheduleDesc
        }
        return createScheduleLogic(data, res, sfConn);
    }
}

module.exports = createSchedule;