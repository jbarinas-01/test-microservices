const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const jwt = require("jsonwebtoken");

const commonlib = require("@common/lib");
const constants = commonlib.constants;
const userdao = commonlib.userdao;

// Constants
const PORT = process.env.PORT || 8080;

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

app.post("/sign-in", (req, res) => {
    try {
        const user = userdao.signin(req.body.username, req.body.password);
        res.status(200).json({
            jwt: jwt.sign(
                {
                    sub: user.id,
                    username: user.username
                },
                constants.JWT_SECRET,
                {
                    expiresIn: constants.JWT_EXPIRESIN,
                    audience: constants.JWT_AUDIENCE,
                    issuer: constants.JWT_ISSUER
                }
            )
        });
    } catch (err) {
        res.status(401).send(err.message);
    }
});

app.get("*", (req, res) => {
    res.sendStatus(404);
});

app.listen(PORT, constants.HOST, () => {
    console.log(`Running on http://${constants.HOST}:${PORT}`);
});
