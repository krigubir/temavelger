import type { Meta, StoryFn } from '@storybook/react';

import { Box } from './Box';

type Story = StoryFn<typeof Box>;

const meta: Meta<typeof Box> = {
  title: 'Primitives/Box',
  component: Box,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

export const Preview: Story = (args) => <Box {...args}>Box!</Box>;

Preview.args = {
  children: 'Box!',
  background: 'default',
};

export const Polymorphic: Story = (args) => (
  <>
    <Box
      {...args}
      as='button'
      borderRadius='medium'
      borderColor='subtle'
    >
      button
    </Box>
    <Box
      {...args}
      asChild
      borderRadius='medium'
      borderColor='subtle'
    >
      <a
        href='https://designsystemet.no'
        target='_blank'
        rel='noreferrer'
      >
        link
      </a>
    </Box>
  </>
);
