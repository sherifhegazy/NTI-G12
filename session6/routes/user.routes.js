const router = require("express").Router()
const userController = require('../controller/user.controller')

router.get('/addUser', userController.add)
router.get('/addUserPost', userController.addPost)
router.post('/addUserPost', userController.addPostLogic)
router.get("", userController.showAll)
router.get("/edit", userController.editUser)
router.get("/deleteAll", userController.delAll)
router.get("/delete", userController.delSingle)
router.get("/single", userController.showSingle)
module.exports = router