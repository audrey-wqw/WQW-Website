// Dependencies
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const CONFIG = require("./config/config");

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
});