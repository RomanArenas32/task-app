// src/components/Guides.stories.tsx

import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Guides } from './Guides';
import step1 from '../assets/paso1.png';
import step2 from '../assets/paso2.png';
import step3 from '../assets/paso3.png';
import step4 from '../assets/paso4.png';

// Define meta information for the story
export default {
  title: 'Pages/Guides',
  component: Guides,
} as Meta;

const Template: StoryFn = (args) => <Guides {...args} />;

export const Default = Template.bind({});

Default.args = {};
