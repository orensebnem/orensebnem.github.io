import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {SLayout} from "./index";

export default {
    title: 'components/layout',
    component: SLayout,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof SLayout>;

const Template:
    ComponentStory<typeof SLayout> = (args) =>
        <SLayout {...args}>
            <div>Children</div>
        </SLayout>

export const Default = Template.bind({});
Default.args = {
    sMenuSelected: "about me",
}