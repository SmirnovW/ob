import React, {
	forwardRef,
	LegacyRef,
	MutableRefObject,
	useEffect,
} from 'react';
import { Icon } from 'components/icon';
import { AUTOSUGGESTION_ITEM_TEST_ID } from './constants';

type Props = {
	data: string[];
	onClick: (item: string) => void;
	ref?:
		| MutableRefObject<HTMLElement | HTMLDivElement>
		| LegacyRef<HTMLDivElement>;
};

export const Autosuggestions = forwardRef<HTMLDivElement, Props>(
	({ data, onClick }, ref) => {
		useEffect(() => {}, []);

		const handleClick = (event: React.MouseEvent<HTMLElement>) => {
			onClick((event.currentTarget.dataset as { value: string }).value);
		};

		return (
			<div className="w-full bg-white rounded shadow-lg py-2" ref={ref}>
				<div className="mt-2">
					<ul className="space-y-2">
						{data.map((item, index) => (
							<li
								key={index}
								className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
								tabIndex={0}
								data-value={item}
								onClick={handleClick}
								data-testid={`${AUTOSUGGESTION_ITEM_TEST_ID}${index}`}
							>
								<span className="text-gray-500">
									<Icon name="Time" />
								</span>
								<span>{item}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		);
	}
);

Autosuggestions.displayName = 'Autosuggestions';
