/** Normalized shape for LLM API responses used in AppContext and cost logging. */
export type LlmCallResult = {
  content?: string;
  usage?: {
    prompt_tokens?: number;
    completion_tokens?: number;
    cost?: number;
  };
  model?: string;
  model_used?: string;
  cancelled?: boolean;
  request_bytes?: number;
  response_bytes?: number;
  duration_ms?: number;
  calculated_cost?: number;
  total_cost?: number;
  error?: string;
};
