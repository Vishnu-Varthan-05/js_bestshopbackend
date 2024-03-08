const express = require("express");
const login = require("../../controllers/auth/login");

const router = express.Router();

router.post("/login", login.post_login)

module.exports = router;