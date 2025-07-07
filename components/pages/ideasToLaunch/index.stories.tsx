import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {PortfoliosPage} from "./index";
import PortfolioModel from "../../../interfaces/PortfolioModel";

export default {
    title: 'Pages/portfolios',
    component: PortfoliosPage,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof PortfoliosPage>;

const Template:
    ComponentStory<typeof PortfoliosPage> = (args) =>
        <PortfoliosPage {...args}/>

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