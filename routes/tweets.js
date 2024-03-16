const express = require("express");
const router = express.Router();

const tweetController = require("../controllers/tweet");

router.get("/", tweetController.getJoinedUserTweets);

router.put("/:tweetId/like", tweetController.updateLike);
router.put("/:tweetId/share", tweetController.updateShare);

module.exports = router;
