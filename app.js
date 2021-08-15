// Dependencies
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const CONFIG = require("./config/config");
const authorizedSO = require("./middlewares/authorizedSO");
const protectRouter = require("./middlewares/protectRouter");

// Function Endpoints
const userRegister = require("./modules/UserRouters/authentication/Validator/register");

// Server Setup
const app = express();

// Config Middlewares
app.use(express.json());
app.use(cors())
app.use(morgan('- Method: :method || Endpoint: :url || StatusCode: :status || ResponseTime: :response-time'));
app.use(protectRouter);

// Config endpoints
app.post("/user/auth/register", userRegister);

// Start Server
app.listen(CONFIG.app_port, CONFIG.app_host, () => {
    authorizedSO((response) => {
        if (response.status !== 200) {
            console.log(response);
        }
        console.log(`Server starts at http://${CONFIG.app_host}:${CONFIG.app_port}`);
    });
});