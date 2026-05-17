> From: https://claude.ai/chat/72aab10b-29bf-4176-a3c1-4ed24709f16a

# you asked

message time: 2026-05-17 00:40:19

I have an application with access to openrouter. There is a way to submit a prompt with a ask to the model to access the internet? It will work?

---

# claude response

Yes, OpenRouter supports this natively — and it works well. There are two approaches, with the newer one being recommended:

---

## Recommended: `openrouter:web_search` server tool

The `openrouter:web_search` server tool gives any model on OpenRouter access to real-time web information. When the model determines it needs current information, it calls the tool with a search query. OpenRouter executes the search and returns results that the model uses to formulate a grounded, cited response.

You add it to the `tools` array in your request:

```js
const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
  method: "POST",
  headers: {
    "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    model: "anthropic/claude-sonnet-4-5",
    tools: [
      { type: "openrouter:web_search" }
    ],
    messages: [
      { role: "user", content: "What are the latest news about Node.js?" }
    ]
  })
});
```

The model decides whether a web search is needed, generates a search query, OpenRouter executes it, and returns results (URLs, titles, and content snippets) which the model then synthesizes into a response. It may search multiple times in a single request if needed.

> ⚠️ Server tools require a model that supports tool calling. Most current models do.

---

## Alternative (deprecated but still works): `:online` suffix

The `:online` variant enables real-time web search capabilities for any model on OpenRouter. Just append it to the model slug:

```js
model: "anthropic/claude-haiku-4-5:online"
```

The `:online` variant and the web search plugin are deprecated — use the `openrouter:web_search` server tool instead.

---

## Pricing

Using web search incurs extra costs even with free models. Pricing is $4 per 1,000 web results. By default, max_results is set to 5, which comes out to a maximum of $0.02 per request, in addition to LLM token costs.

---

## Engine options

By default, OpenRouter uses native provider search when available or falls back to Exa. Each engine has different strengths — native search is tightly integrated with the provider's model, while Exa and Parallel add configurable result context size.

Since you're already using OpenRouter in **transrewrt**, you can add this to whichever provider/model you're routing to — it'll work across all of them.