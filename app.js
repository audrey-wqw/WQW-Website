// Libaries
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const passport = require("passport");

// Middlewares
const CONFIG = require("./config/config");
const createSfConn = require("./config/soConnection");
const enableVerifyJWT = require("./middlewares/verifyJWT");
const authAdminOnly = require("./middlewares/authAdminOnly");

// Function Endpoints
const userRegister = require("./modules/UserRouters/authentication/Validator/register");
const userLogin = require("./modules/UserRouters/authentication/Validator/login");
const userVerifyEmail = require("./modules/UserRouters/authentication/Validator/verifyEmail");
const submitVerifyCode = require("./modules/UserRouters/authentication/Validator/submitCode");

const eventsInfo = require("./modules/EventRouters/Validator/eventsInfo");
const createEvent = require("./modules/EventRouters/Validator/createEvent");
const eventInfo = require("./modules/EventRouters/Validator/eventInfo");

const createSchedule = require("./modules/ScheduleRouters/Validator/createSchedule");

// Server Setup
const app = express();

// Config Middlewares
app.use(express.json());
app.use(cors())
app.use(morgan('- Method: :method || Endpoint: :url || StatusCode: :status || ResponseTime: :response-time'));
app.use(passport.initialize());

createSfConn((err, sfConn) => {
    if(err) {
        console.log("Connection to Saleforce fails!");
        return;
    }
    console.log("Successfully Connect to Salesforce");
    enableVerifyJWT(passport, sfConn);

    // User endpoints
    app.post("/user/auth/register/:userRole", userRegister(sfConn));
    app.post("/user/auth/login/:userRole", userLogin(sfConn));
    app.put("/user/auth/verify-email", userVerifyEmail(sfConn));
    app.put("/user/auth/submit-verify-code", submitVerifyCode(sfConn));

    // Event endpoints
    app.get("/events", passport.authenticate("jwt", {session: false}), eventsInfo(sfConn));
    app.post("/events", passport.authenticate("jwt", {session: false}), authAdminOnly, createEvent(sfConn));
    app.get("/events/:eventId", eventInfo(sfConn));

    // Schedule endpoints
    app.post("/events/:eventId/schedules", passport.authenticate("jwt", {session: false}), authAdminOnly, createSchedule(sfConn));

    // Start Server
    app.listen(CONFIG.app_port, CONFIG.app_host, async () => {
        console.log(`Server starts up at http://${CONFIG.app_host}:${CONFIG.app_port}`);
    });
});