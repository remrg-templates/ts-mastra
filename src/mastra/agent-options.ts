import { AgentConfig } from '@mastra/core/agent';
import { MemoryConfig } from '@mastra/core/memory';
import { models } from './models';

export const defaultAgentOptions: AgentConfig['defaultOptions'] = {
	maxSteps: 100,
	autoResumeSuspendedTools: true,
};

export const defaultAgentMemoryOptions: MemoryConfig = {
	generateTitle: true,
	observationalMemory: {
		model: models.chat.md,
	},
};
