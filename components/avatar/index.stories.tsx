import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {SAvatar} from "./index";

export default {
    title: 'Components/avatar',
    component: SAvatar,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof SAvatar>;

const Template:
    ComponentStory<typeof SAvatar> = (args) =>
    <SAvatar />

export const Default = Template.bind({});
Default.args = {

};