import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {SPortfolios} from "./index";
import PortfolioModel from "../../interfaces/PortfolioModel";

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
    data: [
        {
            frontmatter: {
                title: "Scootie",
                description: "In two years Ooup will be the most preferred and convenient transportation method in Europe",
                headerAnimation: "scootie-mobile-app",
                tags: ["mobile"]
            }
        },
        {
            frontmatter: {
                title: "Playtime",
                description: "Help working parents work collaboratively to keep their children busy and happy with playgroup sessions during school holidays",
                headerAnimation: "playtime-mobile-app",
                tags: ["mobile"]
            }
        },
        {
            frontmatter: {
                title: "Linkedin Student",
                description: "The new graduates are pretty overwhelmed and frustrated with being inexperienced in job seeking.",
                headerAnimation: "linkedin-student-app",
                tags: ["mobile"]
            }
        }] as PortfolioModel[]
};