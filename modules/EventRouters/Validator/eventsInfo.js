const eventsInfoLogic = require("../Logic/eventsInfo");

const eventsInfo = (sfConn) => {
    return (req, res) => {
        return eventsInfoLogic(res, sfConn)
    }
}

module.exports = eventsInfo;