const fs = require("fs");

const { data, dataPath } = require("../utils/accessData");
const User = require("../models/user");

function editTweetAction(action, tweetId) {
  const loggedInUser = User.getLoggedInUser();
  const likedTweets = loggedInUser[action];
  let newUsers;
  if (likedTweets.includes(tweetId)) {
    newUsers = data.users.map((mappedUser) => {
      if (mappedUser.id !== loggedInUser.id) {
        return mappedUser;
      }

      const actionTweetIds = likedTweets.filter((idFromLikeList) => {
        return idFromLikeList !== tweetId;
      });
      return { ...mappedUser, [action]: actionTweetIds };
    });
  } else {
    newUsers = data.users.map((mappedUser) => {
      if (mappedUser.id !== loggedInUser.id) {
        return mappedUser;
      }
      mappedUser[action].push(tweetId);
      return mappedUser;
    });
  }

  const newData = { ...data, users: newUsers };

  const jsonData = JSON.stringify(newData, null, 2);

  fs.writeFileSync(dataPath, jsonData, "utf-8");
}

module.exports = editTweetAction;
