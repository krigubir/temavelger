import { useState } from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { MagnifyingGlassIcon } from '@navikt/aksel-icons';

import { Button, Paragraph, Heading } from '../..';

import { Search } from '.';

type Story = StoryObj<typeof Search>;

export default {
  title: 'Felles/Search',
  component: Search,
} as Meta;

export const Preview: Story = {
  args: {
    label: 'Label',
    disabled: false,
    size: 'medium',
    error: '',
    placeholder: '',
    variant: 'simple',
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Label',
  },
  parameters: {
    layout: 'padded',
  },
};

export const Controlled: StoryFn<typeof Search> = () => {
  const [value, setValue] = useState<string>();
  return (
    <>
      <Paragraph>Du har skrevet inn: {value}</Paragraph>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: 'var(--fds-spacing-2)',
          gap: 'var(--fds-spacing-2)',
        }}
      >
        <Search
          label='Kontroller meg!'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onClear={() => setValue('')}
        />
        <Button onClick={() => setValue('Pizza')}>Jeg vil ha Pizza</Button>
      </div>
    </>
  );
};

export const OnlyIcon: StoryFn<typeof Search> = () => {
  return (
    <Search
      label='Search after content'
      clearButtonLabel='Empty'
      searchButtonLabel={
        <MagnifyingGlassIcon
          fontSize={'1.5em'}
          title='Search'
        />
      }
      variant='primary'
    />
  );
};

export const Form: StoryFn<typeof Search> = () => {
  const [value, setValue] = useState<string>();
  const [submittedValue, setSubmittedValue] = useState<string>();

  return (
    <>
      <Heading
        level={3}
        size='xxsmall'
        spacing
      >
        Submitted value: {submittedValue}
      </Heading>
      <form
        onSubmit={(e) => {
          // Prevent navigation from Storybook
          e.preventDefault();
          setSubmittedValue(value);
        }}
      >
        <Search
          label='Search after content'
          clearButtonLabel='Empty'
          onChange={(e) => setValue(e.target.value)}
          searchButtonLabel={
            <MagnifyingGlassIcon
              fontSize={'1.5em'}
              title='Search'
            />
          }
          variant='primary'
        />
      </form>
    </>
  );
};
