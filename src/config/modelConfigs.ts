export const modelConfigs = [
  {
    model: "doubao-seed-1-6-250615",
    apiKey: import.meta.env.ARK_API_KEY || "",
    baseURL: "https://ark.cn-beijing.volces.com/api/v3/chat/completions",
  },
  {
    model: "glm-4-0520",
    apiKey: import.meta.env.ZHIPU_API_KEY || "",
    baseURL: "https://open.bigmodel.cn/api/paas/v4/chat/completions",
  },
  {
    model: "qwen-plus",
    apiKey: import.meta.env.DASHSCOPE_API_KEY || "",
    baseURL: "https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions",
  },
];
