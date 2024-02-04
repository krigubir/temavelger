import type { HTMLAttributes } from 'react';
import React, { forwardRef } from 'react';
import cl from 'clsx';
import { Slot } from '@radix-ui/react-slot';

import type { OverridableComponent } from '../../../types/OverridableComponent';

import classes from './Paragraph.module.css';

export type ParagraphProps = {
  /** Changes text sizing */
  size?: 'xsmall' | 'small' | 'medium' | 'large';
  /** Adds margin-bottom */
  spacing?: boolean;
  /** Reduces line-height for short paragraphs */
  short?: boolean;
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;
} & HTMLAttributes<HTMLParagraphElement>;

/** Use `Paragraph` to display text with paragraph text styles. */
export const Paragraph: OverridableComponent<
  ParagraphProps,
  HTMLParagraphElement
> = forwardRef(
  (
    { className, size = 'medium', spacing, as = 'p', asChild, short, ...rest },
    ref,
  ) => {
    const Component = asChild ? Slot : as;

    return (
      <Component
        ref={ref}
        className={cl(
          classes.paragraph,
          classes[size],
          {
            [classes.spacing]: !!spacing,
            [classes.short]: short,
          },
          className,
        )}
        {...rest}
      />
    );
  },
);
