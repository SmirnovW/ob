import React, { useMemo } from 'react';

import { Card } from 'components/card';
import { Avatar } from 'components/avatar';
import { GitHubRepository } from 'store/types';
import { Icon } from 'components/icon';
import { useTranslate } from 'hooks/use-translate';
import { REPOSITORY_CARD_CONTAINER_TEST_ID } from './constants';

type Props = {
	repository: GitHubRepository;
};

const POPULARITY_BAR = 500;

/**
 * RepositoryCard Component
 */
export const RepositoryCard: React.FC<Props> = ({ repository }) => {
	const translate = useTranslate();

	const score = useMemo(
		() => repository.stargazers_count + repository.forks * 2,
		[repository.forks, repository.stargazers_count]
	);

	return (
		<Card data-testid={REPOSITORY_CARD_CONTAINER_TEST_ID}>
			<Card.Header>
				<Avatar
					width={10}
					height={10}
					src={repository.owner.avatar_url}
					alt={repository.owner.login}
				/>
				<span className="block mt-2">{repository.name}</span>
			</Card.Header>
			<Card.Body>
				<div className="mt-4">
					<div className="flex items-center text-gray-600">
						<Icon name="Star" />
						<span className="font-semibold">
							{translate('stars')}: {repository.stargazers_count}
						</span>
					</div>
					<div className="flex items-center text-gray-600">
						<Icon name="Fork" />
						<span className="font-semibold">
							{translate('forks')}: {repository.forks}
						</span>
					</div>
					<div className="flex items-center text-gray-600">
						{translate('popularity')}:{' '}
						{score >= POPULARITY_BAR ? '🤩' : '😒'}
					</div>
				</div>
			</Card.Body>
		</Card>
	);
};
