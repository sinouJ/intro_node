const mongoose = require('mongoose')
const { ThingModel, AuthorModel } = require('../models/Thing')

module.exports = {
    author: (req, res) => {
        AuthorModel.findById(req.body.id, (err, author) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.render('user', { author })
            }
        })
    }, 
    authors: (req, res) => {
        AuthorModel.find({}, (err, users) => {
            if (err) {
                res.status(500).send(err)
            }
            else {
                if (!users) {
                    res.status(404).send('Aucun auteur trouvé')
                }
                res.status(200).render('index', {
                    users
                })
            }
        })
    },
    addAuthor: (req, res) => {
        const Author = new AuthorModel({
            _id: new mongoose.Types.ObjectId(),
            firstname: req.body.firstname,
            lastname: req.body.lastname,
        })
        Author.save((err, author) => {
            if (err) {
                res.status(500).render('error', {
                    error: err
                })
            } else {
                res.status(200).redirect('/author')
            }
        })
    },
    addThing: (req, res) => {
        AuthorModel.findById(req.body.author, (err, author) => {
            if (err) {
                res.status(500).send(err)
            } else {
                const thing = new ThingModel({
                    _id: new mongoose.Types.ObjectId(),
                    name: req.body.name,
                    description: req.body.description,
                    author: author.id
                })
                thing.save((err, thing) => {
                    if (err) {
                        res.status(500).render('error', {
                            error: err
                        })
                    } else {
                        res.status(200).redirect('/thing')
                    }
                })
            }
        })
    },
    getThings: (req, res) => {
        AuthorModel.find({}, (err, authors) => {
            if (err) {
                res.status(500).send(err)
            }
            else {
                if (!authors) {
                    res.status(404).send('Aucun auteur trouvé')
                }
                ThingModel.find({}, (err, things) => {
                    if (err) {
                        res.status(500).render('error', {
                            message: 'Error when getting things',
                            error: err.message
                        })
                    } else {
                        res.status(200).render('things', {
                            message: 'Things retrieved',
                            things,
                            authors
                        })
                    }
                })
            }
        })
        
    },
    getThingById: (req, res) => {
        ThingModel.findById(req.params.id, (err, thing) => {
            if (err) {
                res.status(500).json({
                    message: 'Error when getting thing',
                    error: err.message
                })
            }
            else {
                res.status(200).json({
                    message: 'Thing retrieved',
                    thing
                })
            }
        })
    },
    deleteThings: (req, res) => {
        ThingModel.deleteMany({ name: req.body.name}, (err, things) => {
            res.json({
                things
            })
        })
    }
}