import { useState } from "react";
import { Meta, StoryFn } from '@storybook/react';
import TextArea from "./TextArea";
import TextAreaProps from './TextArea'

export default {
  title: "TextArea",
  component: TextArea,
} as Meta;

const Template: StoryFn<typeof TextAreaProps> = (args: any) => {
  const [value, setValue] = useState(args.value || "");

  return (
    <TextArea
      {...args}
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
        args.onChange?.(newValue);
      }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: "Введите текст...",
  rows: 4,
  maxLength: 200,
};
