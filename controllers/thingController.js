const mongoose = require('mongoose')
const ThingModel = require('../models/Thing')

module.exports = {
    user: (req, res) => {
        var user = 'Jordan'
        res.status(200).render('index', {
            user
        })
    }, 
    users: (req, res) => {
        var users = [
            {
                firstname: 'Jordan',
                name: 'Sinou',
                age: '24'
            },
            {
                firstname: 'jo',
                name: 'si',
                age: '14'
            },
            {
                firstname: 'john',
                name: 'doe',
                age: '34'
            }
        ]
        res.status(200).render('users', {
            users
        })
    },
    test: (req, res) => {
        var users = [
            {
                firstname: 'Jordan',
                name: 'Sinou',
                age: '24'
            },
            {
                firstname: 'jo',
                name: 'si',
                age: '14'
            },
            {
                firstname: 'john',
                name: 'doe',
                age: '34'
            }
        ]
        res.status(200).json({
            users
        })
    },
    thing: (req, res) => {
        const Thing = new ThingModel({
            name: 4,
            description: 'Deuxième thing'
        })

        Thing.save({}, (err, thing) => {
            if (err) {
                res.status(500).json({
                    message: 'Error when saving the thing',
                    error: err.message
                })
            } else {
                res.status(200).json({
                    message: 'Saved',
                    thing
                })
            }
        })
    }
}