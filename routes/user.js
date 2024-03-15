const express = require("express");
const userController = require("../controllers/user");
const tweetController = require("../controllers/tweet");
const router = express.Router();

router.get("/t/:userId", tweetController.getUserTweets);
router.get("/h/:handle", userController.getUserByHandle);

module.exports = router;
