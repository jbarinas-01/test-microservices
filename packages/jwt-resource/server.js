const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const jwt = require("express-jwt");

const commonlib = require("@common/lib");
const constants = commonlib.constants;
const userdao = commonlib.userdao;

// Constants
const PORT = process.env.PORT || 8080;
const JWT_OPTIONS = {
    secret: constants.JWT_SECRET,
    audience: constants.JWT_AUDIENCE,
    issuer: constants.JWT_ISSUER
};

// App
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.set("etag", false);

app.get("/", (req, res) => {
    res.set("Content-Type", "text/plain");
    res.status(200).send("OK");
});

app.get("/status", (req, res) => {
    res.set("Content-Type", "text/plain");
    res.status(200).send("UP");
});

app.get("/secret", jwt(JWT_OPTIONS), (req, res) => {
    let user = userdao.getByUsername(req.user.username);
    res.set("Content-Type", "text/plain");
    res.status(200).send(`this is your id: ${user.id}`);
});

app.get("*", (req, res) => {
    res.sendStatus(404);
});

app.use(function(err, req, res, next) {
    if (err.name === "UnauthorizedError") {
        res.set("Content-Type", "text/plain");
        res.status(401).send("401 - unauthorized");
    }
});

app.listen(PORT, constants.HOST, () => {
    console.log(`Running on http://${constants.HOST}:${PORT}`);
});
