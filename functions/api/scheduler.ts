import { modelConfigs } from '../../src/config/modelConfigs';

export function selectModelForTask(taskType: string) {
  if (taskType.includes('图像') || taskType.includes('图片')) {
    return modelConfigs.find(m => m.model.includes('doubao'));
  }

  if (taskType.includes('文案') || taskType.includes('slogan')) {
    return modelConfigs.find(m => m.model.includes('glm'));
  }

  if (taskType.includes('推理') || taskType.includes('代码')) {
    return modelConfigs.find(m => m.model.includes('qwen'));
  }

  return modelConfigs[0]; // 默认返回第一个
}
