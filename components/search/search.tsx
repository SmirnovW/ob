import React, { ChangeEvent, useRef, useState } from 'react';
import { Input } from 'components/input';
import { Icon } from 'components/icon';
import { Autosuggestions } from 'components/autosuggestion';
import { useStore } from 'store';

import { useClickOutside } from 'hooks/use-click-outside';
import { RequestStatus } from 'store/enums';
import { fetchRepositories } from 'services/github';
import { useTranslate } from 'hooks/use-translate';

import { SEARCH_INPUT_TEST_ID } from './constants';

/**
 * Search Component
 */
export const Search: React.FC = () => {
	const translate = useTranslate();
	const { addSearchHistory, searchHistory, setRequestStatus } = useStore();
	const [repositoryName, setRepositoryName] = useState<string>('');
	const [isHistoryVisible, setHistoryVisible] = useState(false);

	const containerRef = useRef();

	useClickOutside(containerRef, () => {
		showHistory(false);
	});

	const { setRepositories } = useStore();

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		setRepositoryName(event.target.value);
	};

	const showHistory = (visibility = true) => {
		setHistoryVisible(visibility);
	};

	const onAutosuggestionClick = (item: string) => {
		setRepositoryName(item);
		showHistory(false);
		search(item);
	};

	const search = (name: string) => {
		if (!searchHistory.includes(name)) {
			addSearchHistory(name);
		}
		setRequestStatus(RequestStatus.PENDING);
		fetchRepositories(repositoryName).then((response) => {
			if (response?.error) {
				setRequestStatus(RequestStatus.REJECTED);
				console.error(response?.error);
			} else {
				setRepositories(response.data);
				setRequestStatus(RequestStatus.FULFILLED);
			}
		});
	};

	const onKeyPress = (event) => {
		if (event.key === 'Enter') {
			search(repositoryName);
			showHistory(false);
		}
	};

	return (
		<div className="relative" ref={containerRef}>
			<div className="block">
				<Input
					onClick={() => showHistory()}
					onKeyPress={onKeyPress}
					onChange={onChange}
					placeholder={translate('search')}
					value={repositoryName}
					data-testid={SEARCH_INPUT_TEST_ID}
					icon={
						<Icon
							onClick={() => search(repositoryName)}
							name="Search"
							className="cursor-pointer"
						/>
					}
				/>
			</div>
			<div className="absolute top-12 w-full z-10">
				{isHistoryVisible && searchHistory.length > 0 && (
					<Autosuggestions
						data={searchHistory}
						onClick={onAutosuggestionClick}
					/>
				)}
			</div>
		</div>
	);
};
