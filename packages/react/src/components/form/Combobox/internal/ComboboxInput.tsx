import { useContext, useEffect, useState } from 'react';
import type * as React from 'react';
import cl from 'clsx';
import { ChevronUpIcon, ChevronDownIcon } from '@navikt/aksel-icons';
import { useMergeRefs } from '@floating-ui/react';

import { ComboboxContext } from '../Combobox';
import classes from '../Combobox.module.css';
import { Box } from '../../../Box';
import textFieldClasses from '../../Textfield/Textfield.module.css';
import { omit } from '../../../../utilities';

import ComboboxChips from './ComboboxChips';
import ComboboxClearButton from './ComboboxClearButton';

export const ComboboxInput = ({
  ...rest
}: Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>) => {
  const context = useContext(ComboboxContext);

  if (!context) {
    throw new Error('ComboboxContext is missing');
  }

  const {
    forwareddRef,
    listId,
    size,
    readOnly,
    disabled,
    open,
    inputRef,
    refs,
    inputValue,
    activeDescendant,
    error,
    multiple,
    selectedOptions,
    formFieldProps,
    htmlSize,
    options,
    hideChips,
    hideClearButton,
    setOpen,
    setActiveIndex,
    handleKeyDown,
    getReferenceProps,
    setInputValue,
    handleSelectOption,
  } = context;

  const mergedRefs = useMergeRefs([forwareddRef, inputRef]);

  // we need to check if input is in focus, to add focus styles to the wrapper
  const [inputInFocus, setInputInFocus] = useState(false);
  useEffect(() => {
    const input = inputRef.current;
    const onFocus = () => {
      setInputInFocus(true);
    };
    const onBlur = () => {
      setInputInFocus(false);
    };

    input?.addEventListener('focus', onFocus);
    input?.addEventListener('blur', onBlur);

    return () => {
      input?.removeEventListener('focus', onFocus);
      input?.removeEventListener('blur', onBlur);
    };
  }, [inputRef]);

  // onChange function for the input
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    setActiveIndex(0);

    if (typeof value === 'string') {
      setOpen(true);
    } else {
      setOpen(false);
    }

    // check if input value is the same as a label, if so, select it
    const option = options.find((option) => option.label === value);
    if (!option) return;
    if (
      selectedOptions.find(
        (selectedOption) => selectedOption.value === option.value,
      )
    )
      return;

    handleSelectOption(option);

    if (multiple) {
      inputRef.current?.focus();
    } else {
      // move cursor to the end of the input
      setTimeout(() => {
        inputRef.current?.setSelectionRange(
          option?.label?.length || 0,
          option?.label?.length || 0,
        );
      }, 0);
    }
  };

  const showClearButton =
    multiple && !hideClearButton && selectedOptions.length > 0;

  return (
    <Box
      /* Props from floating-ui */
      {...getReferenceProps({
        ref: refs?.setReference,
        role: null,
        'aria-controls': null,
        'aria-expanded': null,
        'aria-haspopup': null,
        /* If we click the wrapper, open the list, set index to first option, and focus the input */
        onClick() {
          if (disabled) return;
          if (readOnly) return;
          setOpen(true);
          setActiveIndex(0);
          inputRef.current?.focus();
        },
        /* Handles list navigation */
        onKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
          handleKeyDown(event);
        },
        // preventDefault on keydown to avoid sending in form
        onKeyPress(event: React.KeyboardEvent<HTMLDivElement>) {
          if (event.key === 'Enter') {
            event.preventDefault();
          }
        },
      })}
      aria-disabled={disabled}
      className={cl(
        textFieldClasses.input,
        classes.inputWrapper,
        classes[size],
        inputInFocus && classes.inFocus,
        readOnly && classes.readonly,
        error && classes.error,
      )}
    >
      <div className={classes.chipAndInput}>
        {/* If the input is in multiple mode, we need to display chips */}
        {multiple && !hideChips && <ComboboxChips />}
        <input
          ref={mergedRefs}
          aria-activedescendant={activeDescendant}
          readOnly={readOnly}
          aria-autocomplete='list'
          role='combobox'
          aria-expanded={open}
          aria-controls={listId}
          autoComplete='off'
          size={htmlSize}
          value={inputValue}
          {...omit(['style', 'className'], rest)}
          {...formFieldProps.inputProps}
          onChange={(e) => {
            onChange(e);
            rest.onChange && rest.onChange(e);
          }}
        />
      </div>
      {/* Clear button if we are in multiple mode and have at least one active value */}
      {showClearButton && <ComboboxClearButton />}
      {/* Arrow for combobox. Click is handled by the wrapper */}
      <div className={classes.arrow}>
        {open ? (
          <ChevronUpIcon
            title='arrow up'
            fontSize='1.5em'
          />
        ) : (
          <ChevronDownIcon
            title='arrow down'
            fontSize='1.5em'
          />
        )}
      </div>
    </Box>
  );
};

ComboboxInput.displayName = 'ComboboxInput';

export default ComboboxInput;
