# Ollama local API frontend chatbot demo

The goal of this project is to demonstrate how to use the Ollama local API to create a simple frontend application. The frontend application is a simple web page that allows the user to input a text and get a chatbot response.

All prompts are single shot, the goal of this is not to be a functional chatbot, it's above all a simple demo.

You must have Ollama running locally to use this project. You can find the instructions to run Ollama in the https://github.com/ollama/ollama repository. To test this, `sudo systemctl status ollama` should show `active (running)`.

To test querying your local ollama directly, you can use curl:

```bash
curl -vvvv localhost:11434/api/generate \
    -d '{"model": "llama3.2","prompt":"Give a short answer to what is #ffeeee"}'
```

## How to run the project

1. `bun i && bun start` or `npm i && npm start`
2. Open your browser and go to `http://localhost:3000`
