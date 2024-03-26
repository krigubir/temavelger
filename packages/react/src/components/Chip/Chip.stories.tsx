import type { Meta, StoryObj } from '@storybook/react';

import { Chip } from '.';

type Story = StoryObj<typeof Chip.Toggle>;

export default {
  title: 'Komponenter/Chip',
  component: Chip.Toggle,
} as Meta;

export const Preview: Story = {
  args: {
    children: 'Nynorsk',
    size: 'medium',
    selected: false,
    checkmark: false,
  },
};
