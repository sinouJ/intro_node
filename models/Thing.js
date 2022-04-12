const {Schema, model} = require('mongoose');

const thingSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

const ThingModel = model('Thing', thingSchema);

module.exports = ThingModel;