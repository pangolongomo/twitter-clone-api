const User = require("../models/user");
exports.getConnectedUser = (req, res) => {
  const loggedInUser = User.getLoggedInUser();
  res.json(loggedInUser);
};

exports.getSomeUsers = (req, res) => {
  const userLength = User.getUserCount();
  let tweetCount =
    req.params.count > userLength ? userLength : parseInt(req.params.count);
  const someUserIndexes = [];
  const someUsers = [];

  while (tweetCount) {
    const userIndex = Math.floor(Math.random() * userLength);
    if (!someUserIndexes.includes(userIndex)) {
      someUserIndexes.push(userIndex);
      const user = User.getUserFromId(userIndex);
      someUsers.push({
        name: user.name,
        handle: user.handle,
        profilePicture: user.profilePicture,
      });
      tweetCount--;
    }
  }

  res.status(200).json(someUsers);
};
