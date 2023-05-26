import React from 'react';
import Image from 'next/image';
import { Card } from 'components/card';
type Props = {
	src: string;
	alt: string;
	width: number;
	height: number;
};

/**
 * Avatar Component
 */
export const Avatar: React.FC<Props> = ({
	src,
	alt,
	width = 10,
	height = 10,
}) => {
	return (
		<Image
			className={`w-${width} h-${height} rounded-full mr-4`}
			width={width}
			height={height}
			src={src}
			alt={alt}
		/>
	);
};
