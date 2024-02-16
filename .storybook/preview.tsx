import * as React from 'react';
import type { Preview } from '@storybook/react';
import cssVariablesTheme from '@etchteam/storybook-addon-css-variables-theme';

import '@digdir/design-system-tokens/brand/digdir/tokens.css';
import altinn from '!!style-loader?injectType=lazyStyleTag!css-loader!@digdir/design-system-tokens/brand/altinn/tokens.css';
import digdir from '!!style-loader?injectType=lazyStyleTag!css-loader!@digdir/design-system-tokens/brand/digdir/tokens.css';
import tilsynet from '!!style-loader?injectType=lazyStyleTag!css-loader!@digdir/design-system-tokens/brand/tilsynet/tokens.css';
import brreg from '!!style-loader?injectType=lazyStyleTag!css-loader!@digdir/design-system-tokens/brand/brreg/tokens.css';

import '@altinn/figma-design-tokens/dist/tokens.css';
import {
  Paragraph,
  Link,
  LinkProps,
  List,
  ListItem,
} from '@digdir/design-system-react';
import customTheme from './customTheme';
import metadata from '../design-tokens/$metadata.json';

type Viewport = {
  name: string;
  styles: {
    width: string;
    height: string;
  };
};

const viewports: Viewport[] = metadata.tokenSetOrder
  .filter((name) => name.toLowerCase().includes('viewport'))
  .map((name) => {
    const width = name.replace(/\D/g, '');

    return {
      name: `@${width}`,
      styles: {
        width: `${width}px`,
        height: '100%',
      },
    };
  });

type Props = Record<string, unknown>;

const getPath = (href: string | undefined): string => {
  if (!href) {
    return '';
  }

  // if link starts with /, add current path to link
  if (href.startsWith('/')) {
    const { origin = '' } = document?.location;

    return `${origin}/?path=${href}`;
  }

  return href;
};

const components = {
  p: Paragraph,
  ol: (props: Props) => (
    <List.Root>
      <List.Ordered
        {...props}
        style={{ maxWidth: '70ch' }}
        className='sb-unstyled'
      />
    </List.Root>
  ),
  ul: (props: Props) => (
    <List.Root>
      <List.Unordered
        {...props}
        style={{ maxWidth: '70ch' }}
        className='sb-unstyled'
      />
    </List.Root>
  ),
  li: (props: Props) => (
    <List.Item
      {...props}
      className='sb-unstyled'
      style={{ maxWidth: '70ch' }}
    ></List.Item>
  ),
  a: (props: LinkProps) => {
    // if link starts with /, add current path to link
    const href = getPath(props.href);

    return (
      <Link
        {...props}
        href={href}
      ></Link>
    );
  },
};

const preview: Preview = {
  decorators: [cssVariablesTheme],
  parameters: {
    cssVariables: {
      files: {
        Altinn: altinn,
        Digdir: digdir,
        Tilsynet: tilsynet,
        Brønnøysundregistrene: brreg,
      },
      defaultTheme: 'Digdir',
    },
    layout: 'centered',
    viewMode: 'docs',
    actions: { argTypesRegex: '^on[A-Z].*' },
    docs: {
      theme: customTheme,
      components,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          'Oversikt',
          'Endringslogger',
          'Felles',
          'Experimental',
          'Primitives',
          'Altinn',
          'Avviklet',
        ],
      },
    },
    viewport: {
      viewports,
    },
  },
};

export default preview;
