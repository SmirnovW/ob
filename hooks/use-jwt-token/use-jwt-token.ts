import { useEffect, useState } from 'react';
import { fetchToken } from 'services/auth';

const TOKEN_KEY = 'github-jwt-token';

export const useJwtToken = (): string | null => {
	const [token, setToken] = useState<string | null>(null);

	useEffect(() => {
		const storedToken = localStorage.getItem(TOKEN_KEY);
		if (storedToken) {
			setToken(storedToken);
		} else {
			fetchToken()
				.then((response) => {
					return response.json();
				})
				.then((data) => {
					console.log('JWT', data);
					setToken(data.token);
					localStorage.setItem(TOKEN_KEY, data.token);
				})
				.catch((error) => {
					console.error('Failed to fetch JWT token:', error);
				});
		}
	}, [fetchToken]);

	return token;
};
