const IntroModel = require('../models/introSection/IntroSection.model')

async function IntroFetch(req, res) {
    try {
        const result = await IntroModel.findOne({ introUser: "anubhav" }); // Use a different name like 'result'
        console.log(result);
        if(!result) {
            return res.status(501)
        }
        return res.status(200).send(result);
    }
    catch (error) {
        console.error(error); // Log the error for debugging
        return res.status(500).send(error)// Send a proper error message
    }
}

module.exports = IntroFetch;