import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {SLogo} from "./index";

export default {
    title: 'Components/logo',
    component: SLogo,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof SLogo>;

const Template:
    ComponentStory<typeof SLogo> = (args) =>
        <SLogo {...args} />

export const Default = Template.bind({});
Default.args = {
    name: "Sebnem",
    surname: "Oren"
};