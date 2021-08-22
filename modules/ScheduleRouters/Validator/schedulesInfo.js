const schedulesInfoLogic = require("../Logic/schedulesInfo");

const schedulesInfo = (sfConn) => {
    return (req, res) => {
        let data = {
            eventId: req.params.eventId
        }

        return schedulesInfoLogic(data, res, sfConn);
    }
}

module.exports = schedulesInfo;