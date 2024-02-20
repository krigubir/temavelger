import { forwardRef, useContext } from 'react';

import type { ButtonProps } from '../../Button';
import { Button } from '../../Button';
import type { OverridableComponent } from '../../../types/OverridableComponent';
import { DropdownMenuContext } from '../DropdownMenu';

import classes from './DropdownMenuItem.module.css';

export type DropdownMenuItemProps = Omit<
  ButtonProps,
  'variant' | 'size' | 'color' | 'fullWidth'
>;

export const DropdownMenuItem: OverridableComponent<
  DropdownMenuItemProps,
  HTMLButtonElement
> = forwardRef(({ children, className, style, ...rest }, ref) => {
  const menu = useContext(DropdownMenuContext);

  return (
    <li
      className={className}
      style={style}
    >
      <Button
        ref={ref}
        variant='tertiary'
        size={menu.size}
        fullWidth
        className={classes.item}
        role='menuitem'
        {...rest}
      >
        {children}
      </Button>
    </li>
  );
});

DropdownMenuItem.displayName = 'DropdownMenuItem';
