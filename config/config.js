const envPath = __dirname + "/.env";
require("dotenv").config({ path: envPath });

const config = {
    so_consumer_key: process.env.SO_CONSUMER_KEY,
    so_consumer_secret: process.env.SO_CONSUMER_SECRET,
    so_email: process.env.SO_EMAIL,
    so_password: process.env.SO_PASSWORD,
    so_url_login: process.env.SO_URL_LOGIN,
    so_service_domain: process.env.SO_SERVICE_DOMAIN,
    so_id: process.env.SO_ID,

    app_port: process.env.APP_PORT,
    app_host: process.env.APP_HOST,
    redis_port: process.env.REDIS_PORT,

    jwt_secret: process.env.JWT_SECRET,

    mail_service_email: process.env.SERVICE_MAIL_EMAIL,
    mail_service_password: process.env.SERVICE_MAIL_PASSWORD,
    mail_service_key: process.env.MAIL_CLIENT_ID,
    mail_service_secret: process.env.MAIL_CLIENT_SECRET,
    mail_service_refresh_token: process.env.MAIL_CLIENT_REFRESH_TOKEN,

    roles: ["admin", "organizer", "volunteer", "participant"]
}

module.exports = config;