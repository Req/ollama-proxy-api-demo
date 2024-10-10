import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { processQuery } from './processQuery.js';

const app = express();
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/prompt', (req, res) => {
    const { prompt } = req.body;
    const urlToLocalOllama = 'http://localhost:11434/api/generate';
    processQuery(urlToLocalOllama, prompt)
        .then(message => res.json({ message }))
        .catch(error => res.status(500).json({ message: "Malfunction! " + error.message }));
});

app.use((req, res) => {
    res.sendStatus(404);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});