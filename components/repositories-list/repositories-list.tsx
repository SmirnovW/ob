import React, { useMemo } from 'react';

import { RequestStatus } from 'store/enums';
import { CardPlaceholder } from 'components/card';
import { RepositoryCard } from 'components/repository-card/repository-card';
import { useStore } from 'store';
import { ErrorMessage } from 'components/error-message/error-message';
import { useTranslate } from 'hooks/use-translate';

export const REPOSITORY_CARD_ITEM_TEST_ID = 'repository-card-item';
export const REPOSITORY_CARD_PLACEHOLDER_TEST_ID =
	'repository-card-placeholder';

/**
 * RepositoriesList Component
 */
export const RepositoriesList: React.FC = () => {
	const { repositories, requestStatus } = useStore();
	const translate = useTranslate();

	const placeholders = useMemo(() => new Array(12).fill(1), []);

	return (
		<>
			{requestStatus === RequestStatus.REJECTED && (
				<div className="mt-4">
					<ErrorMessage message={translate('oops')} />
				</div>
			)}
			<div className="w-full flex justify-between flex-wrap">
				{requestStatus === RequestStatus.PENDING &&
					placeholders.map((value, index) => (
						<div
							key={index}
							className="sm:w-full md:w-2/6 my-2 px-2"
							data-testid={REPOSITORY_CARD_PLACEHOLDER_TEST_ID}
						>
							<CardPlaceholder />
						</div>
					))}

				{requestStatus === RequestStatus.FULFILLED &&
					repositories.map((repository) => (
						<div
							key={repository.id}
							className="sm:w-full md:w-2/6 my-2 px-2"
							data-testid={REPOSITORY_CARD_ITEM_TEST_ID}
						>
							<RepositoryCard repository={repository} />
						</div>
					))}
			</div>
		</>
	);
};
