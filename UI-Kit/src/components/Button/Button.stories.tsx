import { Meta, StoryFn } from '@storybook/react';
import iconPath from '../../assets/icons/icons8-left-click-64.png'
import Button from "./Button"

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: StoryFn = (args) => <Button label={''} onClick={function (): void {
  throw new Error('Function not implemented.');
} } {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  variant: 'primary',
  onClick: () => console.log('Primary button clicked'),
  isDisabled: false
};

export const PrimaryWithIcon = Template.bind({});
PrimaryWithIcon.args = {
  label: 'Primary Button with Icon',
  variant: 'primary_with_icon',
  icon: iconPath,
  onClick: () => console.log('Primary button with icon clicked'),
  isDisabled: false
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  variant: 'secondary',
  onClick: () => console.log('Secondary button clicked'),
  isDisabled: false
};

export const SecondaryWithIcon = Template.bind({});
SecondaryWithIcon.args = {
  label: 'Secondary Button with Icon',
  variant: 'secondary_with_icon',
  icon: iconPath,
  onClick: () => console.log('Secondary button with icon clicked'),
  isDisabled: false
};
