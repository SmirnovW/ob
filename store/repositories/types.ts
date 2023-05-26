import { GitHubRepository } from 'store/types';
import { RequestStatus } from 'store/enums';

export type RepositoriesList = GitHubRepository[];

export interface RepositoriesStore {
	repositories: RepositoriesList;
	setRepositories: (repositories: RepositoriesList) => void;
	requestStatus: RequestStatus;
	setRequestStatus: (status: RequestStatus) => void;
}
