import { modelConfigs } from '../../src/config/modelConfigs';

export async function handleChatRequest(model: string) {
  const config = modelConfigs.find(m => m.model === model);
  if (!config) {
    throw new Error(`模型 ${model} 未配置`);
  }

  // 这里是示例逻辑，请替换为你真实请求模型的代码
  const response = await fetch(`${config.baseURL}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${config.apiKey}`,
    },
    body: JSON.stringify({
      model: config.model,
      messages: [
        { role: 'user', content: '你好，介绍一下你自己。' }
      ],
    }),
  });

  const data = await response.json();
  return data;
}
