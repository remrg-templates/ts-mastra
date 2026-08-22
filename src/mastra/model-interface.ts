import { MastraModelConfig } from '@mastra/core/llm';

export interface ModelType {
	sm: MastraModelConfig;
	md: MastraModelConfig;
	lg: MastraModelConfig;
}

export interface Models {
	text: ModelType;
	code: ModelType;
	chat: ModelType;
	embedding: ModelType;
	image: ModelType;
	vision: ModelType;
	multimodal: ModelType;
	reasoning: ModelType;
}
