
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

exports.handler = async function(event, context) {
  const body = JSON.parse(event.body);
  const prompt = body.prompt || "";

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }]
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ answer: completion.data.choices[0].message.content })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to connect to ROMERO AI." })
    };
  }
};
