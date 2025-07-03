import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {SPersonnel} from "./index";

export default {
    title: 'Components/personnel',
    component: SPersonnel,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof SPersonnel>;

const Template:
    ComponentStory<typeof SPersonnel> = (args) =>
    <SPersonnel {...args} />

export const Default = Template.bind({});
Default.args = {
    avatarProps: {
        imageName: "sebnem-2.png"
    },
    informationProps: {
        title: "Product manager",
        subtitle: "Hi, I'm Sebnem",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type "
    }
};