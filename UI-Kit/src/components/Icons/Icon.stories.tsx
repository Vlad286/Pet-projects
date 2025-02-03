import { Meta, StoryFn } from "@storybook/react";
import IconImage from "./IconImage";
import { iconList } from "./IconListImage"

export default {
  title: "Icons",
  component: IconImage,
} as Meta;

const AllIconsTemplate: StoryFn = () => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
    {iconList.map((icon, index) => (
      <div key={index}>
        <IconImage src={icon.src} alt={icon.alt} />
      </div>
    ))}
  </div>
);

export const AllIcons = AllIconsTemplate.bind({});
