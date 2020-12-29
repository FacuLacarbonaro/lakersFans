const mongoose = require("mongoose");
const URI =
  "mongodb+srv://admin:1234@cluster0.gpono.mongodb.net/lakers?retryWrites=true&w=majority";

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Db is connected"))
  .catch((err) => console.log(err));

module.exports = mongoose;
