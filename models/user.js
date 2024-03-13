const users = require("../assets/data.json").users;
const loggedInUserId = require("../assets/data.json").loggedInUserId;
class Tweet {
  constructor() {}

  static getUserFromId(userId) {
    return users.find((user) => user.id === userId);
  }
  static getLoggedInUser() {
    return users.find((user) => user.id === loggedInUserId);
  }
  static getUserTweets(userId) {
    return tweets.filter((tweet) => tweet.author === userId);
  }
}

module.exports = Tweet;
