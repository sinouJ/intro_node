const express = require('express');

const thingController = require('../controllers/thingController');

exports.router = (function() {
    const router = express.Router()

    // Author
    router.get('/author', thingController.authors);
    router.post('/author', thingController.addAuthor);
    router.get('/author/:id', thingController.author);

    // Thing
    router.route('/thing').get(thingController.getThings)
    router.route('/thing').post(thingController.addThing)
    router.route('/thing').delete(thingController.deleteThings)
    router.route('/thing/:id').get(thingController.getThingById)

    return router
})()