import React from 'react';
import { render, act } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

import { Autosuggestions } from './autosuggestions';
import { AUTOSUGGESTION_ITEM_TEST_ID } from './constants';

describe('<Autosuggestions />', () => {
	const user = userEvent.setup();
	const mockData = ['Search 1', 'Search 2', 'Search 3'];

	it('should render autosuggestions with correct data and call onClick handler', async () => {
		const onClickMock = jest.fn();
		render(<Autosuggestions data={mockData} onClick={onClickMock} />);

		const autosuggestions = screen.getByTestId(
			`${AUTOSUGGESTION_ITEM_TEST_ID}0`
		);
		await act(async () => await user.click(autosuggestions));

		expect(autosuggestions).toBeInTheDocument();
		expect(onClickMock).toHaveBeenCalledTimes(1);
		expect(onClickMock).toHaveBeenCalledWith('Search 1');
	});
});
