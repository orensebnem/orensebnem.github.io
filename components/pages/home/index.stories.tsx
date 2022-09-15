import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {HomePage} from "./index";

export default {
    title: 'Pages/home',
    component: HomePage,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof HomePage>;

const Template:
    ComponentStory<typeof HomePage> = (args) =>
        <HomePage/>

export const Default = Template.bind({});
Default.args = {
};