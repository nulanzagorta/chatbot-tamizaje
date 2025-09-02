// api/assistant.js
export default async function handler(req, res) {
  const response = await fetch(`https://api.openai.com/v1${req.url.replace('/api','')}`, {
    method: req.method,
    headers: {
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
      "OpenAI-Beta": "assistants=v2"
    },
    body: req.method !== "GET" ? JSON.stringify(req.body) : undefined
  });

  const data = await response.text();
  res.status(response.status).send(data);
}
