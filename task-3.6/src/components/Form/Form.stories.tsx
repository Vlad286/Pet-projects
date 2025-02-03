import { Meta, StoryFn } from "@storybook/react";
import Form from "./Form";

export default {
  title: "Form",
  component: Form,
} as Meta;

const Template: StoryFn = () => <Form />;

export const DefaultForm = Template.bind({});
