import { Meta, StoryFn } from "@storybook/react";
import Checkbox from "./Checkbox";

export default {
  title: "Checkbox",
  component: Checkbox,
  argTypes: {
    label: { control: "text" },
    checked: { control: "boolean" },
    onChange: { action: "changed" },
  },
} as Meta;


const Template: StoryFn = (args) => <Checkbox label={""} {...args} />;


export const Default = Template.bind({});
Default.args = {
  checked: false,
};
