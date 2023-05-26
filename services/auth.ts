import { apiProvider } from 'services/provider';
import { API_URL, TOKEN_URL } from 'constants/api';

export const fetchToken = async (): Promise<Response> => {
	return await apiProvider(`${API_URL}${TOKEN_URL}`);
};
