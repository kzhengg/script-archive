import express from 'express';
import cors from 'cors'
import { connect } from "./db.js";
import { Snippet } from "./snippetmodel.js";
import * as randomstring from "randomstring";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors())

// Handle POST request on /api/snippets
app.post('/api/snippets', async (req, res) => {
  await connect();

  if (req.method === "POST") {

    const slug = randomstring.generate({
      length: 6,
      charset: "alphabetic",
    });
    const snippet = await Snippet.create({
      snippet: req.body.content,
      slug,
    });
    res.statusCode = 200;
    res.json(snippet);
  } else if (req.method == "GET") {
    const slug = req.query.slug;
    const snippet = await Snippet.findOne({
      slug,
    })
    res.statusCode = 200;
    res.json(snippet);
  }
  else {
    throw new Error(
      "http method not supported on this endpoint"
    );
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
