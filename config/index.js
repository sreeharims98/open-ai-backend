require("dotenv").config();

const config = {
  PORT: process.env.PORT,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
};
module.exports = config;
