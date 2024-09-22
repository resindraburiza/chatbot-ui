import { OPENAI_API_TYPE } from '../utils/app/const';

export interface OpenAIModel {
  id: string;
  name: string;
  maxLength: number; // maximum length of a message
  tokenLimit: number;
}

export enum OpenAIModelID {
  GPT_4_TURBO = 'gpt-4-turbo-preview',
  GPT_4_TURBO_VISION = 'gpt-4-vision-preview',
  GPT_4_O = 'gpt-4o'
}

// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
export const fallbackModelID = OpenAIModelID.GPT_4_O;

export const OpenAIModels: Record<OpenAIModelID, OpenAIModel> = {
  [OpenAIModelID.GPT_4_TURBO]: {
    id: OpenAIModelID.GPT_4_TURBO,
    name: 'GPT-4-TURBO',
    maxLength: 384000,
    tokenLimit: 128000,
  },
  [OpenAIModelID.GPT_4_TURBO_VISION]: {
    id: OpenAIModelID.GPT_4_TURBO_VISION,
    name: 'GPT-4-TURBO-VISION',
    maxLength: 384000,
    tokenLimit: 128000,
  },
  [OpenAIModelID.GPT_4_O]: {
    id: OpenAIModelID.GPT_4_O,
    name: 'GPT-4-Omni',
    maxLength: 384000,
    tokenLimit: 128000,
  }
};
