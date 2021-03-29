import React from 'react';
import { Story, Meta } from '@storybook/react';

import Title, { TitleProps } from './Title.component';

export default {
  title: 'Typography/Title',
  component: Title,
} as Meta;

const Template: Story<TitleProps> = args => <Title {...args}>Heading</Title>;

export const Primary = Template.bind({});
Primary.args = {
  danger: false,
};

export const Danger = Template.bind({});
Danger.args = {
  danger: true,
};
