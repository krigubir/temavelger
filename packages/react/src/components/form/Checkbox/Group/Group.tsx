import type { ReactNode } from 'react';
import { useState, forwardRef, createContext } from 'react';

import type { FieldsetProps } from '../../Fieldset';
import { Fieldset } from '../../Fieldset';

export type CheckboxGroupContextProps = {
  value?: string[];
  defaultValue?: string[];
  toggleValue: (value: string) => void;
};

export const CheckboxGroupContext =
  createContext<CheckboxGroupContextProps | null>(null);

export type CheckboxGroupProps = {
  /** Collection of `Checkbox` components */
  children?: ReactNode;
  /** Controlled state for  `Checkbox`'s */
  value?: string[];
  /** Default checked `Checkbox`'s */
  defaultValue?: string[];
  /** Callback event with checked `Checkbox` values */
  onChange?: (value: string[]) => void;
} & Omit<FieldsetProps, 'onChange'>;

export const CheckboxGroup = forwardRef<
  HTMLFieldSetElement,
  CheckboxGroupProps
>(
  (
    {
      onChange,
      children,
      value,
      readOnly,
      defaultValue,
      size = 'medium',
      ...rest
    },
    ref,
  ) => {
    const [internalValue, setInternalValue] = useState<string[]>(
      defaultValue ?? [],
    );

    const toggleValue: CheckboxGroupContextProps['toggleValue'] = (
      checkboxValue,
    ) => {
      const currentValue = value ?? internalValue;
      const updatedValue = currentValue.includes(checkboxValue)
        ? currentValue.filter((x) => x !== checkboxValue)
        : [...currentValue, checkboxValue];

      if (typeof value !== 'undefined' || value !== null) {
        setInternalValue(updatedValue);
      }
      onChange?.(updatedValue);
    };

    return (
      <Fieldset
        readOnly={readOnly}
        size={size}
        ref={ref}
        {...rest}
      >
        <CheckboxGroupContext.Provider
          value={{
            value,
            defaultValue,
            toggleValue,
          }}
        >
          <div>{children}</div>
        </CheckboxGroupContext.Provider>
      </Fieldset>
    );
  },
);

CheckboxGroup.displayName = 'CheckboxGroup';
