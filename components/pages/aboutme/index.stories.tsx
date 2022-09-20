import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {AboutMePage} from "./index";

export default {
    title: 'Pages/about me',
    component: AboutMePage,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof AboutMePage>;

const Template:
    ComponentStory<typeof AboutMePage> = (args) =>
        <AboutMePage/>

export const Default = Template.bind({});
Default.args = {
};