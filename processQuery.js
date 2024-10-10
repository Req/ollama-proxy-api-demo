// Documentation at https://github.com/ollama/ollama/blob/main/docs/api.md

export async function processQuery(url, prompt) {
    const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ model: "llama3.2", prompt: "Answer with a short message. " + prompt }),
    }
    const response = await fetch(url, config)

    if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    const data = [];
    while (true) {
        const { done, value } = await reader.read();
        if (done) {
            break;
        }

        const lines = decoder.decode(value, { stream: true }).split('\n');
        for (const line of lines) {
            if (line.trim()) {
                try {
                    const parsed = JSON.parse(line);
                    if (parsed.done) {
                        break
                    }
                    data.push(parsed.response);
                } catch (error) {
                    throw new Error(`Error parsing JSON: ${error.message}`);
                }
            }
        }
    }

    return data.join("");
}