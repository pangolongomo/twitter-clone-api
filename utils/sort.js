exports.sortByDate = (arr) => {
  return arr.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
};
