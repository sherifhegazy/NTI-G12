const router = require("express").Router()
const userController = require('../controller/user.controller')
router.get("", userController.test)
router.get("/x", (req, res)=> res.send("test from x route"))

module.exports = router