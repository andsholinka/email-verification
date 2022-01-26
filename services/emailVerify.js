var axios = require('axios');

require('dotenv').config();
const API_KEY = process.env.API_KEY;
const RAPID_HOST = process.env.RAPID_HOST;
const RAPID_KEY = process.env.RAPID_KEY;

let security = {
    emailVerify: (req, res, email) => {

        return new Promise((resolve, reject) => {
            try {
                var config = {
                    method: 'get',
                    url: `https://ipqualityscore-ipq-proxy-detection-v1.p.rapidapi.com/json/email/${API_KEY}/${email}`,
                    headers: {
                        'x-rapidapi-host': RAPID_HOST,
                        'x-rapidapi-key': RAPID_KEY,
                        'Content-Type': 'application/json'
                    },
                };

                axios(config)
                    .then(function (responsehiya) {

                        resolve(responsehiya);

                    })
                    .catch(function (error) {
                        console.log('=========error=========');
                        console.log(error.response.data);
                        res.status(error.response.status).send({
                            "code": error.response.status,
                            "status": error.response.statusText,
                            "msg": error.response.data,
                        })
                    });
            } catch (err) {
                console.log(err);
                res.status(500).send({
                    "code": 100,
                    "msg": err
                })
            }
        })
    }
}

module.exports = security;