const fs = require("fs");
const { data, dataPath } = require("../utils/accessData");
const Tweet = require("../models/tweet");
const User = require("../models/user");
const joinData = require("../utils/joinTweetToUser");

exports.getJoinedUserTweets = (req, res) => {
  const tweets = Tweet.getAllTweets();
  const joinedData = joinData(tweets);
  res.status(200).json(joinedData);
};

exports.getUserTweets = (req, res) => {
  const userId = parseInt(req.params.userId);
  const tweets = Tweet.getUserTweets(userId);
  const joinedData = joinData(tweets);
  res.status(200).json(joinedData);
};

exports.updateLike = (req, res) => {
  const tweetId = parseInt(req.params.tweetId);
  const loggedInUser = User.getLoggedInUser();
  const likedTweets = loggedInUser.likedTweetIds;
  let newUsers;
  if (likedTweets.includes(tweetId)) {
    newUsers = data.users.map((mappedUser) => {
      if (mappedUser.id !== loggedInUser.id) {
        return mappedUser;
      }

      const likedTweetIds = likedTweets.filter((idFromLikeList) => {
        return idFromLikeList !== tweetId;
      });
      return { ...mappedUser, likedTweetIds };
    });
  } else {
    newUsers = data.users.map((mappedUser) => {
      if (mappedUser.id !== loggedInUser.id) {
        return mappedUser;
      }
      mappedUser.likedTweetIds.push(tweetId);
      return mappedUser;
    });
  }

  const newData = { ...data, users: newUsers };

  const jsonData = JSON.stringify(newData, null, 2);

  fs.writeFileSync(dataPath, jsonData, "utf-8");

  res.status(200).json("tweet like updated");
};
