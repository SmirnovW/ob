import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { RepositoryCard } from './repository-card';
import { REPOSITORY_CARD_CONTAINER_TEST_ID } from './constants';
import { GitHubRepositoryMock } from 'mocks/api';

describe('<RepositoryCard />', () => {
	it('should render repository card with correct data', () => {
		render(<RepositoryCard repository={GitHubRepositoryMock} />);

		const container = screen.getByTestId(REPOSITORY_CARD_CONTAINER_TEST_ID);
		const name = screen.getByText(GitHubRepositoryMock.name);
		const stars = screen.getByText((content, element) =>
			content.includes('Stars')
		);
		const forks = screen.getByText((content, element) =>
			content.includes('Forks')
		);

		const popularity = screen.getByText((content, element) =>
			content.includes('Popularity')
		);

		expect(container).toBeInTheDocument();
		expect(name).toBeInTheDocument();
		expect(stars).toBeInTheDocument();
		expect(forks).toBeInTheDocument();
		expect(popularity).toBeInTheDocument();
	});
});
