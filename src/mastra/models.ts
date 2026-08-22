import type { Models } from './model-interface';
import { env } from '../env';

export const models: Models = {
	text: {
		// Fast, efficient general text operations
		sm: 'openai/gpt-4o-mini',
		// Balanced performance and quality for text generation
		md: 'openai/gpt-4o',
		// High-quality text generation for complex tasks
		lg: 'openai/gpt-4-turbo',
	},
	code: {
		// Efficient code generation and simple completions
		sm: 'openai/gpt-4o-mini',
		// Balanced code quality and generation speed
		md: 'openai/gpt-4o',
		// Enterprise-grade code solutions and analysis
		lg: 'openai/gpt-4-turbo',
	},
	chat: {
		// Fast, efficient dialogue handling
		sm: 'openai/gpt-4o-mini',
		// Balanced conversation quality
		md: 'openai/gpt-4o',
		// Complex multi-turn dialogues and sophisticated conversations
		lg: 'openai/gpt-4-turbo',
	},
	embedding: {
		// Efficient vector operations and semantic search
		sm: 'openai/text-embedding-3-small',
		// High-quality semantic search and vector representations
		md: 'openai/text-embedding-3-large',
		// Enterprise-grade vector embeddings
		lg: 'openai/text-embedding-3-large',
	},
	image: {
		// Efficient local image generation
		sm: { id: 'local/stable-diffusion-sm', url: env.LOCAL_STABLEDIFFUSION_URL },
		// Balanced quality local image generation
		md: { id: 'local/stable-diffusion', url: env.LOCAL_STABLEDIFFUSION_URL },
		// Premium local image generation
		lg: { id: 'local/stable-diffusion-xl', url: env.LOCAL_STABLEDIFFUSION_URL },
	},
	vision: {
		// Fast, efficient image understanding
		sm: 'openai/gpt-4o-mini',
		// Balanced image analysis and understanding
		md: 'openai/gpt-4o',
		// Advanced visual understanding and complex image analysis
		lg: 'openai/gpt-4-turbo',
	},
	multimodal: {
		// Fast, efficient multi-input handling
		sm: 'openai/gpt-4o-mini',
		// Balanced multi-type processing
		md: 'openai/gpt-4o',
		// Complex multi-modal AI tasks
		lg: 'openai/gpt-4-turbo',
	},
	reasoning: {
		// Efficient logical tasks and straightforward analysis
		sm: 'openai/gpt-4o',
		// Balanced complex analysis and reasoning
		md: 'openai/gpt-4-turbo',
		// Advanced multi-step reasoning and complex analysis
		lg: 'openai/gpt-4-turbo',
	},
} as const;
