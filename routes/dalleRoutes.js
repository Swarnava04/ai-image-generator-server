const express = require("express");
const dotenv = require("dotenv");
// const { OpenAIApi, Configuration } = require("openai");
const { Configuration, OpenAIApi } = require("openai");
const Post = require("../mongodb/models/Post");
dotenv.config();

const router = express.Router();

const config = new Configuration({
  // apiKey: process.env.API_KEY,
  apiKey: "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",
});
const openai = new OpenAIApi(config);
// router.route("/").get((req, res) => {
//   res.send("Hello from DALL-E");
// });

router.post("/", async (req, res) => {
  try {
    // res.send("Hello from DALL-E");
    const { prompt } = req.body;
    const aiResponse = await openai.createImage({
      prompt: "a beautiful weather",
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });
    console.log("the openai image is:", aiResponse);
    const image = aiResponse.data.data[0].b64_json;
    // const image = aiResponse.data.data[0].url;
    res.status(200).json({ photo: image });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
