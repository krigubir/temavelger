import type { HTMLAttributes } from 'react';
import { cloneElement, forwardRef, useState } from 'react';
import * as React from 'react';
import cl from 'clsx';
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  arrow,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  useTransitionStyles,
  useMergeRefs,
  FloatingArrow,
  FloatingPortal,
} from '@floating-ui/react';

import type { PortalProps } from '../../types/Portal';

import classes from './Tooltip.module.css';

const ARROW_HEIGHT = 7;
const ARROW_GAP = 4;

export type TooltipProps = {
  /**
   * The element that triggers the tooltip.
   * @note Needs to be a single ReactElement and not: <React.Fragment/> | <></>
   */
  children: React.ReactElement & React.RefAttributes<HTMLElement>;
  /** Content of the tooltip */
  content: string;
  /**
   * Placement of the tooltip on the trigger.
   * @default 'top'
   */
  placement?: 'top' | 'right' | 'bottom' | 'left';
  /** Delay in milliseconds before opening.
   * @default 150
   */
  delay?: number;
  /** Whether the tooltip is open or not.
   * This overrides the internal state of the tooltip.
   */
  open?: boolean;
  /** Whether the tooltip is open by default or not. */
  defaultOpen?: boolean;
  /** Inverts the color of the tooltip. Use this on dark backgrounds. */
  inverted?: boolean;
} & PortalProps &
  HTMLAttributes<HTMLDivElement>;

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      children,
      content,
      placement = 'top',
      delay = 150,
      open: userOpen,
      defaultOpen = false,
      portal,
      inverted,
      className,
      style,
      ...rest
    },
    ref,
  ) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    const Container = portal ? FloatingPortal : React.Fragment;

    const arrowRef = React.useRef<SVGSVGElement>(null);
    const internalOpen = userOpen ?? isOpen;

    const { refs, floatingStyles, context } = useFloating({
      open: internalOpen,
      onOpenChange: setIsOpen,
      placement,
      whileElementsMounted: autoUpdate,
      middleware: [
        offset(ARROW_HEIGHT + ARROW_GAP),
        flip({
          fallbackAxisSideDirection: 'start',
        }),
        shift(),
        arrow({
          element: arrowRef,
        }),
      ],
    });

    const { styles: animationStyles } = useTransitionStyles(context, {
      initial: {
        opacity: 0,
      },
    });

    const { getReferenceProps, getFloatingProps } = useInteractions([
      // Event listeners to change the open state
      useHover(context, { move: false, delay }),
      useFocus(context),
      useDismiss(context),
      useRole(context, { role: 'tooltip' }),
    ]);

    const mergedRef = useMergeRefs([ref, refs.setFloating]);

    const childMergedRef = useMergeRefs([
      (children as React.ReactElement & React.RefAttributes<HTMLElement>)
        .ref as React.MutableRefObject<HTMLElement>,
      refs.setReference,
    ]);

    if (
      !children ||
      children?.type === React.Fragment ||
      (children as unknown) === React.Fragment
    ) {
      console.error(
        '<Tooltip> children needs to be a single ReactElement and not: <React.Fragment/> | <></>',
      );
      return null;
    }

    return (
      <>
        {cloneElement(
          children,
          getReferenceProps({
            ref: childMergedRef,
          }),
        )}
        {internalOpen && (
          <FloatingPortal>
            <Container>
              <div
                ref={refs.setFloating}
                style={{ ...floatingStyles, ...animationStyles, ...style }}
                role='tooltip'
                {...getFloatingProps({
                  className: cl(
                    classes.wrapper,
                    inverted && classes.inverted,
                    className,
                  ),
                  ref: mergedRef,
                  ...rest,
                })}
              >
                {content}
                <FloatingArrow
                  ref={arrowRef}
                  context={context}
                  className={classes.arrow}
                  height={ARROW_HEIGHT}
                />
              </div>
            </Container>
          </FloatingPortal>
        )}
      </>
    );
  },
);
