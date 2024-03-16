const path = require("path");
const fs = require("fs");
const rootDir = require("./path");

function initData() {
  const dataPath = path.join(rootDir, "assets", "data.json");
  const initialDataPath = path.join(rootDir, "assets", "initial-data.json");
  try {
    if (!fs.existsSync(dataPath)) {
      const initialData = fs.readFileSync(initialDataPath, "utf-8");
      const jsonData = JSON.parse(initialData);

      fs.writeFileSync(dataPath, JSON.stringify(jsonData));
      console.log("data initialized successfully");
    } else {
      console.log("data already initialized");
    }
  } catch (error) {
    console.log("Error initializing data".error);
  }
}

module.exports = initData;
