const express = require("express");
const cors = require("cors");
const logger = require('morgan');

require('dotenv').config();
const PORT = process.env.PORT || 8080;

const apiRouter = require('./routers');

const app = express();
const router = express.Router();

app.use(cors())
app.use(logger('dev'));
app.use(express.json({
    limit: '50mb'
}));
app.use(express.urlencoded({
    extended: true,
    parameterLimit: 100000,
    limit: '50mb'
}));

app.get("/", (req, res) => {
    res.send({
        message: "Email Verification by RapidAPI"
    });
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});

router.use('/v1', apiRouter)

app.use('/api', router);