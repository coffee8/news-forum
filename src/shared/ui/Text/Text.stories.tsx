import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Some title',
    text: 'Some long long text',
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Some title',
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'Some text',
};

export const Dark = Template.bind({});
Dark.args = {
    title: 'Some title',
    text: 'Some long long text',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'Some title',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'Some long long text',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
    theme: TextTheme.ERROR,
    title: 'Some title',
    text: 'Some long long text',
};

export const onlyTitleError = Template.bind({});
onlyTitleError.args = {
    theme: TextTheme.ERROR,
    title: 'Some title',
};

export const onlyTextError = Template.bind({});
onlyTextError.args = {
    theme: TextTheme.ERROR,
    text: 'Some long long text',
};

export const ErrorDark = Template.bind({});
ErrorDark.args = {
    theme: TextTheme.ERROR,
    title: 'Some title',
    text: 'Some long long text',
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];
export const onlyTitleErrorDark = Template.bind({});
onlyTitleErrorDark.args = {
    theme: TextTheme.ERROR,
    title: 'Some title',
};
onlyTitleErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextErrorDark = Template.bind({});
onlyTextErrorDark.args = {
    theme: TextTheme.ERROR,
    text: 'Some long long text',
};
onlyTextErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeS = Template.bind({});
SizeS.args = {
    title: 'Some title',
    text: 'Some long long text',
    size: TextSize.S,
};

export const SizeM = Template.bind({});
SizeM.args = {
    title: 'Some title',
    text: 'Some long long text',
    size: TextSize.M,
};

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Some title',
    text: 'Some long long text',
    size: TextSize.L,
};
