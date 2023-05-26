import React from 'react';

/**
 * Placeholder Component
 */
export const Placeholder: React.FC = () => {
	return (
		<div className="bg-white rounded overflow-hidden shadow-lg animate-pulse">
			<div className="px-6 py-4">
				<div className="flex flex-col items-start">
					<div className="w-10 h-10 bg-gray-300 rounded-full mr-4" />
					<div className="w-28 h-6 bg-gray-300 rounded mt-2" />
				</div>
				<div className="mt-4">
					<div className="flex items-center text-gray-600">
						<div className="w-4 h-4 bg-gray-300 rounded-full mr-1" />
						<div className="w-10 h-4 bg-gray-300 rounded" />
					</div>
					<div className="flex items-center text-gray-600">
						<div className="w-4 h-4 bg-gray-300 rounded-full mr-1" />
						<div className="w-10 h-4 bg-gray-300 rounded mt-1" />
					</div>
				</div>
			</div>
		</div>
	);
};
