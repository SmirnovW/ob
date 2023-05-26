import React from 'react';
import { Meta } from '@storybook/react';

import { Button } from './button';

export default {
	title: 'Button',
	component: Button,
	tags: ['autodocs'],
} as Meta;

export const Default = (props) => <Button {...props}>Click me!</Button>;
