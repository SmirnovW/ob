import React, {
	HTMLAttributes,
	PropsWithChildren,
	PropsWithoutRef,
	RefAttributes,
} from 'react';
import classNames from 'classnames';
import { Divider } from 'components/divider';

interface HeaderPropsType {
	divider?: boolean;
}

interface Props extends HTMLAttributes<HTMLDivElement> {
	className?: string;
}

const CardHeader: React.FC<PropsWithChildren<HeaderPropsType>> = ({
	children,
	divider,
}) => {
	return (
		<>
			<div className="flex items-center">
				<div className="text-xl font-medium text-gray-800">
					{children}
				</div>
			</div>
			{divider && <Divider />}
		</>
	);
};

const CardBody: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<div>{children}</div>
		</>
	);
};

/**
 * Card Component
 */
export const Card = React.forwardRef<HTMLDivElement, PropsWithChildren<Props>>(
	({ children, className = '', ...restProps }, ref) => {
		const finalClassName = classNames(
			'my-4 bg-white rounded shadow-lg',
			className
		);

		return (
			<div {...restProps} className={finalClassName}>
				<div className="px-6 py-4">{children}</div>
			</div>
		);
	}
) as CardComponent<HTMLDivElement, Props>;

type CardComponent<T, P = {}> = React.ForwardRefExoticComponent<
	PropsWithoutRef<P> & RefAttributes<T>
> & {
	Header: typeof CardHeader;
	Body: typeof CardBody;
};

Card.Header = CardHeader;
Card.Body = CardBody;

Card.displayName = 'Card';
