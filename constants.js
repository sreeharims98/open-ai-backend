const openAiApis = {
  SUMMARIZE_TEXT: {
    model: "text-davinci-003",
    prompt: "Summarize this for a second-grade student:",
    temperature: 0.7,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  },
  GRAMMER_CORRECTION: {
    model: "text-davinci-003",
    prompt: "Correct this to standard English:",
    temperature: 0,
    max_tokens: 60,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  },
  EXTRACT_KEYWORD: {
    model: "text-davinci-003",
    prompt: "Extract keywords from this text:",
    temperature: 0.5,
    max_tokens: 60,
    top_p: 1.0,
    frequency_penalty: 0.8,
    presence_penalty: 0.0,
  },
};
module.exports = openAiApis;
