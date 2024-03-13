const express = require("express");
const cors = require("cors");

const initData = require("./utils/initData");

const app = express();
const port = parseInt(process.env.PORT);

app.use(cors());
app.use(express.json());

const usersRoutes = require("./routes/users");
const tweetsRoutes = require("./routes/tweets");

// Routes
app.use("/users", usersRoutes);
app.use("/tweets", tweetsRoutes);

initData()
  .then(() => {
    app.listen(port, () => console.log("server listening on port", port));
  })
  .catch((err) => console.log("Error initializing data"));
