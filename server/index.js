const express = require("express");
const cors = require("cors");

const { mongoose } = require("./database");

const app = express();

app.set("port", process.env.PORT || 1337);

app.use(express.json());
app.use(cors());

//Routes
app.use(require("./routes/Players.Routes"));

app.listen(app.get("port"), () => {
  console.log(`Server run on port ${app.get("port")}`);
});
