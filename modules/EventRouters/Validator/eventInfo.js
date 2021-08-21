const eventInfoLogic = require("../Logic/eventInfo");

const eventInfo = (sfConn) => {
    return (req, res) => {
        const eventId = req.params.eventId;

        let data = {
            eventId
        }
        return eventInfoLogic(data, res, sfConn)
    }
}

module.exports = eventInfo;