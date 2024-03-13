const tweets = require("../assets/data.json").tweets;
class Tweet {
  constructor() {}

  static getAllTweets() {
    return tweets;
  }
  static getTweetFromId(tweetId) {
    return tweets.find((tweet) => tweet.id === tweetId);
  }
  static getUserTweets(userId) {
    return tweets.filter((tweet) => tweet.author === userId);
  }
}

module.exports = Tweet;
