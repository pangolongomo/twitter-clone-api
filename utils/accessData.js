const fs = require("fs");
const path = require("path");
const rootDir = require("./path");

const dataPath = path.join(rootDir, "assets", "data.json");

const jsonData = fs.readFileSync(dataPath, "utf-8");

const data = JSON.parse(jsonData);

module.exports = { dataPath, data };
