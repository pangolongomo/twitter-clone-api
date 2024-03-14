const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

router.get("/auth", userController.getConnectedUser);
router.get("/s/:count", userController.getSomeUsers);

module.exports = router;
