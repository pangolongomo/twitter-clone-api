const { data } = require("../utils/accessData");
const { sortByDate } = require("../utils/sort");

const tweets = data.tweets;
class Tweet {
  constructor() {}

  static getAllTweets() {
    return sortByDate(tweets);
  }
  static getTweetFromId(tweetId) {
    return tweets.find((tweet) => tweet.id === tweetId);
  }
  static getUserTweets(userId) {
    const userTweets = tweets.filter((tweet) => tweet.author === userId);
    return sortByDate(userTweets);
  }
}

module.exports = Tweet;
