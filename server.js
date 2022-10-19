const express = require('express');
const app = express();
const PORT = 3001;

const mongoose = require("mongoose");
//configure mongoose
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/node-auth",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

app.use(express.json());

const blogRouter = require("./routes/BlogRoutes");
app.use("/api/blogs", blogRouter);

app.listen(PORT, (req, res) => {
    console.log({
        message: 'App started!'
    })
})

module.exports = app;