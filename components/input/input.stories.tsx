import React from 'react';
import { Meta } from '@storybook/react';

import { Input } from './input';

export default {
	title: 'Input',
	component: Input,
	tags: ['autodocs'],
} as Meta;

export const Default = (props) => <Input {...props} />;
