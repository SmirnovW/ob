import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';

type Props = {
	onClick?(event: React.MouseEvent<HTMLButtonElement>): void;
	fill?: boolean;
	type?: 'submit' | 'reset' | 'button';
	className?: string;
	value?: string;
	disabled?: boolean;
};

/**
 * Button Component
 */
export const Button: React.FC<PropsWithChildren<Props>> = ({
	children,
	onClick,
	type = 'button',
	className = '',
	value = '',
	disabled = false,
}) => {
	return (
		<button
			disabled={disabled}
			onClick={onClick}
			className={classNames(
				'bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded',
				className,
				{
					'disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200':
						disabled,
				}
			)}
			type={type}
			value={value}
		>
			{children}
		</button>
	);
};
