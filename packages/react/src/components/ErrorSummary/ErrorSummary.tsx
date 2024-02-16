import type { HTMLAttributes } from 'react';
import { createContext, forwardRef, useId, useState } from 'react';
import cl from 'clsx';
import { Slot } from '@radix-ui/react-slot';

import type { ListProps } from '../List';
import { List } from '../List';

import classes from './ErrorSummary.module.css';

type ErrorSummaryContextType = {
  headingId?: string;
  setHeadingId: (id: string) => void;
};

export const ErrorSummaryContext = createContext<ErrorSummaryContextType>({
  headingId: 'heading',
  setHeadingId: () => {},
});

export type ErrorSummaryProps = {
  size?: ListProps['size'];
} & HTMLAttributes<HTMLDivElement>;

export const ErrorSummary = forwardRef<HTMLDivElement, ErrorSummaryProps>(
  (
    {
      size,
      role = 'alert',
      'aria-live': ariaLive = 'polite',
      'aria-relevant': ariaRelevant = 'all',
      children,
      ...rest
    },
    ref,
  ) => {
    const randomId = useId();
    const [headingId, setHeadingId] = useState<string>(randomId);

    return (
      <ErrorSummaryContext.Provider value={{ headingId, setHeadingId }}>
        <Slot
          className={cl(classes.errorSummary)}
          ref={ref}
          role={role}
          aria-live={ariaLive}
          aria-relevant={ariaRelevant}
          aria-labelledby={headingId}
          {...rest}
        >
          <List.Root size={size}>{children}</List.Root>
        </Slot>
      </ErrorSummaryContext.Provider>
    );
  },
);
