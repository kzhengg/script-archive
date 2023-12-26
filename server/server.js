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
  } else {
    throw new Error(
      "http method not supported on this endpoint"
    );
  }
});

app.get('/api/snippets/:slug', async (req, res) => {
  await connect();

  const { slug } = req.params; // Get slug from URL parameters
  const snippet = await Snippet.findOne({ slug });

  if (snippet) {
    res.statusCode = 200;
    res.json(snippet.snippet);
  } else {
    res.statusCode = 404;
    res.json({ message: "Snippet not found" });
  }
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
