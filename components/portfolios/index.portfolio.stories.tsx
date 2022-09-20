import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {SPortfolio} from "./index.portfolio";

export default {
    title: 'Components/portfolio',
    component: SPortfolio,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof SPortfolio>;

const Template:
    ComponentStory<typeof SPortfolio> = (args) =>
    <SPortfolio {...args}/>

export const Default = Template.bind({});

Default.args = {
    title: "Boost your conversion rate",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
    headerImageSrc: '/images/portfolios/scootie-mobile-app/scootie-mobile-app.png',
    badgesProps: {
        data: ["badge-1", "badge-2", "badge-3"]
    }
};