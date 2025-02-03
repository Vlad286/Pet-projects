import { useState } from "react";
import { StoryFn } from "@storybook/react";
import Toast from "./Toast";

export default {
  title: "Toast",
  component: Toast,
};

const Template: StoryFn =  (args:any) => {
  const [showToast, setShowToast] = useState<boolean>(true);

  const handleCloseToast = () => {
    setShowToast(false);
  };

  return (
    <div>
      {showToast && <Toast {...args} onClose={handleCloseToast} />}
    </div>
  );
};

export const Success = Template.bind({});
Success.args = {
  message: "Success! Your operation was completed.",
  type: "success",
  duration: 3000,
};

export const Error = Template.bind({});
Error.args = {
  message: "Error! Something went wrong.",
  type: "error",
  duration: 3000,
};

export const Info = Template.bind({});
Info.args = {
  message: "Info: You have new updates.",
  type: "info",
  duration: 3000,
};
