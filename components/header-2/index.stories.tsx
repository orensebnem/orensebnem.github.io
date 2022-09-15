import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {SHeader2} from "./index";

export default {
    title: 'Components/header-2',
    component: SHeader2,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof SHeader2>;

const Template:
    ComponentStory<typeof SHeader2> = (args) =>
    <SHeader2 {...args} />

export const Default = Template.bind({});
Default.args = {
    sLogoData: {
        name: "Sebnem",
        surname: "Oren"
    },
    sMenusData: [{
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