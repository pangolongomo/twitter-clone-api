const users = require("../assets/data.json").users;
const loggedInUserId = require("../assets/data.json").loggedInUserId;
class User {
  constructor() {}

  static getUserFromId(userId) {
    return users.find((user) => user.id === userId);
  }
  static getUserFromIndex(index) {
    return users[index];
  }
  static getLoggedInUser() {
    return users.find((user) => user.id === loggedInUserId);
  }
  static getUserCount() {
    return users.length;
  }
}

module.exports = User;
