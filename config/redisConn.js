const CONFIG = require('./config');
const redis = require("redis");

const createRedisConn = () => {
    // Config Redis Server
    const cachedOptions = {
        host: CONFIG.app_host,
        port: CONFIG.redis_port
    }
    const redisClient = redis.createClient(cachedOptions);

    return redisClient;
}

module.exports = createRedisConn;