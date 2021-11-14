const add = (req,res) => {
    res.render('add', {
        pageTitle:"add new user"
    })
}

module.exports = {
    add
}