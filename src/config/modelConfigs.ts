// src/config/modelConfigs.ts

export const modelConfigs = [
  {
    model: "doubao-seed-1-6-250615",
    apiKey: process.env.ARK_API_KEY || "",
    baseURL: "https://ark.cn-beijing.volces.com/api/v3/chat/completions",
  },
  {
    model: "glm-4-0520",
    apiKey: process.env.ZHIPU_API_KEY || "",
    baseURL: "https://open.bigmodel.cn/api/paas/v4/chat/completions",
  },
  {
    model: "qwen-plus",
    apiKey: process.env.DASHSCOPE_API_KEY || "",
    baseURL: "https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions",
  },
];

export const generateAICharacters = () => [
  {
    id: "doubao_helper",
    name: "豆包助手",
    personality: "聪明可爱的 AI",
    model: "doubao-seed-1-6-250615",
    avatar: "/avatars/assistant.png",
    custom_prompt: "你是一个专业的中文问答助手，逻辑严谨，表达清晰。",
  },
  {
    id: "zhipu_helper",
    name: "智谱专家",
    personality: "知识渊博、反应敏捷",
    model: "glm-4-0520",
    avatar: "/avatars/expert.png",
    custom_prompt: "你是一位专业的通用知识专家，回答详尽且有条理。",
  },
  {
    id: "qwen_helper",
    name: "千问助手",
    personality: "稳重、可靠的技术助手",
    model: "qwen-plus",
    avatar: "/avatars/qwen.png",
    custom_prompt: "你是一个热心的技术 AI，擅长分析和解答问题。",
  },
];
