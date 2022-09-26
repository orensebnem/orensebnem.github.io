import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {SPortfolios} from "./index";

export default {
    title: 'Components/portfolios',
    component: SPortfolios,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof SPortfolios>;

const Template:
    ComponentStory<typeof SPortfolios> = (args) =>
    <SPortfolios {...args}/>

export const Default = Template.bind({});

Default.args = {
    data: [{
        title: "Scootie Mobile Application",
        description: "In two years Ooup will be the most preferred and convenient transportation method in Europe",
        headerAnimation: require("../../public/images/portfolios/scootie-mobile-app/header.json"),
        badgesProps: {
            data: ["badge-1", "badge-2", "badge-3"]
        }
    },
        {
            title: "Boost your conversion rate",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
            headerAnimation: require("../../public/images/portfolios/scootie-mobile-app/header.json"),
            badgesProps: {
                data: ["badge-1"]
            }
        },
        {
            title: "Boost your conversion rate",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
            headerAnimation: require("../../public/images/portfolios/scootie-mobile-app/header.json"),
            badgesProps: {
                data: ["badge-1", "badge-2"]
            }
        },
        {
            title: "Boost your conversion rate",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
            headerAnimation: require("../../public/images/portfolios/scootie-mobile-app/header.json"),
            badgesProps: {
                data: ["badge-1", "badge-2", "badge-3"]
            }
        }]
};