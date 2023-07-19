import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ScrollSave } from './ScrollSave';

export default {
    title: 'shared/ScrollSave',
    component: ScrollSave,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ScrollSave>;

const Template: ComponentStory<typeof ScrollSave> = (args) => <ScrollSave {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
