import type {Meta, StoryObj} from '@storybook/react';
import {Test} from "./Test.tsx";

const meta = {
  title: 'Figma/Test',
  component: Test,
  parameters: {
    layout: 'centered',
  },
  args: {
    onClick: () => alert('clicked'),
  }
} satisfies Meta<typeof Test>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Figma: Story = {
  args: {
    label: 'Figma button',
  },
  parameters: {
    design: {
      type: 'figma',
      url: "https://www.figma.com/file/Z9XLDkzRjG2vvnFAU4F4Hx/Untitled?node-id=108-4&t=OgI6RYzqPTB0CuAm-4",
    }
  }
};

export const Default: Story = {
  args: {
    label: 'Default button',
  },
};