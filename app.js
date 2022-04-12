const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const mongoose = require('mongoose')

const router = require('./routes/index').router

app.set('view engine', 'ejs')
app.use('/public', express.static('public'))

// Connexion à la base de données
mongoose.connect('mongodb+srv://admin:admin@exercicenode.muxhl.mongodb.net/exerciceNode?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch(err => {
    console.log(err)
})

app.use('', router)


app.listen(port, () => {
    console.log('Le server écoute sur le port ' + port)
})