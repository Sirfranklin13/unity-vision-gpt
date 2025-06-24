exports.handler = async (event) => {
  const { question } = JSON.parse(event.body || '{}');
  if (!question) return { statusCode: 400, body: JSON.stringify({ error: 'No question provided' }) };
  return {
    statusCode: 200,
    body: JSON.stringify({ answer: "ROMERO says: " + question })
  };
};