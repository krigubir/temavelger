import type { FieldsetHTMLAttributes, ReactNode } from 'react';
import { useContext, forwardRef, createContext } from 'react';
import cl from 'clsx';
import { PadlockLockedFillIcon } from '@navikt/aksel-icons';

import { Label, Paragraph, ErrorMessage } from '../../Typography';
import utilityclasses from '../../../utilities/utility.module.css';
import type { FormFieldProps } from '../useFormField';

import { useFieldset } from './useFieldset';
import classes from './Fieldset.module.css';

export type FieldsetContextType = Pick<
  FormFieldProps,
  'error' | 'errorId' | 'disabled' | 'readOnly' | 'size'
>;

export const FieldsetContext = createContext<FieldsetContextType | null>(null);

export type FieldsetProps = {
  /** A description of the fieldset. This will appear below the legend. */
  description?: ReactNode;
  /** Toggle `disabled` all input fields within the fieldset. */
  disabled?: boolean;
  /** If set, this will diplay an error message at the bottom of the fieldset. */
  error?: ReactNode;
  /** The legend of the fieldset. */
  legend: ReactNode;
  /** Toggle `readOnly` on fieldset context.
   * @note This does not prevent fieldset values from being submited */
  readOnly?: boolean;
  /** Visually hide `legend` and `description` (still available for screen readers)  */
  hideLegend?: boolean;
} & Pick<FormFieldProps, 'size'> &
  FieldsetHTMLAttributes<HTMLFieldSetElement>;

export const Fieldset = forwardRef<HTMLFieldSetElement, FieldsetProps>(
  (props, ref) => {
    const {
      children,
      legend,
      description,
      error,
      hideLegend,
      className,
      ...rest
    } = props;

    const { fieldsetProps, size, readOnly, errorId, hasError, descriptionId } =
      useFieldset(props);

    const fieldset = useContext(FieldsetContext);

    return (
      <FieldsetContext.Provider
        value={{
          error: error ?? fieldset?.error,
          errorId: hasError ? errorId : undefined,
          size,
          disabled: props?.disabled,
          readOnly,
        }}
      >
        <fieldset
          {...fieldsetProps}
          className={cl(
            classes.fieldset,
            !hideLegend && classes.spacing,
            readOnly && classes.readonly,
            props?.disabled && classes.disabled,
            className,
          )}
          ref={ref}
          {...rest}
        >
          <Label
            asChild
            size={size}
          >
            <legend
              className={cl(
                classes.legend,
                hideLegend && utilityclasses.visuallyHidden,
              )}
            >
              {readOnly && (
                <PadlockLockedFillIcon
                  className={classes.padlock}
                  aria-hidden
                />
              )}
              {legend}
            </legend>
          </Label>
          {description && (
            <Paragraph
              size={size}
              asChild
              short
            >
              <div
                id={descriptionId}
                className={cl(
                  classes.description,
                  hideLegend && utilityclasses.visuallyHidden,
                )}
              >
                {description}
              </div>
            </Paragraph>
          )}
          {children}
          <div
            id={errorId}
            aria-live='polite'
            aria-relevant='additions removals'
          >
            {hasError && <ErrorMessage size={size}>{error}</ErrorMessage>}
          </div>
        </fieldset>
      </FieldsetContext.Provider>
    );
  },
);

Fieldset.displayName = 'Fieldset';
