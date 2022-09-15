import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {SMenus} from "./index";

export default {
    title: 'Components/menus',
    component: SMenus,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof SMenus>;

const Template:
    ComponentStory<typeof SMenus> = (args) =>
        <SMenus {...args} />

export const Default = Template.bind({});
Default.args = {
    data: [{
        label: "about me"
    }, {
        label: "resume"
    }, {
        label: "portfolio"
    }, {
        label: "blog"
    }, {
        label: "contact"
    }]
};