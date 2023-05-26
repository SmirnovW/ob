import React from 'react';

import { Search } from 'components/search';
import { useJwtToken } from 'hooks/use-jwt-token/use-jwt-token';

import { RepositoriesList } from 'components/repositories-list';

export default function Home() {
	useJwtToken();

	return (
		<>
			<Search />
			<RepositoriesList />
		</>
	);
}
