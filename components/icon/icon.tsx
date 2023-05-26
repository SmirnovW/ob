import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import * as icons from './svg';
import styles from './icon.module.css';

type Props = {
	name: string;
	className?: string;
} & HTMLAttributes<any>;

/**
 * Icon component
 */
export const Icon: React.FC<Props> = ({
	name = '',
	className,
	...restProps
}) => {
	const IconComponent = icons[`${name}Icon`];

	if (typeof IconComponent === 'undefined') {
		console.error('Requested icon does not exist');
		return null;
	}

	const finalClassName = classNames(className, styles.container);

	return (
		<span {...restProps} className={finalClassName}>
			<IconComponent />
		</span>
	);
};
