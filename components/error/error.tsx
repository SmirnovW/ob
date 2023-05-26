import React from 'react';
import { useRouter } from 'next/router';
import { Card } from 'components/card';
import { Button } from 'components/button';
import { useTranslate } from 'hooks/use-translate';

import styles from './error.module.css';

/**
 * Error Component
 */
export const Error: React.FC = () => {
	const router = useRouter();
	const translate = useTranslate();

	const tryAgain = () => {
		router.reload();
	};

	return (
		<div className={styles.container}>
			<Card>
				<div className="flex align-center flex-col">
					<h2 className={styles.text}>{translate('oops')}</h2>
					<Button onClick={tryAgain}>{translate('try_again')}</Button>
				</div>
			</Card>
		</div>
	);
};
