const securityService = require('../services/emailVerify');

const emailVerify = async (req, res) => {

    try {
        const email = req.params.email
        const emailVerify = await securityService.emailVerify(req, res, email)

        res.status(200).json({
            status: res.statusCode,
            data: {
                valid: emailVerify.data.valid
            }
        })
    } catch (e) {
        res.status(400).send({
            status: res.statusCode,
            message: e.message
        });
    }
}

module.exports = {
    emailVerify
}