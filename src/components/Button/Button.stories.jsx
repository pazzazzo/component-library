import React from 'react';

import { Button } from './Button.jsx';

export default {
    title: 'Button',
    component: Button,
};

const Template = (args) => <Button {...args} />;

export const Enabled = Template.bind({});
Enabled.args = {
    disabled: false,
    children: 'Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
    children: 'Button',
};

export const Rounded = Template.bind({});
Rounded.args = {
    rounded: true,
    children: 'Button',
};

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    children: 'Button',
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    children: 'Button',
};
