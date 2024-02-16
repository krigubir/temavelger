import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';
import cl from 'clsx';
import { Slot } from '@radix-ui/react-slot';

import type { OverridableComponent } from '../../types/OverridableComponent';

import classes from './Link.module.css';

export type LinkProps = {
  /** The content to display inside the link. */
  children: ReactNode;

  /** Custom class name for the link. This will be appended to the design system class names. */
  className?: string;

  /** Inverts the color of the link. Use this on dark backgrounds. */
  inverted?: boolean;

  /** The URL that the link points to. This can also be an email address (starting with `mailto:`) or a phone number (staring with `tel:`). */
  href?: string;
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link: OverridableComponent<LinkProps, HTMLAnchorElement> =
  forwardRef(
    (
      { as = 'a', asChild, children, className, inverted = false, ...rest },
      ref,
    ) => {
      const Component = asChild ? Slot : as;

      return (
        <Component
          className={cl(classes.link, inverted && classes.inverted, className)}
          ref={ref}
          {...rest}
        >
          {children}
        </Component>
      );
    },
  );
