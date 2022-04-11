const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const router = require('./routes/index').router

app.set('view engine', 'ejs')
app.use('/public', express.static('public'))

app.use('', router)


app.listen(port, () => {
    console.log('Le server écoute sur le port ' + port)
})