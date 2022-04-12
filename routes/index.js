const express = require('express');

const thingController = require('../controllers/thingController');

exports.router = (function() {
    const router = express.Router()

    router.route('/').get(thingController.user)
    router.route('/users').get(thingController.users)

    router.route('/test').get(thingController.test)
    // router.route('/').get(thingController.index)

    router.route('/thing').get(thingController.getThings)
    router.route('/thing').post(thingController.thing)
    router.route('/thing').delete(thingController.deleteThings)
    router.route('/thing/:id').get(thingController.getThingById)

    return router
})()