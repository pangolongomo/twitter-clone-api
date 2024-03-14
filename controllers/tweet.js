const User = require("../models/user");
const Tweet = require("../models/tweet");

exports.getJoinedUserTweets = (req, res) => {
  const tweets = Tweet.getAllTweets();
  const joinedData = tweets.map((tweet) => {
    const user = User.getUserFromId(tweet.author);
    const loggedInUser = User.getLoggedInUser();
    const liked = loggedInUser.likedTweetIds.includes(tweet.id);
    const shared = loggedInUser.sharedTweetIds.includes(tweet.id);

    let handle = null,
      name = null,
      profilePicture = null;

    if (user) {
      handle = user.handle;
      name = user.name;
      profilePicture = user.profilePicture;
    }
    const {
      id,
      retweetCount,
      favoriteCount,
      repliesCount,
      media,
      text,
      createdAt,
    } = tweet;

    return {
      id,
      handle,
      name,
      media,
      profilePicture,
      liked,
      shared,
      retweetCount,
      favoriteCount,
      repliesCount,
      text,
      createdAt,
    };
  });
  res.status(200).json(joinedData);
};
