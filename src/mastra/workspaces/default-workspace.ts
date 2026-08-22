import {
	LocalFilesystem,
	LocalSandbox,
	WORKSPACE_TOOLS,
	Workspace,
} from '@mastra/core/workspace';

const workspacePath = 'workspace';

export const defaultWorkspace = new Workspace({
	id: 'default-workspace',
	name: 'Default Workspace',
	filesystem: new LocalFilesystem({
		basePath: workspacePath,
	}),
	sandbox: new LocalSandbox({
		workingDirectory: workspacePath,
	}),
	tools: {
		[WORKSPACE_TOOLS.FILESYSTEM.WRITE_FILE]: {
			requireReadBeforeWrite: true,
		},
		[WORKSPACE_TOOLS.FILESYSTEM.EDIT_FILE]: {
			requireReadBeforeWrite: true,
		},
		[WORKSPACE_TOOLS.FILESYSTEM.DELETE]: {
			requireApproval: true,
		},
	},
});
