const express = require("express");
const cors = require("cors");

const initData = require("./utils/initData");

const app = express();
const port = 4000 || parseInt(process.env.PORT);

initData();
app.use(cors());
app.use(express.json());

const usersRoutes = require("./routes/users");
const tweetsRoutes = require("./routes/tweets");
const userRoutes = require("./routes/user");

// Routes
app.use("/user", userRoutes);
app.use("/users", usersRoutes);
app.use("/tweets", tweetsRoutes);

app.listen(port, () => console.log("server listening on port", port));
