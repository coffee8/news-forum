import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text } from 'shared/ui/Text/Text';
import { Card } from './Card';

export default {
    title: 'shared/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    children: <Text title="Storycase" text="Storycase text" />,
};

export const Dark = Template.bind({});
Dark.args = {
    children: <Text title="Storycase" text="Storycase text" />,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Peach = Template.bind({});
Peach.args = {
    children: <Text title="Storycase" text="Storycase text" />,
};
Peach.decorators = [ThemeDecorator(Theme.PEACH)];
