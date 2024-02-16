import { useMemo } from 'react';
import * as React from 'react';

import type { ComboboxOptionProps } from './Option/Option';
import { ComboboxOption } from './Option/Option';
import type { ComboboxProps } from './Combobox';

export type UseComboboxProps = {
  children: React.ReactNode;
  inputValue: string;
  multiple: boolean;
  selectedOptions: Option[];
  filter: NonNullable<ComboboxProps['filter']>;
};

export type Option = {
  value: string;
  label: string;
  displayValue?: string;
  description?: string;
};

export default function useCombobox({
  children,
  inputValue,
  multiple,
  filter,
}: UseComboboxProps) {
  const options = useMemo(() => {
    const allOptions: Option[] = [];
    React.Children.forEach(children, (child) => {
      if (isComboboxOption(child)) {
        const props = child.props;
        let label = props.displayValue || '';

        if (!props.displayValue) {
          let childrenLabel = '';

          // go over children and find all strings
          React.Children.forEach(props.children, (child) => {
            if (typeof child === 'string') {
              childrenLabel += child;
            } else {
              throw new Error(
                'If ComboboxOption is not a string, it must have a displayValue prop',
              );
            }
          });

          label = childrenLabel;
        }

        allOptions.push({
          value: props.value,
          label,
          displayValue: props.displayValue,
          description: props.description,
        });
      }
    });
    return allOptions;
  }, [children]);

  const optionsChildren = useMemo(() => {
    const valuesArray = Array.from(options);
    const children_ = React.Children.toArray(children).filter((child) =>
      isComboboxOption(child),
    ) as React.ReactElement<ComboboxOptionProps>[];

    const activeValue = valuesArray.find((item) => item.label === inputValue);

    if (activeValue && !multiple) return children_;
    if (inputValue === '' && !multiple) return children_;

    return children_.filter((child) => {
      const { value } = child.props;

      const option = valuesArray.find((item) => item.value === value);

      if (!option) return false;
      return filter(inputValue, { ...option });
    });
  }, [options, children, inputValue, multiple, filter]);

  const optionValues = useMemo(() => {
    // create an index map of values from optionsChildren
    return optionsChildren.map((child) => {
      const { value } = child.props;
      return value;
    });
  }, [optionsChildren]);

  const restChildren = useMemo(() => {
    return React.Children.toArray(children).filter((child) => {
      return !isComboboxOption(child);
    });
  }, [children]);

  return {
    optionsChildren,
    optionValues,
    restChildren,
    options,
  };
}

export function isComboboxOption(
  child: React.ReactNode,
): child is React.ReactElement<ComboboxOptionProps> {
  return React.isValidElement(child) && child.type === ComboboxOption;
}
