const fs = require("fs");
const { data, dataPath } = require("../utils/accessData");
const editTweetAction = require("../utils/editTweetActions");
const Tweet = require("../models/tweet");
const User = require("../models/user");
const joinData = require("../utils/joinTweetToUser");

exports.getJoinedUserTweets = (req, res) => {
  const tweets = Tweet.getAllTweets();
  const joinedData = joinData(tweets);
  res.status(200).json(JSON.stringify(joinedData));
};

exports.getUserTweets = (req, res) => {
  const userId = parseInt(req.params.userId);
  const tweets = Tweet.getUserTweets(userId);
  const joinedData = joinData(tweets);
  res.status(200).json(JSON.stringify(joinedData));
};

exports.updateLike = (req, res) => {
  const tweetId = parseInt(req.params.tweetId);
  editTweetAction("likedTweetIds", tweetId);
  res.status(200).json("tweet like updated");
};

exports.updateShare = (req, res) => {
  const tweetId = parseInt(req.params.tweetId);
  editTweetAction("sharedTweetIds", tweetId);
  res.status(200).json("tweet like updated");
};
