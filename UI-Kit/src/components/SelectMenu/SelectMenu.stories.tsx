import { Meta, StoryFn } from "@storybook/react";
import SelectMenu from "./SelectMenu";

export default {
  title: "SelectMenu",
  component: SelectMenu,
} as Meta;

const generateTimeOptions = () => {
  const times = [];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 15) {
      const value = `${hour.toString().padStart(2, "0")}:${minute
        .toString()
        .padStart(2, "0")}`;
      times.push({ value, label: value });
    }
  }
  return times;
};

const Template: StoryFn = (args) => (
  <SelectMenu options={[]} {...args} onChange={(value) => console.log(value)} />
);

export const TimePicker = Template.bind({});
TimePicker.args = {
  options: generateTimeOptions(),
  placeholder: "Выберите время",
};
