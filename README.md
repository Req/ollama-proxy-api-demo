# Ollama local API frontend chatbot demo

This project demonstrates how to use the Ollama local API to create a simple frontend chat application. The frontend is one web page where the user inputs text and get a chatbot response.

All prompts are single shot, the goal of this is not to be a functional chatbot, it's above all a simple demo.

You must have Ollama running locally. You can find the instructions to install and run Ollama in the https://github.com/ollama/ollama repo: `sudo systemctl status ollama` should show `active (running)`.

To test querying your local ollama directly, you can use curl:

```bash
curl -vvvv localhost:11434/api/generate \
    -d '{"model": "llama3.2","prompt":"Give a short answer to what is #ffeeee"}'
```

## How to run the project

1. `bun i && bun start` or `npm i && npm start`
2. Open your browser and go to `http://localhost:3000`
