import { API_URL, REPOSITORIES_URL } from 'constants/api';
import { apiProvider } from 'services/provider';
import { RepositoriesList } from 'store/repositories';

export async function fetchRepositories(
	repositoryName
): Promise<{ data?: RepositoriesList; error?: string }> {
	try {
		const response = await apiProvider(`${API_URL}${REPOSITORIES_URL}`, {
			q: repositoryName,
		});
		const data = await response.json();

		if (response.ok) {
			return { data: data.data.items };
		} else {
			return { error: data.data };
		}
	} catch (error) {
		console.error(error);
		return null;
	}
}
