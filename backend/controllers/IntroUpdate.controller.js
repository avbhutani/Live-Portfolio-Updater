const IntroModel = require('../models/introSection/IntroSection.model')

async function IntroUpdate(req,res) {
    const reqBody = req.body
    const introExists = await IntroModel.findOne({introUser:'anubhav'})
    
    if(!introExists) {
        const newIntroModel = new IntroModel({
            introTitle:reqBody.introTitle,
            introHeadline:reqBody.introHeadline,
            introContent:reqBody.introContent,
            introButtonText:reqBody.introButtonText || 'Contact Me'
        })
        newIntroModel.save()
        return res.status(200).send({message:'Intro Created!'})
    }

    try {
        
    await IntroModel.updateOne({introUser:'anubhav'}, {
        $set: {
            introTitle:reqBody.introTitle,
            introHeadline:reqBody.introHeadline,
            introContent:reqBody.introContent,
            introButtonText:reqBody.introButtonText || 'Contact Me'
        }
    })
    return res.status(200).send({message:'Intro Section Updated.'})
    }
    catch(error) {
        return res.status(500).send({error:error})
    }
}

module.exports = IntroUpdate