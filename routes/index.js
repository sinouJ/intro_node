const express = require('express');

const thingController = require('../controllers/thingController');

exports.router = (function() {
    const router = express.Router()

    router.route('/').get(thingController.user)
    router.route('/users').get(thingController.users)

    router.route('/test').get(thingController.test)
    // router.route('/').get(thingController.index)

    router.route('/thing').get(thingController.thing)

    return router
})()