import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {SMenus} from "./index";
import {SMenuProps} from "./index.menu";

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
const sMenuSelected = "about me";

Default.args = {
    data: [
        {
            label: "about me",
            selected: sMenuSelected === "about me",
            href: "about",
            hasPageTitle: false,
        },
        {
            label: "resume",
            href: "resume",
            hasPageTitle: true,
        }, {
            label: "portfolio",
            href: "portfolios",
            hasPageTitle: true,
        }, {
            label: "blog",
            href: "blog",
            hasPageTitle: true,
        }, {
            label: "contact",
            href: "contact",
            hasPageTitle: false,
        }] as SMenuProps[]
};