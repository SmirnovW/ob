import React from 'react';
import { render, act } from '@testing-library/react';
import { screen, waitFor } from '@testing-library/dom';
import { Search } from './search';
import { SEARCH_INPUT_TEST_ID } from './constants';
import { useStore } from 'store';
import { RequestStatus } from 'store/enums';
import userEvent from '@testing-library/user-event';

jest.mock('services/github', () => ({
	fetchRepositories: jest.fn().mockResolvedValue([]),
}));

describe('<Search />', () => {
	const user = userEvent.setup();

	const state = useStore.getState();

	const setRequestStatusSpy = jest.spyOn(state, 'setRequestStatus');
	const setRepositoriesSpy = jest.spyOn(state, 'setRepositories');

	it('should render the search component', () => {
		render(<Search />);
		const inputElement = screen.getByTestId(
			SEARCH_INPUT_TEST_ID
		) as HTMLInputElement;
		expect(inputElement).toBeInTheDocument();
	});

	it('should call search function on pressing Enter', async () => {
		render(<Search />);
		const inputElement = screen.getByTestId(
			SEARCH_INPUT_TEST_ID
		) as HTMLInputElement;

		await act(async () => await user.type(inputElement, 'test'));
		await act(async () => await user.keyboard('[Enter]'));

		await waitFor(() => {
			const state = useStore.getState();

			expect(state.searchHistory).toContain('test');
			expect(setRequestStatusSpy).toHaveBeenCalledWith(
				RequestStatus.PENDING
			);
			expect(setRepositoriesSpy).toHaveBeenCalled();
			expect(setRequestStatusSpy).toHaveBeenCalledWith(
				RequestStatus.FULFILLED
			);
		});
	});

	it('should show autosuggestions on input click', async () => {
		useStore.setState({
			searchHistory: ['search'],
		});

		render(<Search />);
		const inputElement = screen.getByTestId(
			SEARCH_INPUT_TEST_ID
		) as HTMLInputElement;

		await act(async () => await user.click(inputElement));

		await waitFor(() => {
			expect(screen.getByText('search')).toBeInTheDocument();
		});
	});

	it('should call search function on autosuggestion click', async () => {
		useStore.setState({
			searchHistory: ['search'],
		});
		render(<Search />);
		const inputElement = screen.getByTestId(
			SEARCH_INPUT_TEST_ID
		) as HTMLInputElement;

		await act(async () => await user.click(inputElement));
		const searchItem = screen.getByText('search');
		await act(async () => await user.click(searchItem));

		await waitFor(() => {
			const state = useStore.getState();
			expect(state.searchHistory).toContain('search');
			expect(setRequestStatusSpy).toHaveBeenCalledWith(
				RequestStatus.PENDING
			);
			expect(setRepositoriesSpy).toHaveBeenCalled();
			expect(setRequestStatusSpy).toHaveBeenCalledWith(
				RequestStatus.FULFILLED
			);
		});
	});
});
