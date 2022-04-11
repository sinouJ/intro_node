module.exports = {
    thing: (req, res) => {
        var user = 'Jordan'
        res.send(`Hello ${user}`);
    }, 
    index: (req, res) => {
        res.send('Hello from the index!');
    }
}