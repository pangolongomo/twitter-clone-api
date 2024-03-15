const Tweet = require("../models/tweet");
const joinData = require("../utils/joinTweetToUser");

exports.getJoinedUserTweets = (req, res) => {
  const tweets = Tweet.getAllTweets();
  const joinedData = joinData(tweets);
  res.status(200).json(joinedData);
};

exports.getUserTweets = (req, res) => {
  const userId = parseInt(req.params.userId);
  //   res.send("mga");
  const tweets = Tweet.getUserTweets(userId);
  const joinedData = joinData(tweets);
  res.status(200).json(joinedData);
};
