const { register, login } = require("../controllers/userControllers");

const router = require("express").Router();

router.post("/register", register);
router.post("/login", login)
router.get("/allusers/:id", getAllUsers);
router.post("/setavatar/:id", setAvatar);

module.exports = router
