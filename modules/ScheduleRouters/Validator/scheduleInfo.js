const scheduleInfoLogic = require("../Logic/schedulesInfo");

const scheduleInfo = (sfConn) => {
    return (req, res) => {
        let data = {
            eventId: String(req.params.eventId),
            scheduleId: String(req.params.scheduleId)
        }

        return scheduleInfoLogic(data, res, sfConn);
    }
}

module.exports = scheduleInfo;