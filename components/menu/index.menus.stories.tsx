import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Menus from "./index.menus";

export default {
    title: 'components/menus',
    component: Menus,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof Menus>;

const Template: ComponentStory<typeof Menus> = (args) => <Menus {...args} />;

export const Default = Template.bind({});
Default.args = {
    user: {
        name: 'Jane Doe',
    },
};