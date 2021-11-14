const router = require("express").Router()
const userController = require('../controller/user.controller')

router.get('/addUser', userController.add)

module.exports = router