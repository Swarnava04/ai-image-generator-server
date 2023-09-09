const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const dbCoonect = require("./mongodb/dbConnect");
const postRoutes = require("./routes/postRoutes");
const dalleRoutes = require("./routes/dalleRoutes");
dotenv.config("./.env");

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(morgan("common"));
app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);
app.get("/", async (req, res) => {
  res.send("Hello there so the api is working properly");
});

const startServer = async () => {
  const number = 8000;
  dbCoonect(process.env.MONGO_URL);
  app.listen(number, () => {
    console.log("Server has started on port number", number);
  });
};

startServer();
