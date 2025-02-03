import { Meta, StoryFn } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import Link from "./Link";

export default {
  title: "Link",
  component: Link,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  argTypes: {
    onClick: { action: "clicked" },
  },
} as Meta;

const Template: StoryFn = (args) => <Link to={""} label={""} {...args} />;

export const DefaultLink = Template.bind({});
DefaultLink.args = {
  to: "/path",
  label: "Link",
  isDisabled: false,
};



