const createScheduleLogic = require("../Logic/createSchedule");

const createSchedule = (sfConn) => {
    return (req, res) => {
        let data = {
            eventId: req.params.eventId
        }
        return createScheduleLogic(data, res, sfConn);
    }
}

module.exports = createSchedule;