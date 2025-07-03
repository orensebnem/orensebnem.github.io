import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {SHeader2} from "./index";
import {SMenuProps} from "../menus/index.menu";

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
const sMenuSelected = "about me";

Default.args = {
    sLogoProps: {
        name: "Sebnem",
        surname: "Oren"
    },
    sMenusProps: {
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
    }
};