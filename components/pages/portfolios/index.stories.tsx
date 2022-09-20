import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {PortfoliosPage} from "./index";

export default {
    title: 'Pages/portfolios',
    component: PortfoliosPage,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof PortfoliosPage>;

const Template:
    ComponentStory<typeof PortfoliosPage> = (args) =>
        <PortfoliosPage/>

export const Default = Template.bind({});
Default.args = {
};