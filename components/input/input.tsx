import React, {
	ChangeEvent,
	forwardRef,
	InputHTMLAttributes,
	MutableRefObject,
	PropsWithoutRef,
	RefAttributes,
} from 'react';

type Props = {
	value: string | number;
	onChange?(event: ChangeEvent<HTMLInputElement>): void;
	ref?: MutableRefObject<null | HTMLInputElement>;
	placeholder?: string;
	type?: string;
	name?: string;
	icon?: React.ReactNode;
} & InputHTMLAttributes<any>;

/**
 * Input Component
 */
export const Input = forwardRef<HTMLInputElement, Props>(
	({
		value,
		onChange,
		icon,
		type = 'text',
		placeholder = '',
		name = '',
		...restProps
	}) => {
		return (
			<div className="relative">
				<input
					className="w-full py-2 pr-10 pl-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
					type="text"
					placeholder={placeholder}
					onChange={onChange}
					value={value}
					{...restProps}
				/>
				{icon && (
					<span className="absolute top-3 right-3 h-5 w-5 text-gray-400">
						{icon}
					</span>
				)}
			</div>
		);
	}
) as InputComponent<HTMLInputElement, Props>;

type InputComponent<T, P = {}> = React.ForwardRefExoticComponent<
	PropsWithoutRef<P> & RefAttributes<T>
>;

Input.displayName = 'Input';
