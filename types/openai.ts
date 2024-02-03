import { OPENAI_API_TYPE } from '../utils/app/const';

export interface OpenAIModel {
  id: string;
  name: string;
  maxLength: number; // maximum length of a message
  tokenLimit: number;
}

export enum OpenAIModelID {
  GPT_3_5 = 'gpt-3.5-turbo',
  GPT_3_5_16K = 'gpt-3.5-turbo-1106',
  GPT_4_128K = 'gpt-4-1106-preview',
  GPT_4_LATEST = 'gpt-4-turbo-preview',
  GPT_4_VISION = 'gpt-4-vision-preview'
}

// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
export const fallbackModelID = OpenAIModelID.GPT_4_LATEST;

export const OpenAIModels: Record<OpenAIModelID, OpenAIModel> = {
  [OpenAIModelID.GPT_3_5]: {
    id: OpenAIModelID.GPT_3_5,
    name: 'GPT-3.5',
    maxLength: 12000,
    tokenLimit: 4000,
  },
  [OpenAIModelID.GPT_3_5_16K]: {
    id: OpenAIModelID.GPT_3_5_16K,
    name: 'GPT-3.5-16K',
    maxLength: 48000,
    tokenLimit: 16000,
  },
  [OpenAIModelID.GPT_4_128K]: {
    id: OpenAIModelID.GPT_4_128K,
    name: 'GPT_4_128K',
    maxLength: 384000,
    tokenLimit: 128000,
  },
  [OpenAIModelID.GPT_4_LATEST]: {
    id: OpenAIModelID.GPT_4_128K,
    name: 'GPT_4_LATEST',
    maxLength: 384000,
    tokenLimit: 128000,
  },
  [OpenAIModelID.GPT_4_VISION]: {
    id: OpenAIModelID.GPT_4_VISION,
    name: 'GPT_4_VISION',
    maxLength: 384000,
    tokenLimit: 128000,
  },
};
