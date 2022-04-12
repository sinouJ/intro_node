const {Schema, model} = require('mongoose')

const authorSchema = new Schema({
    firstname: String,
    lastname: String,
})

const thingSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    authors: {
        type: Schema.Types.ObjectId,
        ref: 'authorSchema'
    }
})

const ThingModel = model('Thing', thingSchema);
const AuthorModel = model('Author', authorSchema);

module.exports = {
    ThingModel,
    AuthorModel
}