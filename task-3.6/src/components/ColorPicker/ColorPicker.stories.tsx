import { useState } from "react";
import { StoryFn } from "@storybook/react";
import ColorPicker from "./ColorPicker";

export default {
  title: "ColorPicker",
  component: ColorPicker,
};

const Template: StoryFn = (args:any) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleSelectColor = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <div>
      <ColorPicker {...args} onSelectColor={handleSelectColor} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  colors: [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#FF33A8",
    "#8A33FF",
    "#FF8C33",
    "#33FF8C",
    "#FF33FF",
    "#33A8FF",
  ],
};
