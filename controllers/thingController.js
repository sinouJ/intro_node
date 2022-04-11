module.exports = {
    thing: (req, res) => {
        var user = 'Jordan'
        res.status(200).render('index', {
            user
        })
    }, 
    index: (req, res) => {
        res.send('Hello from the index!');
    }
}