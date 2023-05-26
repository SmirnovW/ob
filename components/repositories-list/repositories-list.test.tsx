import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { useStore } from 'store';
import { RequestStatus } from 'store/enums';
import { GitHubRepositoryMock } from 'mocks/api';
import {
	RepositoriesList,
	REPOSITORY_CARD_ITEM_TEST_ID,
	REPOSITORY_CARD_PLACEHOLDER_TEST_ID,
} from './repositories-list';
import { ApplicationStore } from 'store/types';

describe('<RepositoriesList />', () => {
	it('should render the list of repositories', () => {
		useStore.setState({
			repositories: [GitHubRepositoryMock, GitHubRepositoryMock],
			requestStatus: RequestStatus.FULFILLED,
		} as ApplicationStore);
		render(<RepositoriesList />);
		const repositoryCards = screen.getAllByTestId(
			REPOSITORY_CARD_ITEM_TEST_ID
		);
		expect(repositoryCards).toHaveLength(2);
	});

	it('should render placeholders when request status is pending', () => {
		useStore.setState({
			repositories: [],
			requestStatus: RequestStatus.PENDING,
		});

		render(<RepositoriesList />);
		const cardPlaceholders = screen.getAllByTestId(
			REPOSITORY_CARD_PLACEHOLDER_TEST_ID
		);
		expect(cardPlaceholders).toHaveLength(12);
	});
});
