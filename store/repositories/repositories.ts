import { StateCreator } from 'zustand';
import { RepositoriesStore } from 'store/repositories/types';
import { ApplicationStore } from 'store/types';
import { RequestStatus } from 'store/enums';

export const createRepositoriesStore: StateCreator<
	ApplicationStore,
	[],
	[],
	RepositoriesStore | null
> = (set): RepositoriesStore => ({
	repositories: [],
	setRepositories: (repositories) => set(() => ({ repositories })),
	requestStatus: RequestStatus.INITIAL,
	setRequestStatus: (requestStatus) => set(() => ({ requestStatus })),
});
