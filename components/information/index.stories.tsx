import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {SInformation} from "./index";

export default {
    title: 'Components/information',
    component: SInformation,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof SInformation>;

const Template:
    ComponentStory<typeof SInformation> = (args) =>
    <SInformation {...args} />

export const Default = Template.bind({});
Default.args = {
    title: "Product Manager",
    subtitle: "Sebnem Sokmen",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type "
};