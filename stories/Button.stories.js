import React from "react";
//import { ButtonComponent } from "../src/components/button/Button";
import { ButtonComponent } from "@/Components/button/Button";

export default {
  title: "Example/Button",
  component: ButtonComponent,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <ButtonComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
