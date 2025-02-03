import { useState } from "react";
import { StoryFn } from "@storybook/react";
import Dropdown from "./Dropdown";
import DropdownProps from "./Dropdown";

export default {
  title: "Dropdown",
  component: Dropdown,
};

const Template: StoryFn<typeof DropdownProps> = (args: any) => {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const handleSelectDay = (day: string) => {
    setSelectedDay(day);
  };

  return (
    <div>
      <Dropdown {...args} onSelectDay={handleSelectDay} />
      {selectedDay && <p>Selected Day: {selectedDay}</p>}
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
};
