import type { HTMLAttributes } from 'react';
import React, { forwardRef } from 'react';
import cl from 'clsx';

import { RovingTabindexItem } from '../../../utilities/RovingTabIndex';

import classes from './Tab.module.css';
import { useTabItem } from './useTab';

export type TabProps = {
  /** Value that will be set in the `Tabs` components state when the tab is activated*/
  value: string;
} & Omit<HTMLAttributes<HTMLButtonElement>, 'value'>;

export const Tab = forwardRef<HTMLButtonElement, TabProps>((props, ref) => {
  const { children, className, ...rest } = props;
  const { active, size = 'medium', ...useTabRest } = useTabItem(props);

  return (
    <RovingTabindexItem
      {...useTabRest}
      as={'button'}
      className={cl(
        classes.tabItem,
        classes[size],
        active && classes.isActive,
        className,
      )}
      ref={ref}
      {...rest}
    >
      {children}
    </RovingTabindexItem>
  );
});
