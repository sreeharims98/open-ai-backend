const express = require("express");
const { Configuration, OpenAIApi } = require("openai");
const openAiApis = require("./constants");
const config = require("./config");
var cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const configuration = new Configuration({
  apiKey: config.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.post("/api/ai", (req, res) => {
  const { method, input } = req.body;

  if (method && input) {
    const options = openAiApis[method];

    if (options) {
      openai
        .createCompletion({
          ...options,
          prompt: `${options.prompt} ${input}`,
        })
        .then((response) => {
          if (response.data) {
            res.status(200).json({ success: true, data: response.data });
          } else {
            res.status(500).json({
              success: false,
              message: "Something went wrong on OpenAI's side!",
            });
          }
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({
            success: false,
            message: "Something went wrong on OpenAI's side!",
          });
        });
    } else {
      res.status(400).json({
        success: false,
        message: "Invalid Method!",
      });
    }
  } else {
    res.status(400).json({
      success: false,
      message: "Method or Text not found!",
    });
  }
});

//listen
const PORT = config.PORT || 5000;
app.listen(PORT, () => console.log("Server started at : 5000"));
