import { Meta, StoryFn } from '@storybook/react';
import DatePicker from './DatePicker';

export default {
  title: 'DatePicker',
  component: DatePicker,
} as Meta;

const Template: StoryFn = () => <DatePicker />;

export const Default = Template.bind({});
