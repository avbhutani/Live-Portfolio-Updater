const express = require('express')
const IntroRoutes = express()
const IntroFetch = require('../controllers/IntroFetch.controller')
const IntroUpdate = require('../controllers/IntroUpdate.controller')


IntroRoutes.get('/api/fetch/intro',IntroFetch)

IntroRoutes.post('/api/update/intro',IntroUpdate)


module.exports = IntroRoutes